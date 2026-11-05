const questions = [
    {
        question: "1. Which language is used to make web pages interactive?",
        answers: ["HTML", "CSS", "JavaScript", "SQL"],
        correctAnswer: 2
    },
    {
        question: "2. Which keyword declares a variable that can be reassigned?",
        answers: ["const", "let", "return", "function"],
        correctAnswer: 1
    },
    {
        question: "3. Which method selects an element by its ID?",
        answers: [
            "document.querySelectorAll()",
            "document.getElementById()",
            "document.createElement()",
            "document.write()"
        ],
        correctAnswer: 1
    },
    {
        question: "4. Which event happens when a button is clicked?",
        answers: ["change", "submit", "click", "load"],
        correctAnswer: 2
    }
];

// Select HTML elements
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

// Keep track of the current question
let currentQuestionIndex = 0;

// Display a question and its answers
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    feedbackElement.textContent = "";

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false;
    });

    nextButton.disabled = true;
}

// Check the selected answer
function selectAnswer(event) {
    const selectedButton = event.target;
    const selectedIndex = Array.from(answerButtons).indexOf(selectedButton);
    const correctIndex = questions[currentQuestionIndex].correctAnswer;

    if (selectedIndex === correctIndex) {
        feedbackElement.textContent = "Correct! Great job!";
    } else {
        feedbackElement.textContent = "Incorrect. Try the next question!";
    }

    // Disable all answer buttons
    answerButtons.forEach(button => {
        button.disabled = true;
    });

    // Enable the Next Question button
    nextButton.disabled = false;
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        questionElement.textContent = "Quiz completed!";
        feedbackElement.textContent = "You finished the quiz!";
        answerButtons.forEach(button => {
            button.disabled = true;
            button.textContent = "";
        });
        nextButton.disabled = true;
    }
}

// Attach click event listeners
answerButtons.forEach(button => {
    button.addEventListener("click", selectAnswer);
});

nextButton.addEventListener("click", nextQuestion);

// Start the quiz
displayQuestion();