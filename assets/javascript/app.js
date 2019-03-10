
var countdown;
var intervalId;
var time = 25;
var guesses = [];
var correctAnswers=0;



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
    reset ();
  };
}

function reset() {
  time = 0;
  $("#timer").html(time);
  $(".2ndpage").hide();
  $(".3rdpage").show();
  let guesses = $(".question");
  console.log(guesses);
}

$("#all-done-button").click(function(){
   let guesses = $(".question");
   $(".2ndpage").hide();
   $(".3rdpage").show();
  console.log(guesses);
  rightAnswers ();
  $("#correct-answers").text("Right answers: " + correctAnswers);
  // console.log(guesses.attr('data-answer'));
  
});

// Right and Wrong Answer Tally and Display
  function rightAnswers() {
    console.log($(".questions").data("answers") === true);
    // console.log($(guesses[0]).data("answer"));
    // for (let i = 0; i < guesses.length; i++) {
    //   console.log($(guesses[i]).attr('data-answer'));
    //   if (($(guesses[i]).attr('data-answer')) === true) {
    //     correctAnswers++;
    //     console.log(correctAnswers);
      

      
      
  }

    
    
  












// sets checked guesses to reveal as checked
// let guesses = $(":checked");
// console.log(guesses);

// for (let i = 0; i < guesses.length; i++) {
//   if($(guesses[i]).atrr("data-answer") === true){

//   }
  
// }






// Search DOM for all "correct" id's that have been checked. Add them together to tally correct answer

// For incorrect answers, tally by subtracting the correct answers from the total number of questions

// For no answer, do for loop for each question to see if there was no answer given. 














