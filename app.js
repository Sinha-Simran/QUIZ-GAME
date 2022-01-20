
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the full form of CSS?", ["Color style sheet", "Cascading style sheet","Creative style sheet", "Concatenated style sheet"], "Cascading style sheet"),

    new Question("How many different styling techniques are used in CSS?", ["2", "3","4", "1"], "3"),
    

    new Question("Which HTML tag is used for internal style sheet?", ["Internal", "Style","CSS", "Internal Style"], "Style"),
    

    new Question("What is the default margin of the body element?", ["10px", "8px","12px", "6px"], "8px"),
        
new Question("What does HTML stands for?", ["Hypertext Machine language","Hypertext and links markup language","Hypertext Markup Language","Hightext machine language"], "Hypertext Markup Language"),

new Question("How many attributes are there in HTML5?", ["2", "1","4", "5"], "2"),

 new Question("What is the purpose of using div tags in HTML?", ["For creating Different styles.", "For creating different sections.","For adding headings.", "For adding titles."], "For creating different sections"),

 new Question("How many heading tags are there in HTML5?", ["2", "3","5", "6"], "6"),
 
  new Question("What is the font-size of the h1 heading tag?", ["3.5 em", "2.17 em","2 em", "1.5 em"], "2 em"),
  
   new Question("Which of the following is not a reserved word in JavaScript?", ["interface", "throws"," program", "short"], " program"),
   
   
];


var quiz = new Quiz(questions);


populate();








