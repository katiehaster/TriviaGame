var time = 47000;

// $("#start").on("click", start);

// window.onload = function() {
  
//   time--;
// };
start();

function start() {
  console.log("start function");
  time--;
  $("#timer").html(time);

  if (time === 0) {
    alert("DONE");
  }
  }







