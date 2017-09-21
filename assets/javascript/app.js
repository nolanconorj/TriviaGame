//when the webpage is loaded
/*jQuery(document).ready(function($) {
	alert("js is working");
});*/


$(document).ready( function () {
//  $("#container2").hide();
	$("#startButton").click(function(){
		$("#container2").css("display", "unset");

run();
		
	});
});


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
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

   
    


    // on submit, show results
//submitButton.addEventListener('click', showResults);