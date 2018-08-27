//timer logic, still won't stop at 0
window.onload = function(start) {
    var sec = 5;
    var start = setInterval(function() {
       document.getElementById("timer").innerHTML = ":" + sec;
       sec--;
       if (sec < 10) {
         sec = "0" + sec;
        }
       if (sec === 0) {
        nextQuestion();
        clearInterval(start);
       }       
    }, 1000);
}

// create array of questions and answers   
//create layers of slides using zindex
//call them one at a time by changing class and having container display that class, while unused class is hidden
//create radio boxes for answer choices
//create button to submit answer and move to next question
//check answers and compile results - for each right answer: score++