var delayButtonAlert;
var timer;

$("#start").on("click", start);

function start() {
    delayButtonAlert = setTimeout(function() {
        console.log("Start button go")
      }, 2000);
};



