//timer logic, still won't stop at 0
window.onload = function(start) {
    var sec = 5;
    var start = setInterval(function() {
       document.getElementById("timer").innerHTML = ":" + sec;
       sec--;
      // console.log(sec)
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
        answer1: "1941", 
        answer2: "1955", 
        answer3: "1964", 
        answer4: "1939",
        correctAnswer: 1
    },
    {
        question: "What company originally published Captain America comics?",
        answer1: "Marvel Comics", 
        answer2: "Timely Comics", 
        answer3: "Atlas Comics", 
        answer4: "DC Comics",
        correctAnswer: 2
        },
    {
        question: "Who was the team that created Captain America?",
        answer1: "Stan Lee and Jack Kirby", 
        answer2: "Steve Ditko and Joe Simon", 
        answer3: "Joe Simon and Jack Kirby", 
        answer4: "Stan Lee and John Buscema",
        correctAnswer: 3
    },
    {
        question: "Captain America's WWII sidekick became what character in the modern era?",
        answer1: "Winter Soldier", 
        answer2: "Nomad", 
        answer3: "Falcon", 
        answer4: "Toro",
        correctAnswer: 1
    },
    {
        question: "Who was Captain America's arch nemesis during WWII and again in the modern era?",
        answer1: "Crossbones", 
        answer2: "Batroc", 
        answer3: "Baron Zemo", 
        answer4: "Red Skull",
        correctAnswer: 4
    },
];
var quest = document.getElementById("questionItself");
var an1 = document.getElementById("option1");
var an2 = document.getElementById("option2");
var an3 = document.getElementById("option3");
var an4 = document.getElementById("option4");

var next = document.getElementById(submitButton);

var currentQuestion = 0;
var score = 0;

function questionLoad(x) {
   var q = questionArr[x];
   quest.textContent = (x + 1) + ". " + q.question;
   an1.textContent = q.answer1;
   an2.textContent = q.answer2;
   an3.textContent = q.answer3;
   an4.textContent = q.answer4;
   console.log("test")

};
questionLoad(currentQuestion);

function questionNext() {
    console.log("test");
    var answerChoice = document.querySelector("input[name='options']:checked");
    return;
    var choice = answerChoice.value;
    if (questionArr[currentQuestion].correctAnswer === choice) {
    score++
    }
    
    currentQuestion++
    questionLoad(currentQuestion);
}

$("#submitButton").click(questionNext());



// for (var i = 0; i < questionArr.length; i++) {
//     $("#questionItself").text(questionArr[i].question)
//     $("#option1").text(questionsArr.answers[i])
//}


// create array of questions and answers   DONE
//create layers of slides using zindex or slide info in and out using jquery in a central div var example = $(<div>).attr("class", "newDiv")
//call them one at a time by changing class and having container display that class, while unused class is hidden
//create radio boxes for answer choices
//create button to submit answer and move to next question
//check answers and compile results - for each right answer: score++