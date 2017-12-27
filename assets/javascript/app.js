//counter
var correct= 0;
var incorrect= 0;
var unanswered= 0;

// var questions= [
// 	{
// 		question: "Through what part of the body do dogs sweat?",
// 		correct: "Paws",
// 		answer: ["Mouth", "Ears", "Nose", "Paws"],
// 	},
// 	{
// 		question: "Is Ben the best?",
// 		correct: "Abso-freakin-lootely",
// 		answers: ["Nope he's a dumb butt","Who's Ben?", "Abso-freakin-lootely", "Apple pie"]
// 	},

// 	{
// 		question: "Which TV series had a dog named K9 who was also a robot?",
// 		correct: "Doctor Who",
// 		answers:["Full House", "Doctor Who", "Star Trek", "Law & Order"]
// 	},

// 	{
// 		question: "What breed of dog is the smallest used in hunting?",
// 		correct: "Miniature dachshund",
// 		answers:["Miniature dachshund", "Chihuahua", "Toy poodle", "Smooth fox terrier"],
// 	},

// 	{
// 		question: "Which dog breed has a black tongue?",
// 		correct: "Chow Chow",
// 		answers:["Husky", "Labrador", "Chow Chow", "Weimaraner"],
// 	},

// 	{
// 		question: "Which breed was once known as St. John’s Newfoundland?",
// 		correct: "Labrador",
// 		answers:["Labrador", "Newfoundland", "Golden retriever", "Puli"],
// 	}	
// ];

// function createQuestions(question) {
// 	$.each(questions.answers, function(index, value) {
// 		var btn = $("<button>");
// 		btn.text(questions.answers[index]);
// 	})
// };

var time = 60;

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


// var questionsContainer= $('#quiz');
var results= $('#results');
var submitButton= $('#submit-button');

// var correctAnswerChoice= $('.correctAnswer');

// function setUpQuiz(){

// 	var output =[];

// 	questions.forEach((currentQuestion,questionNumber) =>{
// 		//store the list of answer choices
// 		var answers= [];

// 		for(letter in currentQuestion.answers){
// 			answers.push(
// 				`<label>
// 					<input type= "radio"
// 					name="((question)${questionNumber})"
// 					value="${letter}">
// 						${letter}:

// 						${currentQuestion.answers[letter]}
// 				</label>`
// 		)};

// 	output.push(
// 		`<div class="slide">
// 			<div class="questions"> ${currentQuestion.question} </div>
// 			<div class="answers"> ${answers.join("")} </div>
// 		</div>`
// 			);
// 	return;
// });

// 	questions.innerHTML = output.join("");

// };

// function showResults(){};



$(document).ready(function(){

	$('#questions').hide();	

		//when start button is clicked- game starts
		 $("#start-button").on("click", function() {
		   	console.log('start button clicked')

		    $('#start-button').remove();
			
			$("#timer").text("Time Remaining: 00:00");

	    	start();

			$('#questions').show();

		 });

			var correctAnswerChoice= false;

		 	$('.correctAnswer').click(function(){
		 		correctAnswerChoice= true;

		 		if(correctAnswerChoice){
		 			correct ++;
		 			console.log('correct: ' + correct);
		 		}else{
		 			incorrect ++;
		 			console.log('incorrect: ' + incorrect);
		 		}

		 	});

		


})

