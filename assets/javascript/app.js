//counter
var correct= 0;
var incorrect= 0;
var unanswered= 0;

var questions= {
	questionOne: {
		question: "Through what part of the body do dogs sweat?",
		possibleAnswers: ["A) Mouth", "B) Ears", "C) Nose", "D) Paws"],
		answersInOrder:["false", "false", "false", "true"],
		answer: "D) Paws"
	},

	questionTwo: {
		question: "Which TV series had a dog named K9 who was also a robot?",
		possibleAnswers: ["A) Full House", "B) Star Trek", "C) Doctor Who", "D) Law & Order"],
		answersInOrder:["false", "false", "true", "false"],
		answer: "C) Doctor Who"
	},

	questionThree: {
		question: "What breed of dog is the smallest used in hunting?",
		possibleAnswers: ["A) Chihuahua", "B) Miniature dachshund", "C) Toy poodle", "D) Smooth fox terrier"],
		answersInOrder:["false", "true", "false", "false"],
		answer: "B) Miniature dachshund"
	},

	questionFour: {
		question: "Which dog breed has a black tongue?",
		possibleAnswers: ["A) Husky", "B) Labrador", "C) Weimaraner", "D) Chow Chow"],
		answersInOrder:["false", "false", "false", "true"],
		answer: "D) Chow Chow"
	},

	questionFive: {
		question: "Which breed was once known as St. John’s Newfoundland?",
		possibleAnswers: ["A) Newfoundland", "B) Golden retriever", "C) Labrador", "D) Puli"],
		answersInOrder:["false", "false", "true", "false"],
		answer: "C) Labrador"
	}	
};

var time = 10;

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
    	console.log(questions.questionOne)
	    		
	
	    


	 });


// }