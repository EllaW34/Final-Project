$(document).ready(function(){
    $("#cardDraw").hide();
    
    yellowTurn = true
    greenTurn = false
    redTurn = false
    blueTurn = false
    
    $("#startGame").click(function() {
        $(".drawnCard").load("/startGame");
        document.getElementById("gameInstructions").innerHTML = "Yellow, draw a card";
        $("#cardDraw").show();
        $("#startGame").hide();
    });
    
    $("#cardDraw").click(function() {
        $(".drawnCard").load("/drawCard");
        document.getElementById("gameInstructions").innerHTML = "Pick a piece to move.";
        /*if(yellowTurn) {
            document.getElementById("gameInstructions").innerHTML = "Green's turn";
            greenTurn = true;
            yellowTurn = false;
        }
        else if(greenTurn) {
            document.getElementById("gameInstructions").innerHTML = "Red's turn";
            redTurn = true;
            greenTurn = false;
        }
        else if(redTurn) {
            document.getElementById("gameInstructions").innerHTML = "Blue's turn";
            blueTurn = true;
            redTurn = false;
        }
        else if(blueTurn) {
            document.getElementById("gameInstructions").innerHTML = "Yellow's turn";
            yellowTurn = true;
            blueTurn = false;
        }*/
    });
    
    
});