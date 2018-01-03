var time = 5;
var results= $('#results');
var total= 5;
var correct= 0;
var incorrect=0;
var questionsContainer= $('#quiz');



function reset() {
	$("#timer").text("00:00");
	time;
};

function count() {
	time--;
	var converted = timeConverter(time);
	$("#timer").text('Time Remaining: ' + converted);
	if (time === 0){
		stop();
		results

	};
};

function start() {
	intervalId = setInterval(count, 1000);
  
};

function stop() {
	stopping= true;
	console.log("stopping");
	clearInterval(intervalId);
	if (time === 0) {
		$("#questions").empty();	
	    results.text("You scored: " + correct + " out of " + total);
	    //return false;
	  }

};

function timeConverter(t) {
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
};




$(document).ready(function(){

	$('#questions').hide();	

		//when start button is clicked- game starts
		 $("#start-button").on("click", function() {
		   	console.log('start button clicked')
    		$(this).hide();
			
			$("#timer").text("Time Remaining: 00:00");
	    	start();

			$('#questions').show();
            
            function submitAnswers(){

			var q1= document.forms["quizform"]["q1"].value;
			var q2= document.forms["quizform"]["q2"].value;
			var q3= document.forms["quizform"]["q3"].value;
			var q4= document.forms["quizform"]["q4"].value;
			var q5= document.forms["quizform"]["q5"].value;

			for(i= 1; i<total; i++){
				if(eval('q' + i) == null || eval('q' + i) == ""){
					return false;
				};
			};

			var answers= ['d','b','a','c','a'];

			for(i = 1; i < total; i++){
				if(eval('q' + i) == answers[i -1]){
					correct++;
					console.log(correct);
			}else {
				incorrect++;
				console.log(incorrect);
			};
			};

			};

	});



 });