var buttonColours = ["red","blue", "green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {
    $("#"+randomChosenColour).fadeOut(250).fadeIn(250);
    userChosenColour = $(this).attr("id")
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
});

function nextSequence() {
   var randomNumber = Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   
   playSound(userChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3").play();
}

function animatePress(currentColour) {
    $(currentColour).
}