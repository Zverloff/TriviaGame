//timer logic, still won't stop at 0


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
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: 3
    }
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

function countdown() {
    sec = 15;
    $("#timer").html("00:" + sec);
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
     if (sec < 1) {
        clearInterval(time);
        answered = false;
        $('#timer').html("Time's Up!")
    }
 }

//function to load a question
function questionLoad(x) {
    //hiding the starting div and shoqing the quiz div
    $("#introBox").hide();
    $("#quizContainer").show();
    countdown();
    // var ele = document.getElementsByName("options");
    //     for(var i=0;i<ele.length;i++)
    //     ele[i].checked = false;

    //populating the question and options from the array
    var q = questionArr[x];
        quest.innerHTML = "Question " + (x + 1) + ": " + q.question;
        an1.innerHTML = q.answer1;
        an2.innerHTML = q.answer2;
        an3.innerHTML = q.answer3;
        an4.innerHTML = q.answer4;
//console.log(questionArr[x].correctAnswer)
   
   

   $("#submitButton").on("click", function(){
    answerChoice = $("input[name='options']:checked").val()
    clearInterval(time);   
    questionLoad(currentQuestion);
    //answer(x)   

    });   
    
};

function answer(x) {
    if (answerChoice === questionArr[x].correctAnswer) {
        score++
    }
    if (currentQuestion === (questionArr.length)) {
        $("#quizContainer").hide();
        $("#resultBox").show();
        finalScore.innerHTML = "You got " + score + " out of 5 questions correct";
        
    }
}



//start button to begin quiz
$("#startButton").on("click", function(){
    questionLoad(currentQuestion)
});

//load next question on submit button




