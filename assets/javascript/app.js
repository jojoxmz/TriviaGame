//counter
var correct= 0;
var incorrect= 0;
var unanswered= 0;

var startGame= true;

var timeId;

var clockRunning = false;
var intervalId;
var stopwatch = {

  time: 0,
  lap: 1,
}



function startGame() {


//when start button is clicked- game starts
 $("#start-button").on("click", function() {
   	console.log('start button clicked')

    $('#start-button').remove();

    //use interval
    $("#timer").text("00:00");

	var converted = stopwatch.timeConverter(stopwatch.time);

    timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

    $('#guestions-for-trivia').html('ffajajl');


 });


}