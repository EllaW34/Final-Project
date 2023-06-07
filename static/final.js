$(document).ready(function(){
    $("#cardDraw").hide();
    drawingCard = false;
    pickingToken = false;
    
    $("#startGame").click(function() {
        $(".drawnCard").load("/startGame");
        document.getElementById("gameInstructions").innerHTML = "Yellow, draw a card";
        $("#cardDraw").show();
        $("#startGame").hide();
        yellowTurn = true;
        greenTurn = false;
        redTurn = false;
        blueTurn = false;
        drawingCard = true;
    });
    
    $("#cardDraw").click(function() {
        if(drawingCard) {
            $(".drawnCard").load("/drawCard");
            document.getElementById("gameInstructions").innerHTML = "Pick a piece to move.";
            drawingCard = false;
            pickingToken = true;
        }
    });
    
    
    
    $(".dot").click(function() {
        if(pickingToken) {
            if(yellowTurn) {
                if(this.classList.contains("yellow") == true) {
                    id = this.className.substring(4, 6);
                    $.post("/moveYellow", {"piece": this.className.substring(4, 6)}, function(result) {
                        number = result.substring(result.indexOf("number") + 9, result.indexOf(", 'type'"));
                        type = result.substring(result.indexOf("type") + 8, result.indexOf("'}}"));
                        
                        if(type == "yellow") {
                            if(number == 0){
                                document.getElementById(id).style.top = "35.5%";
                                document.getElementById(id).style.left = "38%";
                            }
                            if(number == 1){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 2){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 3){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 4){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 5){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 6){
                                document.getElementById(id).style.top = "64%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                        }
                        else if(type == "white") {
                            if(number == 1){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 2){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "28.4%";
                            }
                            if(number == 3){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 4){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "35%";
                            }
                            if(number == 5){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "38.2%";
                            }
                            if(number == 6){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "41.4%";
                            }
                            if(number == 7){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "44.6%";
                            }
                            if(number == 8){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "47.8%";
                            }
                            if(number == 9){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "51%";
                            }
                            if(number == 10){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "54.2%";
                            }
                            if(number == 11){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "57.4%";
                            }
                            if(number == 12){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "60.6%";
                            }
                            if(number == 13){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "63.8%";
                            }
                            if(number == 14){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "67%";
                            }
                            if(number == 15){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "70.2%";
                            }
                            if(number == 16){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 17){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 18){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 19){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 20){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 21){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 22){
                                document.getElementById(id).style.top = "61.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 23){
                                document.getElementById(id).style.top = "67%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 24){
                                document.getElementById(id).style.top = "72.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 25){
                                document.getElementById(id).style.top = "78.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 26){
                                document.getElementById(id).style.top = "84%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 27){
                                document.getElementById(id).style.top = "90%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 28){
                                document.getElementById(id).style.top = "95.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 29){
                                document.getElementById(id).style.top = "101%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 30){
                                document.getElementById(id).style.top = "107%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 31){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 32){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "70.2%";
                            }
                            if(number == 33){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "67%";
                            }
                            if(number == 34){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "63.8%";
                            }
                            if(number == 35){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "60.6%";
                            }
                            if(number == 36){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "57.4%";
                            }
                            if(number == 37){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "54.2%";
                            }
                            if(number == 38){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "51%";
                            }
                            if(number == 39){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "47.8%";
                            }
                            if(number == 40){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "44.6%";
                            }
                            if(number == 41){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "41.4%";
                            }
                            if(number == 41){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "38.2%";
                            }
                            if(number == 43){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "35%";
                            }
                            if(number == 44){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "31.6%";
                            }
                            if(number == 45){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "28.4%";
                            }
                            if(number == 46){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 47){
                                document.getElementById(id).style.top = "107%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 48){
                                document.getElementById(id).style.top = "101%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 49){
                                document.getElementById(id).style.top = "95.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 50){
                                document.getElementById(id).style.top = "90%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 51){
                                document.getElementById(id).style.top = "84%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 52){
                                document.getElementById(id).style.top = "78.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 53){
                                document.getElementById(id).style.top = "72.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 54){
                                document.getElementById(id).style.top = "67%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 55){
                                document.getElementById(id).style.top = "61.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 56){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 57){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 58){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 59){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 60){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                        }
                    });
                    document.getElementById("gameInstructions").innerHTML = "Green's turn";
                    greenTurn = true;
                    yellowTurn = false;
                    pickingToken = false;
                    drawingCard = true;
                }
            }
            else if(greenTurn) {
                if(this.classList.contains("green") == true) {
                    id = this.className.substring(4, 6);
                    $.post("/moveGreen", {"piece": this.className.substring(4, 6)}, function(result) {
                        number = result.substring(result.indexOf("number") + 9, result.indexOf(", 'type'"));
                        type = result.substring(result.indexOf("type") + 8, result.indexOf("'}}"));
                        
                        if(type == "green") {
                            if(number == 0){
                                document.getElementById(id).style.top = "35.5%";
                                document.getElementById(id).style.left = "38%";
                            }
                            if(number == 1){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 2){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 3){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 4){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 5){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 6){
                                document.getElementById(id).style.top = "64%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                        }
                        else if(type == "white") {
                            if(number == 1){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 2){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "28.4%";
                            }
                            if(number == 3){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 4){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "35%";
                            }
                            if(number == 5){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "38.2%";
                            }
                            if(number == 6){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "41.4%";
                            }
                            if(number == 7){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "44.6%";
                            }
                            if(number == 8){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "47.8%";
                            }
                            if(number == 9){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "51%";
                            }
                            if(number == 10){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "54.2%";
                            }
                            if(number == 11){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "57.4%";
                            }
                            if(number == 12){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "60.6%";
                            }
                            if(number == 13){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "63.8%";
                            }
                            if(number == 14){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "67%";
                            }
                            if(number == 15){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "70.2%";
                            }
                            if(number == 16){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 17){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 18){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 19){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 20){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 21){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 22){
                                document.getElementById(id).style.top = "61.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 23){
                                document.getElementById(id).style.top = "67%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 24){
                                document.getElementById(id).style.top = "72.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 25){
                                document.getElementById(id).style.top = "78.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 26){
                                document.getElementById(id).style.top = "84%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 27){
                                document.getElementById(id).style.top = "90%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 28){
                                document.getElementById(id).style.top = "95.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 29){
                                document.getElementById(id).style.top = "101%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 30){
                                document.getElementById(id).style.top = "107%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 31){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 32){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "70.2%";
                            }
                            if(number == 33){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "67%";
                            }
                            if(number == 34){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "63.8%";
                            }
                            if(number == 35){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "60.6%";
                            }
                            if(number == 36){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "57.4%";
                            }
                            if(number == 37){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "54.2%";
                            }
                            if(number == 38){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "51%";
                            }
                            if(number == 39){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "47.8%";
                            }
                            if(number == 40){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "44.6%";
                            }
                            if(number == 41){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "41.4%";
                            }
                            if(number == 41){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "38.2%";
                            }
                            if(number == 43){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "35%";
                            }
                            if(number == 44){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "31.6%";
                            }
                            if(number == 45){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "28.4%";
                            }
                            if(number == 46){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 47){
                                document.getElementById(id).style.top = "107%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 48){
                                document.getElementById(id).style.top = "101%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 49){
                                document.getElementById(id).style.top = "95.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 50){
                                document.getElementById(id).style.top = "90%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 51){
                                document.getElementById(id).style.top = "84%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 52){
                                document.getElementById(id).style.top = "78.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 53){
                                document.getElementById(id).style.top = "72.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 54){
                                document.getElementById(id).style.top = "67%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 55){
                                document.getElementById(id).style.top = "61.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 56){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 57){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 58){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 59){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 60){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                        }
                    });
                    document.getElementById("gameInstructions").innerHTML = "Red's turn";
                    redTurn = true;
                    greenTurn = false;
                    pickingToken = false;
                    drawingCard = true;
                }
            }
            else if(redTurn) {
                if(this.classList.contains("red") == true) {
                    id = this.className.substring(4, 6);
                    $.post("/moveRed", {"piece": this.className.substring(4, 6)}, function(result) {
                        number = result.substring(result.indexOf("number") + 9, result.indexOf(", 'type'"));
                        type = result.substring(result.indexOf("type") + 8, result.indexOf("'}}"));
                        
                        if(type == "red") {
                            if(number == 0){
                                document.getElementById(id).style.top = "35.5%";
                                document.getElementById(id).style.left = "38%";
                            }
                            if(number == 1){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 2){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 3){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 4){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 5){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 6){
                                document.getElementById(id).style.top = "64%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                        }
                        else if(type == "white") {
                            if(number == 1){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 2){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "28.4%";
                            }
                            if(number == 3){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 4){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "35%";
                            }
                            if(number == 5){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "38.2%";
                            }
                            if(number == 6){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "41.4%";
                            }
                            if(number == 7){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "44.6%";
                            }
                            if(number == 8){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "47.8%";
                            }
                            if(number == 9){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "51%";
                            }
                            if(number == 10){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "54.2%";
                            }
                            if(number == 11){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "57.4%";
                            }
                            if(number == 12){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "60.6%";
                            }
                            if(number == 13){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "63.8%";
                            }
                            if(number == 14){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "67%";
                            }
                            if(number == 15){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "70.2%";
                            }
                            if(number == 16){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 17){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 18){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 19){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 20){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 21){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 22){
                                document.getElementById(id).style.top = "61.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 23){
                                document.getElementById(id).style.top = "67%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 24){
                                document.getElementById(id).style.top = "72.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 25){
                                document.getElementById(id).style.top = "78.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 26){
                                document.getElementById(id).style.top = "84%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 27){
                                document.getElementById(id).style.top = "90%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 28){
                                document.getElementById(id).style.top = "95.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 29){
                                document.getElementById(id).style.top = "101%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 30){
                                document.getElementById(id).style.top = "107%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 31){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 32){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "70.2%";
                            }
                            if(number == 33){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "67%";
                            }
                            if(number == 34){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "63.8%";
                            }
                            if(number == 35){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "60.6%";
                            }
                            if(number == 36){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "57.4%";
                            }
                            if(number == 37){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "54.2%";
                            }
                            if(number == 38){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "51%";
                            }
                            if(number == 39){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "47.8%";
                            }
                            if(number == 40){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "44.6%";
                            }
                            if(number == 41){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "41.4%";
                            }
                            if(number == 41){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "38.2%";
                            }
                            if(number == 43){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "35%";
                            }
                            if(number == 44){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "31.6%";
                            }
                            if(number == 45){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "28.4%";
                            }
                            if(number == 46){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 47){
                                document.getElementById(id).style.top = "107%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 48){
                                document.getElementById(id).style.top = "101%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 49){
                                document.getElementById(id).style.top = "95.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 50){
                                document.getElementById(id).style.top = "90%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 51){
                                document.getElementById(id).style.top = "84%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 52){
                                document.getElementById(id).style.top = "78.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 53){
                                document.getElementById(id).style.top = "72.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 54){
                                document.getElementById(id).style.top = "67%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 55){
                                document.getElementById(id).style.top = "61.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 56){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 57){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 58){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 59){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 60){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                        }
                    });
                    document.getElementById("gameInstructions").innerHTML = "Blue's turn";
                    blueTurn = true;
                    redTurn = false;
                    pickingToken = false;
                    drawingCard = true;
                }
            }
            else if(blueTurn) {
                if(this.classList.contains("blue") == true) {
                    id = this.className.substring(4, 6);
                    $.post("/moveBlue", {"piece": this.className.substring(4, 6)}, function(result) {
                        number = result.substring(result.indexOf("number") + 9, result.indexOf(", 'type'"));
                        type = result.substring(result.indexOf("type") + 8, result.indexOf("'}}"));
                        
                        if(type == "blue") {
                            if(number == 0){
                                document.getElementById(id).style.top = "35.5%";
                                document.getElementById(id).style.left = "38%";
                            }
                            if(number == 1){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 2){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 3){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 4){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 5){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 6){
                                document.getElementById(id).style.top = "64%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                        }
                        else if(type == "white") {
                            if(number == 1){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 2){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "28.4%";
                            }
                            if(number == 3){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "31.58%";
                            }
                            if(number == 4){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "35%";
                            }
                            if(number == 5){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "38.2%";
                            }
                            if(number == 6){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "41.4%";
                            }
                            if(number == 7){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "44.6%";
                            }
                            if(number == 8){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "47.8%";
                            }
                            if(number == 9){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "51%";
                            }
                            if(number == 10){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "54.2%";
                            }
                            if(number == 11){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "57.4%";
                            }
                            if(number == 12){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "60.6%";
                            }
                            if(number == 13){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "63.8%";
                            }
                            if(number == 14){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "67%";
                            }
                            if(number == 15){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "70.2%";
                            }
                            if(number == 16){
                                document.getElementById(id).style.top = "27%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 17){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 18){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 19){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 20){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 21){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 22){
                                document.getElementById(id).style.top = "61.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 23){
                                document.getElementById(id).style.top = "67%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 24){
                                document.getElementById(id).style.top = "72.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 25){
                                document.getElementById(id).style.top = "78.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 26){
                                document.getElementById(id).style.top = "84%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 27){
                                document.getElementById(id).style.top = "90%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 28){
                                document.getElementById(id).style.top = "95.5%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 29){
                                document.getElementById(id).style.top = "101%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 30){
                                document.getElementById(id).style.top = "107%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 31){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "73.4%";
                            }
                            if(number == 32){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "70.2%";
                            }
                            if(number == 33){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "67%";
                            }
                            if(number == 34){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "63.8%";
                            }
                            if(number == 35){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "60.6%";
                            }
                            if(number == 36){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "57.4%";
                            }
                            if(number == 37){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "54.2%";
                            }
                            if(number == 38){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "51%";
                            }
                            if(number == 39){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "47.8%";
                            }
                            if(number == 40){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "44.6%";
                            }
                            if(number == 41){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "41.4%";
                            }
                            if(number == 41){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "38.2%";
                            }
                            if(number == 43){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "35%";
                            }
                            if(number == 44){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "31.6%";
                            }
                            if(number == 45){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "28.4%";
                            }
                            if(number == 46){
                                document.getElementById(id).style.top = "113%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 47){
                                document.getElementById(id).style.top = "107%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 48){
                                document.getElementById(id).style.top = "101%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 49){
                                document.getElementById(id).style.top = "95.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 50){
                                document.getElementById(id).style.top = "90%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 51){
                                document.getElementById(id).style.top = "84%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 52){
                                document.getElementById(id).style.top = "78.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 53){
                                document.getElementById(id).style.top = "72.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 54){
                                document.getElementById(id).style.top = "67%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 55){
                                document.getElementById(id).style.top = "61.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 56){
                                document.getElementById(id).style.top = "55.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 57){
                                document.getElementById(id).style.top = "50%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 58){
                                document.getElementById(id).style.top = "44%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 59){
                                document.getElementById(id).style.top = "38.5%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                            if(number == 60){
                                document.getElementById(id).style.top = "33%";
                                document.getElementById(id).style.left = "25.2%";
                            }
                        }
                    });
                    document.getElementById("gameInstructions").innerHTML = "Yellow's turn";
                    yellowTurn = true;
                    blueTurn = false;
                    pickingToken = false;
                    drawingCard = true;
                }
            }
        }
    });
    
});