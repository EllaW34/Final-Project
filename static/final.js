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
                    $.post("/moveYellow", {"piece": this.className.substring(4, 6)}, function() {
                        
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
                    $.post("/moveGreen", {"piece": this.className.substring(4, 6)}, function() {
                        
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
                    $.post("/moveRed", {"piece": this.className.substring(4, 6)}, function() {
                        
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
                    $.post("/moveBlue", {"piece": this.className.substring(4, 6)}, function() {
                        
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