// var questions= [
// 	{
// 		question: "Through what part of the body do dogs sweat?",
// 		correctAnswer: 3,
// 		allAnswers: ["Mouth", "Ears", "Nose", "Paws"],
// 	},
// 	{
// 		question: "Is Ben the best?",
// 		correctAnswer: 2,
// 		allAnswers: ["Nope he's a dumb butt","Who's Ben?", "Abso-freakin-lootely", "Apple pie"]
// 	},

// 	{
// 		question: "Which TV series had a dog named K9 who was also a robot?",
// 		correctAnswer: 1,
// 		allAnswers:["Full House", "Doctor Who", "Star Trek", "Law & Order"]
// 	},

// 	{
// 		question: "What breed of dog is the smallest used in hunting?",
// 		correctAnswer: 0,
// 		allAnswers:["Miniature dachshund", "Chihuahua", "Toy poodle", "Smooth fox terrier"],
// 	},

// 	{
// 		question: "Which dog breed has a black tongue?",
// 		correctAnswer: 2,
// 		allAnswers:["Husky", "Labrador", "Chow Chow", "Weimaraner"],
// 	},

// 	{
// 		question: "Which breed was once known as St. John’s Newfoundland?",
// 		correctAnswer: 0,
// 		allAnswers:["Labrador", "Newfoundland", "Golden retriever", "Puli"],
// 	}	
// ];



var time = 50;
var stopping = false;


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
	};
};

function start() {
	intervalId = setInterval(count, 1000);
  
};

function stop() {
	stopping= true;
	console.log("stopping");
	clearInterval(intervalId);
	$('#questions').hide();
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


var questionsContainer= $('#quiz');
var results= $('#results');
var submitButton= $('#submit-button');
var userAnswer = '';

			
var currentquestionCounter = 0;
var correctAnswersCounter = 0;
var incorrectAnswersCounter= 0;


$(document).ready(function(){

	$('#questions').hide();	

		//when start button is clicked- game starts
		 $("#start-button").on("click", function() {
		   	console.log('start button clicked')
    		$(this).hide();
			
			$("#timer").text("Time Remaining: 00:00");
	    	start();

			$('#questions').show();
            
            // if answer is correct
            if($('.correctAnswer').on("click", function(){
                // add to the number of correct answers
                correctAnswersCounter ++;
                console.log('Correct: ' + correctAnswersCounter);
            }));else if ($('.notCorrect').on("click", function(){
            	incorrectAnswersCounter ++;
            	console.log('Incorrect: ' + incorrectAnswersCounter);
        	}));

        	else if (time === 0) {
		 	$('#questions').hide();
		 	$(results).text('Correct: ' + correctAnswersCounter + ' Incorrect: ' + incorrectAnswersCounter + ' Unanswered: ' + unanswered);
		 	console.log('Correct: ' + correctAnswer + ' Incorrect: ' + incorrectAnswersCounter + ' Unanswered: ' + unanswered);
			};

		 });

		 

	});