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
    
    if(drawingCard) {
        alert("other card");
        $("#cardDraw").click(function() {
            alert("card");
            $(".drawnCard").load("/drawCard");
            document.getElementById("gameInstructions").innerHTML = "Pick a piece to move.";
            drawingCard = false;
            pickingToken = true;
        });
    }
    
    if(pickingToken) {
        $(".dot").click(function() {
            if(yellowTurn) {
                if(this.classList.contains("yellow") == true) {
                    $.post("/moveYellow", {"piece": this.className.substring(4, 6)}, function() {
                        alert("yay it worked");
                    });
                    document.getElementById("gameInstructions").innerHTML = "Green's turn";
                    greenTurn = true;
                    yellowTurn = false;
                }
            }
            else if(greenTurn) {
                if(this.classList.contains("green") == true) {
                    $.post("/moveGreen", {"piece": this.className.substring(4, 6)}, function() {
                        alert("yay it worked");
                    });
                    document.getElementById("gameInstructions").innerHTML = "Red's turn";
                    redTurn = true;
                    greenTurn = false;
                }
            }
            else if(redTurn) {
                if(this.classList.contains("red") == true) {
                    $.post("/moveRed", {"piece": this.className.substring(4, 6)}, function() {
                        alert("yay it worked");
                    });
                    document.getElementById("gameInstructions").innerHTML = "Blue's turn";
                    blueTurn = true;
                    redTurn = false;
                }
            }
            else if(blueTurn) {
                if(this.classList.contains("blue") == true) {
                    $.post("/moveBlue", {"piece": this.className.substring(4, 6)}, function() {
                        alert("yay it worked");
                    });
                    document.getElementById("gameInstructions").innerHTML = "Yellow's turn";
                    yellowTurn = true;
                    blueTurn = false;
                }
            }
            pickingToken = false;
            drawingCard = true;
        });
    }
});