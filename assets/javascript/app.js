//when the webpage is loaded

$(document).ready( function () {


	$("#startButton").on("click", function(){
		$("#container2").css("display", "unset");
		$("#grade").css("display", "unset");
		$("#startButton").css("display", "none");


run();


	
	$('.answers input[type="radio"]').click(function(){
		var radioName = $(this).attr("name"); //Get radio name
   $(":radio[name='"+radioName+"']").attr("disabled", true);
    
    var type = $(this).data('type'),
        correctAnswerCount = 
            $('.answers input[type="radio"]:checked[data-type="1"]').length;
    
    
    
    console.log('correctAnswerCount:', correctAnswerCount);
    
    if (type === 1) {
      $("#correct").html("Correct: " + correct++);
      
    
    }

    else if (type === 0) {
      $("#incorrect").html("Incorrect: " + incorrect++);
    }

    if (correct + incorrect === 8){
	alert("Game Over! Check your results below.");
	stop();
}

});	
	});
});



//submitButton.addEventListener('click', grade);


//SCORE KEEPER VARIABLES
var correct = 1;
    var incorrect = 1;
    


    

//THE TIMER CODE
		//  Interval 
    var number = 90;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#time-remaining").html("<h1>" + "Time Remaining: " + number + "</h1>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time is Up!");

      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

/*IN CLASS EX
   var q = {
   	question: "THis is a question?",
   	answers: ["1", "2", "3", "4"],
   	correctIndex: 1
   }

   $("#questions").html(q.question)

   for (var i = 0; i<4; i++)
   		$("#answers").append("<div id='answer-'"+i+" data-answer-index= " + i + q.answers[i] + "</div>" )*/
  