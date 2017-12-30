//counter
var correct= 0;
var incorrect= 0;
var unanswered= 0;

var allQuestions= [
	{
		question: "Through what part of the body do dogs sweat?",
		correctAnswer: 3,
		allAnswers: ["Mouth", "Ears", "Nose", "Paws"],
	},
	{
		question: "Is Ben the best?",
		correctAnswer: 2,
		allAnswers: ["Nope he's a dumb butt","Who's Ben?", "Abso-freakin-lootely", "Apple pie"]
	},

	{
		question: "Which TV series had a dog named K9 who was also a robot?",
		correctAnswer: 1,
		allAnswers:["Full House", "Doctor Who", "Star Trek", "Law & Order"]
	},

	{
		question: "What breed of dog is the smallest used in hunting?",
		correctAnswer: 0,
		allAnswers:["Miniature dachshund", "Chihuahua", "Toy poodle", "Smooth fox terrier"],
	},

	{
		question: "Which dog breed has a black tongue?",
		correctAnswer: 2,
		allAnswers:["Husky", "Labrador", "Chow Chow", "Weimaraner"],
	},

	{
		question: "Which breed was once known as St. John’s Newfoundland?",
		correctAnswer: 0,
		allAnswers:["Labrador", "Newfoundland", "Golden retriever", "Puli"],
	}	
];



var time = 5;
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


// var questionsContainer= $('#quiz');
// var results= $('#results');
// var submitButton= $('#submit-button');
// var userAnswer = '';


// $(document).ready(function(){

// 	$('#questions').hide();	

// 		//when start button is clicked- game starts
// 		 $("#start-button").on("click", function() {
// 		   	console.log('start button clicked')
// 		    $('#start-button').remove();
			
// 			$("#timer").text("Time Remaining: 00:00");
// 	    	start();

// 			$('#questions').show();

// 			// userAnswer = $('.correctAnswer:input:checked')||{}.value;
            
//             // if answer is correct
//             if(userAnswer === ($('.correctAnswer:input:checked'))){
//                 // add to the number of correct answers
//                 correct ++;
//                 console.log('This is: ' + correct)
//                 };

// 		 });

// 		 if (time === 0) {
// 		 	$(results).text('Correct: ' + correct + ' Incorrect: ' + incorrect + ' Unanswered: ' + unanswered);
// 		 	console.log('Correct: ' + correct + ' Incorrect: ' + incorrect + ' Unanswered: ' + unanswered);

// 		 };

	
			
// var currentquestion = 0;
var correctAnswers = 0;
var incorrectAnswers= 0;

function setupOptions() {
  $('#questions').html(allQuestions.question);
  var options = allQuestions.allAnswers;
  var formHtml 
  // for (var i = 0; i < options.length; i++) {
    formHtml = '<div><input type="radio" name="allAnswers" value="' + '" id="allAnswers' + '"><label for="allAnswers' + '">' +
      allQuestions.allAnswers + '</label></div><br/>';
  // }
  $('#questionsForm').html(formHtml);
  $("#options").prop('checked', true);
};

function checkAnswers() {
  if ($("input[name=allAnswers]:checked").val() === allQuestions.correctAnswer) {
    correctAnswers++;
  } else {
  	incorrectAnswers++;
  };
};

$(document).ready(function() {
	$('#questions').hide();	
  
  $('#start-button').click(function() {
    $(this).hide();

	$("#timer").text("Time Remaining: 00:00");
	start();
	$('#questions').show();
	setupOptions();
	checkAnswers();
  });

  // $(function() {
  //   $("#progressbar").progressbar({
  //     max: allQuestions.length - 1,
  //     value: 0
  //   });
  });

  

  // $("#next").click(function() {
    // event.preventDefault();
    
    // currentquestion++;
    // $(function() {
    //   $("#progressbar").progressbar({
    //     value: currentquestion
    //   });
    // });
    // if (currentquestion < allQuestions.length) {
    //   setupOptions();
      if (time === 0) {
        // $('#next').html("Submit");
        $('#submit-button').click(function() {
          $("#questions").hide();
          $("#results").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
          $("#results").fadeIn(1500);
        });

      };

    // };
//   });
// });
