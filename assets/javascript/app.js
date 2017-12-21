//counter
var correct= 0;
var incorrect= 0;
var unanswered= 0;

var questions= [
	{
		question: "Through what part of the body do dogs sweat?",
		correct: "Paws",
		answer: ["Mouth", "Ears", "Nose", "Paws"],
	},
	{
		question: "Is Ben the best?",
		correct: "Abso-freakin-lootely",
		answers: ["Nope he's a dumb butt","Who's Ben?","Apple Pie", "Abso-freakin-lootely"]
	},

	{
		question: "Which TV series had a dog named K9 who was also a robot?",
		correct: "Doctor Who",
		answers:["Full House", "Star Trek", "Doctor Who", "Law & Order"]
	},

	{
		question: "What breed of dog is the smallest used in hunting?",
		correct: "Miniature dachshund",
		answer:["Chihuahua", "Miniature dachshund", "Toy poodle", "Smooth fox terrier"],
	},

	{
		question: "Which dog breed has a black tongue?",
		possibleAnswers: ["A) Husky", "B) Labrador", "C) Weimaraner", "D) Chow Chow"],
		answersInOrder:["false", "false", "false", "true"],
		answer: "D) Chow Chow"
	},

	{
		question: "Which breed was once known as St. John’s Newfoundland?",
		possibleAnswers: ["A) Newfoundland", "B) Golden retriever", "C) Labrador", "D) Puli"],
		answersInOrder:["false", "false", "true", "false"],
		answer: "C) Labrador"
	}	
];

var time = 10;

function createQuestions(question) {
	$.each(question.answers, function(index, value) {
		var btn = $("<button>");
		btn.text(question.answers[index]);
	}
	
};

function reset() {
	$("#timer").text("00:00");

	time;
};

function count() {
	time--;
	var converted = timeConverter(time);
	$("#timer").text(converted);
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


	//when start button is clicked- game starts
	 $("#start-button").on("click", function() {
	   	console.log('start button clicked')

	    $('#start-button').remove();
		
		$("#timer").text("00:00");

    	start()
    	$('#guestions-for-trivia').html(questions.questionOne.question);
    	$('#possible-answers-for-questions').html(questions.questionOne.possibleAnswers);





	    		
	
	    


	 });


// }