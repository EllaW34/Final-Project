$(document).ready(function(){
    $("#cardDraw").hide();
    
    $("#startGame").click(function() {
        $(".drawnCard").load("/startGame");
        document.getElementById("gameInstructions").innerHTML = "More Game Instructions.";
        $("#cardDraw").show();
        $("#startGame").hide();
    });
    
    $("#cardDraw").click(function() {
        $(".drawnCard").load("/drawCard");
    });
});