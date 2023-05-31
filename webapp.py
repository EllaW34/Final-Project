from flask import Flask, redirect, url_for, session, request, jsonify, render_template, flash
from flask_apscheduler import APScheduler
from apscheduler.schedulers.background import BackgroundScheduler
from flask_oauthlib.client import OAuth
from bson.objectid import ObjectId
import pprint
import os
import time
import pymongo
import sys
import random
 
app = Flask(__name__)

#initialize scheduler with your preferred timezone
scheduler = BackgroundScheduler({'apscheduler.timezone': 'America/Los_Angeles'})
scheduler.start()
 
app.secret_key = os.environ['SECRET_KEY'] #used to sign session cookies
oauth = OAuth(app)
oauth.init_app(app) #initialize the app to be able to make requests for user information

#Set up GitHub as OAuth provider
github = oauth.remote_app(
    'github',
    consumer_key=os.environ['GITHUB_CLIENT_ID'], #your web app's "username" for github's OAuth
    consumer_secret=os.environ['GITHUB_CLIENT_SECRET'],#your web app's "password" for github's OAuth
    request_token_params={'scope': 'user:email'}, #request read-only access to the user's email.  For a list of possible scopes, see developer.github.com/apps/building-oauth-apps/scopes-for-oauth-apps
    base_url='https://api.github.com/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://github.com/login/oauth/access_token',  
    authorize_url='https://github.com/login/oauth/authorize' #URL for github's OAuth login
)

#Connect to database
url = os.environ["MONGO_CONNECTION_STRING"]
client = pymongo.MongoClient(url)
db = client[os.environ["MONGO_DBNAME"]]
cardsCollection = db['CardsCollection'] #TODO: put the name of the collection here
posCollection = db['PositionsCollection']

print("connected to db")

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1' #Remove once done debugging

#context processors run before templates are rendered and add variable(s) to the template's context
#context processors must return a dictionary 
#this context processor adds the variable logged_in to the conext for all templates
@app.context_processor
def inject_logged_in():
    return {"logged_in":('github_token' in session)}

@app.route('/')
def home():
    return render_template('home.html')

#redirect to GitHub's OAuth page and confirm callback URL
@app.route('/login')
def login():     
    return github.authorize(callback=url_for('authorized', _external=True, _scheme='http')) #callback URL must match the pre-configured callback URL

@app.route('/logout')
def logout():
    session.clear()
    flash('You were logged out.')
    return redirect('/')

@app.route('/login/authorized')
def authorized():
    resp = github.authorized_response()
    if resp is None:
        session.clear()
        flash('Access denied: reason=' + request.args['error'] + ' error=' + request.args['error_description'] + ' full=' + pprint.pformat(request.args), 'error')      
    else:
        try:
            session['github_token'] = (resp['access_token'], '') #save the token to prove that the user logged in
            session['user_data']=github.get('user').data
            #pprint.pprint(vars(github['/email']))
            #pprint.pprint(vars(github['api/2/accounts/profile/']))
            flash('You were successfully logged in as ' + session['user_data']['login'] + '.')
        except Exception as inst:
            session.clear()
            print(inst)
            flash('Unable to login, please try again.', 'error')
    return redirect('/')

@app.route('/startGame')
def startGame():
    session["cards"] = []
    session["positions"] = []
    for c in cardsCollection.find():
        cardsDict = {"amount": c["amount"], "direction": c["direction"]}
        session["cards"].append(cardsDict)
    for p in posCollection.find():
        posDict = {"type": p["type"], "number": p["number"]}
        session["positions"].append(posDict)
    session["y1"] = {"position": session["positions"][session["positions"].index({"type": "yellow", "number": 0})]}
    session["y2"] = {"position": session["positions"][session["positions"].index({"type": "yellow", "number": 0})]}
    session["y3"] = {"position": session["positions"][session["positions"].index({"type": "yellow", "number": 0})]}
    session["y4"] = {"position": session["positions"][session["positions"].index({"type": "yellow", "number": 0})]}
    session["g1"] = {"position": session["positions"][session["positions"].index({"type": "green", "number": 0})]}
    session["g2"] = {"position": session["positions"][session["positions"].index({"type": "green", "number": 0})]}
    session["g3"] = {"position": session["positions"][session["positions"].index({"type": "green", "number": 0})]}
    session["g4"] = {"position": session["positions"][session["positions"].index({"type": "green", "number": 0})]}
    session["r1"] = {"position": session["positions"][session["positions"].index({"type": "red", "number": 0})]}
    session["r2"] = {"position": session["positions"][session["positions"].index({"type": "red", "number": 0})]}
    session["r3"] = {"position": session["positions"][session["positions"].index({"type": "red", "number": 0})]}
    session["r4"] = {"position": session["positions"][session["positions"].index({"type": "red", "number": 0})]}
    session["b1"] = {"position": session["positions"][session["positions"].index({"type": "blue", "number": 0})]}
    session["b2"] = {"position": session["positions"][session["positions"].index({"type": "blue", "number": 0})]}
    session["b3"] = {"position": session["positions"][session["positions"].index({"type": "blue", "number": 0})]}
    session["b4"] = {"position": session["positions"][session["positions"].index({"type": "blue", "number": 0})]}
    yellowTurn = True
    greenTurn = False
    redTurn = False
    blueTurn = False
    session["text1"] = "Yellow's turn"
    return session["text1"]

@app.route('/drawCard')
def drawCard():
    if len(session["cards"]) == 0:
        session["cards"] = []
        for c in cardsCollection.find():
            cardsDict = {"amount": c["amount"], "direction": c["direction"]}
            session["cards"].append(cardsDict)
        print("Cards Restocked")
    cardNum = random.randrange(0, len(session["cards"]))
    session["cardDrawn"] = session["cards"].pop(cardNum)
    session["text1"] = "Move " + str(session["cardDrawn"]['direction']) + ", " + str(session["cardDrawn"]['amount']) + " spaces."
    
    return session["text1"]

@app.route('/moveYellow', methods=['POST'])
def moveYellow():
    theThing = request.form
    print(theThing["piece"])
    move(theThing["piece"])
    
    return session[theThing["piece"]]
    
def move(piece):
    print(session["y4"])
    if session[piece] == "":
        return
    if session[piece]["position"]["type"] == "yellow":
        if session[piece]["position"]["number"] == 0:
            session[piece]["position"]["type"] = "white"
            session[piece]["position"]["number"] = 5
            session[piece]["position"]["number"] = session[piece]["position"]["number"] + session["cardDrawn"]["amount"]-1
        elif session[piece]["position"]["number"] > 0 and session[piece]["position"]["number"] < 6:
            if session[piece]["position"]["number"] + session["cardDrawn"]["amount"] < 7:
                session[piece]["position"]["number"] = session[piece]["position"]["number"] + session["cardDrawn"]["amount"]
    elif session[piece]["position"]["type"] == "white":
        print("move in white")
        if session[piece]["position"]["number"] + session["cardDrawn"]["amount"] > 60:
            temp = session[piece]["position"]["number"]
            session[piece]["position"]["number"] = 1
            if session[piece]["position"]["number"] + session["cardDrawn"]["amount"] - (60 - temp) - 1 > 3:
                session[piece]["position"]["type"] = "yellow"
                session[piece]["position"]["number"] = 1
                if session[piece]["position"]["number"] + session["cardDrawn"]["amount"] - (60 - temp) - 4 < 7:
                    session[piece]["position"]["number"] = session[piece]["position"]["number"] + session["cardDrawn"]["amount"] - (60 - temp) - 4
            else:
                session[piece]["position"]["number"] = session[piece]["position"]["number"] + session["cardDrawn"]["amount"] - (60 - session[piece]["position"]["number"]) - 1
        else:
            session[piece]["position"]["number"] = session[piece]["position"]["number"] + session["cardDrawn"]["amount"]
    if session[piece]["position"]["number"] == 17 or session[piece]["position"]["number"] == 32 or session[piece]["position"]["number"] == 47:
        session[piece]["position"]["number"] = session[piece]["position"]["number"] + 3
    elif session[piece]["position"]["number"] == 25 or session[piece]["position"]["number"] == 40 or session[piece]["position"]["number"] == 55:
        session[piece]["position"]["number"] = session[piece]["position"]["number"] + 4
    
    print(session["y4"])
    return session["y4"]
    
@app.route('/moveGreen', methods=['POST'])
def moveGreen():
    print(session["y4"])
    return 2
    
@app.route('/moveRed', methods=['POST'])
def moveRed():
    print(session["y4"])
    return 3
    
@app.route('/moveBlue', methods=['POST'])
def moveBlue():
    print(session["y4"])
    return 4

@app.route('/page1')
def renderPage1():
    return render_template('page1.html')

@app.route('/page2')
def renderPage2():
    if 'user_data' in session:
        user_data_pprint = pprint.pformat(session['user_data'])#format the user data nicely
    else:
        user_data_pprint = '';
    return render_template('page2.html',dump_user_data=user_data_pprint)

#the tokengetter is automatically called to check who is logged in.
@github.tokengetter
def get_github_oauth_token():
    return session['github_token']


if __name__ == '__main__':
    app.run(debug=True)
