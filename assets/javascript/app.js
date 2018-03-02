var seconds = 31;
var timer;
var presentQuestion;
var questionNumber = 0;
var score = 0;
var questions = [
    {
        question: "Humans have around 7,000 taste buds. How many taste buds does the average Catfish have?",
        answers: ["10,000", "52,000", "100,000", "0"],
        correct: 2,
        image: "assets/images/catfish.png",
        explanation: "Catfish don't only have tastebuds in their mouth, but all over their entire body!"
    },
    {
        question: "The Megalodon is currently known as the largest shark to have ever lived. How long did adults grow to measure?",
        answers: ["10 feet", "40 feet", "60 feet", "80 feet"],
        correct: 3,
        image: "assets/images/megalodon.png",
        explanation: "'Megalodon' means, 'Big tooth,' and is named after its incredible 7 inch- long teeth!"
    },
    {
        question: "Which aquatic species is the only known animal in which the male bears its young, rather than the female?",
        answers: ["Longhorn Cowfish", "Seahorse", "Chocolate Chip Starfish", "Lawnmower Blenny"],
        correct: 1,
        image: "assets/images/seahorse.png",
        explanation: "The male seahorse gives live birth to 5 to 1,000 fully- formed baby seahorses!"
    },
    {
        question: "What kind of fish is Dory from the popular Disney film, “Finding Nemo”?",
        answers: ["Blue Parrotfish", "Regal Blue Tang", "Pajama Cardinal", "Copperband Butterfly"],
        correct: 1,
        image: "assets/images/dory.png",
        explanation: "Dory is a Pacific Regal Blue Tang. Her friends Marlin and Nemo are Ocellaris Clownfish."

    },
    {
        question: "Which oceanic animal consumes decaying matter on the sea floor, helping to cleanse the ecosystem?",
        answers: ["Sea Cucumber", "Panther Grouper", "Firefish Goby", "Six- Lined Wrasse"],
        correct: 0,
        image: "assets/images/seacucumber.png",
        explanation: "Sea cucumbers aren't too pretty to look at, but they play a very important role in cleaning up the bottom of their habitat!"

    },
    {
        question: "Which modern pet fish became popular after initially being utilized to test the toxicity of freshwater lakes and rivers?",
        answers: ["Plecostomus", "Gourami", "'GloFish'", "Betta Fish"],
        correct: 2,
        image: "assets/images/glofish.jpg",
        explanation: "'GloFish,' are varying types of Barbs and Tetras that are injected with neon dyes when in embryo form. They were originally used in fresh bodies of water to test pH levels and pollution. The brighter the fish would glow, the more pollutants there were in the water."

    },
    {
        question: "During the 1700s, what fish was actually accepted as a form of tax payment in Japan?",
        answers: ["Sea Urchin", "Lionfish", "Blue Marlin", "Sunfish"],
        correct: 3,
        image: "assets/images/sunfish.png",
        explanation: "These massive fish- that can weigh up to 2,200 pounds- were once accepted by Japanese Shoguns as a means of paying taxes!"

    }
];

function hideStuff() {
    $("#A").hide();
    $("#B").hide();
    $("#C").hide();
    $("#D").hide();
    $("#reset").hide();
    $("#currentQuestion").hide();
    $("#correctAnswer").hide();
};

$(document).ready(function () {

    hideStuff();

    $("#playbutton").on("click", function () {
        $(".instructions").hide();
        $("#playbutton").hide();
        timedText();
        $("#A").show();
        $("#B").show();
        $("#C").show();
        $("#D").show();
        $("#currentQuestion").show();
        presentQuestion = questions[questionNumber];
        displayQuestion(presentQuestion);

        $("#A").on("click", function () {
            answerClicked(0);
        });
        $("#B").on("click", function () {
            answerClicked(1);
        });
        $("#C").on("click", function () {
            answerClicked(2);
        });
        $("#D").on("click", function () {
            answerClicked(3);
        });

        $("#reset").on("click", function () {
            hideStuff();
            questionNumber = 0;
            seconds = 31;
            $("#timer").show();
            $(".instructions").hide();
            $("#playbutton").hide();
            timedText();
            $("#A").show();
            $("#B").show();
            $("#C").show();
            $("#D").show();
            $("#currentQuestion").show();
            presentQuestion = questions[questionNumber];
            displayQuestion(presentQuestion);
            

            $("#A").on("click", function () {
                answerClicked(0);
            });
            $("#B").on("click", function () {
                answerClicked(1);
            });
            $("#C").on("click", function () {
                answerClicked(2);
            });
            $("#D").on("click", function () {
                answerClicked(3);
            });
        });


        function answerClicked(answerChosen) {
            hideStuff();
            $("#correctAnswer").show();
            $("#correctAnswerDisplay").html(presentQuestion.answers[presentQuestion.correct]).show();
            $("#explain").html(presentQuestion.explanation).show();
            $("#corimages").html("<img class='images' src= '" + presentQuestion.image + "'>");
            $("#corimages").show();
            if (answerChosen === presentQuestion.correct) {
                $("#correctAnswer").html("Correct!");
                score++;
            } else {
                $("#correctAnswer").html("Not Quite!");
            }
            $("#timer").hide();
            clearInterval(timer);
            setTimeout(nextQuestion, 7000);
        };

        function nextQuestion() {
            questionNumber++;
            hideStuff();
            $("#explain").html(presentQuestion.explanation).hide();
            $("#timer").hide();
            $("#correctAnswerDisplay").hide();
            if (questionNumber >= questions.length) {
                displayScore();
            }
            presentQuestion = questions[questionNumber];
            $("#correctAnswer").hide();
            $("#corimages").hide();
            $("#timer").show();
            displayQuestion(presentQuestion);
            seconds = 30;
            timedText();
        };


        function displayScore() {
            $("#theTimer").hide();
            $("#currentQuestion").html("Game Over! Your Score: " + score).show();
            $("#reset").show();
        }

        function timedText() {
            timer = setInterval(displayTimer, 1000);
        };

        function displayQuestion(question) {
            $("#currentQuestion").html(question.question).show();
            $("#A").html(question.answers[0]).show();
            $("#B").html(question.answers[1]).show();
            $("#C").html(question.answers[2]).show();
            $("#D").html(question.answers[3]).show();
        };

        function displayTimer() {
            seconds--;
            document.getElementById("timer").innerHTML = seconds;
            if (seconds < 1) {
                clearInterval(timer);
                hideStuff();
                $("#correctAnswer").html("Gotta Be Quicker Than That!").show();
                $("#corimages").html("<img class='images' src= '" + presentQuestion.image + "'>").show();
                setTimeout(nextQuestion, 5000);

            }
        }
    });
});

