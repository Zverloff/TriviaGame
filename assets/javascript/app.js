//timer logic, still won't stop at 0
function countdown() {
    sec = 5;
    $("#timer").html("00:" + seconds);
    answered = true;
    time = setInterval(showTimer, 1000);
}

function showTimer() {
     sec --
     if (sec < 10) {
         $('#timer').html("00:0" + sec)
     }
     else {
        $('#timer').html("00:" + sec)
     }
     if (seconds < 1) {
        clearInterval(time);
        answered = false;
        $('#timer').html("Time's Up!")
    }
 }

//question array
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

//variables to grad ids to place text into
var quest = document.getElementById("questionItself");
var an1 = document.getElementById("option1");
var an2 = document.getElementById("option2");
var an3 = document.getElementById("option3");
var an4 = document.getElementById("option4");
var next = document.getElementById(submitButton);
var finalScore = document.getElementById("resultBox");

//variable setting beginning terms
var currentQuestion = 0;
var score = 0;
var correctAnswer = 0;

//hiding quiz and results
//$("#resultBox").hide();
//$("#quizContainer").hide();



//function to load a question
function questionLoad(x) {
    //hiding the starting div and shoqing the quiz div
    $("#introBox").hide();
    $("#quizContainer").show();
    countdown();

    //populating the question and options from the array
    var q = questionArr[x];
   quest.innerHTML = (x + 1) + ". " + q.question;
   an1.innerHTML = q.answer1;
   an2.innerHTML = q.answer2;
   an3.innerHTML = q.answer3;
   an4.innerHTML = q.answer4;
   console.log(currentQuestion);
};

//function to load next question
function questionNext() {
    console.log("test");
    //finding which radio box the user checked
    var answerChoice = document.querySelector("input[name='options']:checked").value
    
    //checking for correct answer and adding to the score
    if (questionArr[currentQuestion].correctAnswer == answerChoice) {
    score++
    }
    
    //incrementing the question in the array
    currentQuestion++;
    console.log(currentQuestion)

    //end game logic - hiding quiz and showing the results
    if (currentQuestion === questionArr.length) {
        $("#quizContainer").hide();
        $("#resultBox").show();
        finalScore.innerHTML = "You got" + score + "out of 5 questions correct";
        
    }

    questionLoad(currentQuestion);
}
//questionLoad(currentQuestion);

//start button to begin quiz
$("#startButton").on("click", function(){
    questionLoad(currentQuestion)
});

$("#submitButton").on("click", function(){
    questionNext()
});




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