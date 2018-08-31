//timer logic, still won't stop at 0
window.onload = function(start) {
    var sec = 5;
    var start = setInterval(function() {
       document.getElementById("timer").innerHTML = ":" + sec;
       sec--;
       console.log(sec)
       if (sec < 10) {
         sec = "0" + sec;
        }
       if (sec === 0) {        
        clearInterval(start);
        nextQuestion();
       }       
    }, 1000);
}

var questionArr = [
    {
        question: "What year was Captain America created?",
        answers: ["1941", "1955", "1964", "1939"],
        correctAnswer: 0
    },
    {
        question: "What company originally published Captain America comics?",
        answers: ["Marvel Comics", "Timely Comics", "Atlas Comics", "DC Comics"],
        correctAnswer: 1
    },
    {
        question: "Who was the team that created Captain America?",
        answers: ["Stan Lee and Jack Kirby", "Steve Ditko and Joe Simon", "Joe Simon and Jack Kirby", "Stan Lee and John Buscema"],
        correctAnswer: 2
    },
    {
        question: "Captain America's WWII sidekick became what character in the modern era?",
        answers: ["Winter Soldier", "Nomad", "Falcon", "Toro"],
        correctAnswer: 0
    },
    {
        question: "Who was Captain America's arch nemesis during WWII and again in the modern era?",
        answers: ["Crossbones", "Batroc", "Baron Zemo", "Red Skull"],
        correctAnswer: 3
    },
];

for (var i = 0; i < questionArr.length; i++) {
    $("#questionItself").text(questionArr[i].question)
    var a = $("<input>");
    a.addClass("anChoice");
    a.attr("type", "radio");
    a.text(questionArr[i].answers);    
    $("#answerChoices").append(a);
}


// create array of questions and answers   DONE
//create layers of slides using zindex or slide info in and out using jquery in a central div var example = $(<div>).attr("class", "newDiv")
//call them one at a time by changing class and having container display that class, while unused class is hidden
//create radio boxes for answer choices
//create button to submit answer and move to next question
//check answers and compile results - for each right answer: score++