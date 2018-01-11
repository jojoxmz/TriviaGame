var time = 10;
var results= $('#results');
var total= 5;
var correct= 0;
var incorrect=0;
var questionsContainer= $('#quiz');


var q1Answer= "d";
var q2Answer= "b";
var q3Answer= "a";
var q4Answer= "c";
var q5Answer= "a";



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
		 $("#start-button").on("click", function(e) {
		   	console.log('start button clicked')
		   	e.preventDefault();
    		$(this).hide();
			
			$("#timer").text("Time Remaining: 00:00");
	    	start();

	    	$('#questions').show();
		
	});

			$('#submit').on("click", function(e){
				e.preventDefault();
				$("#questions").hide();	

	            
	            var q1= $('input[name="q1"]:checked').val();
	            	console.log(q1);
	            var q2= $('input[name="q2"]:checked').val();
	           		console.log(q2);
	            var q3= $('input[name="q3"]:checked').val();
	            	console.log(q3);
	            var q4= $('input[name="q4"]:checked').val();
	            	console.log(q4);
	            var q5= $('input[name="q5"]:checked').val();
	            	console.log(q5);

	            	if(q1 == q1Answer){
	            		correct++;
	            		console.log('Correct:' + correct);	
	            	}else{
	            		incorrect++;
	            		console.log('Incorrect:' + incorrect);
	            	};

	            	if(q2 == q2Answer){
	            		correct++;
	            		console.log('Correct:' + correct);	
	            	}else{
	            		incorrect++;
	            		console.log('Incorrect:' + incorrect);
	            	};

	            	if(q3 == q3Answer){
	            		correct++;
	            		console.log('Correct:' + correct);	
	            	}else{
	            		incorrect++;
	            		console.log('Incorrect:' + incorrect);
	            	};

	            	if(q4 == q4Answer){
	            		correct++;
	            		console.log('Correct:' + correct);	
	            	}else{
	            		incorrect++;
	            		console.log('Incorrect:' + incorrect);
	            	};

	            	if(q5 == q5Answer){
	            		correct++;
	            		console.log('Correct:' + correct);	
	            	}else{
	            		incorrect++;
	            		console.log('Incorrect:' + incorrect);
	            	};
				
				results.text("You scored: " + correct + " correct and " + incorrect + " incorrect  out of " + total);

			});

 });