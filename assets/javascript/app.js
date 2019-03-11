
var countdown;
var intervalId;
var time = 60;
var guesses = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswer = 0;
var  clickedButton = 0;



$(document).ready(function() {
 });

$(".2ndpage").hide();

$("#start").click(function(){
  $("#cheersButton").hide();
  $(".2ndpage").show();
  countdown = setInterval(myTimer, 1000);
});

function myTimer() {
  $("#timer").html(time);
  time--;
  if (time === -1) {
    clearInterval(countdown);
    
    if(clickedButton === 0) {
    reset ();
    }
     
  }
}

function reset() {
  time = 0;
  $("#timer").html(time);
  alert("Your glass is empty and the bar is closing. Better luck next time!")
  $(".2ndpage").hide();
  $(".3rdpage").show();
  answers ();
  
}

$("#all-done-button").click(function(){
  clickedButton = 1;
   $(".2ndpage").hide();
   $(".3rdpage").show();
   answers ();

});

// Right and Wrong Answer Tally and Display
  function answers() {
    let guesses = $(".question");
    console.log(guesses.length+" guesses.length");
    for (let j = 0; j<guesses.length; j++){
      console.log($(guesses[j]).find("input").filter(":checked").data("answer"));
    }
    for (let i = 0; i < guesses.length; i++) {
      
      if (($(guesses[i]).find("input").filter(":checked").data("answer"))===true) {
        correctAnswers++;
      }
         else if (($(guesses[i]).find("input").filter(":checked").data("answer"))===false) {
          incorrectAnswers++;
        }
        else {
          noAnswer++;
        }
      
    }
    
    $("#right-answers").html(correctAnswers);
    $("#incorrect").html(incorrectAnswers);
    $("#no-answer").html(noAnswer);

    
    
    
      

      
      
  }

    
    
  




















