var buttonColors = ["red","blue","green","yellow"];
var gamePatern = [];
var userClickedPattern = [];
var level = 0;

$(document).keydown( function(event) {
  if (level == 0) {
    nextSequence();
  }
});

$(".btn").click(function (id){
  var usenChosenColour = this.id;
  userClickedPattern.push(usenChosenColour);
  pushButton(usenChosenColour);
  if ((userClickedPattern[userClickedPattern.length -1] != gamePatern[userClickedPattern.length -1]) && (gamePatern.length!=0)) {
    level = 0;
      $("#level-title")[0].innerHTML = "Press A Key to Start";
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      userClickedPattern.length = 0;
      gamePatern.length = 0;
  } else if (userClickedPattern.length==gamePatern.length) {
    setTimeout( function() {
    userClickedPattern.length = 0;
    console.log(gamePatern);
    console.log(userClickedPattern);
    nextSequence();
  }, 1000);
} else {

}
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePatern.push(randomChosenColour);
  pushButton(randomChosenColour);
  $("#level-title")[0].innerHTML = "Level " + level;
  level++;
}

function pushButton(buttonId) {
  $("." + buttonId).animate({opacity: 0.5},300).animate({opacity: 1},300);
  var audio = new Audio("sounds/" + buttonId + ".mp3");
  audio.play();
}
