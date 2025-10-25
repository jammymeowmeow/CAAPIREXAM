let currentQuestionIndex = 0;
let score = 0; // Score counts only first-time correct answers
let attemptedQuestions = []; // Track which questions have been attempted

// Shuffle settings
let shuffleQuestions = false;
let shuffleChoices = false;

// Question data
const questions = [
    const quizQuestions = [
  {
    question: "On the taxi check, the magnetic compass should",
    choices: [
      { text: "exhibit the same number of degrees of dip as the latitude.", correct: false },
      { text: "swing opposite to the direction of turn when turning from north.", correct: false },
      { text: "swing freely and indicate known headings.", correct: true }
    ]
  },
     {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the left from an east heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will remain on east for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false },
      { text: "The compass will indicate the approximate correct magnetic heading if the roll into the turn is smooth.", correct: true },
      { text: "The compass will initially indicate a turn to the right.", correct: false }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the right from an easterly heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will indicate the approximate correct magnetic heading if the roll into the turn is smooth.", correct: true },
      { text: "The compass will initially indicate a turn to the left.", correct: false },
      { text: "The compass will remain on east for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the right from a south heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will remain on south for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false },
      { text: "The compass will indicate a turn to the right, but at a faster rate than is actually occurring.", correct: true },
      { text: "The compass will initially indicate a turn to the left.", correct: false }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass when you roll into a standard-rate turn to the left from a south heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will initially indicate a turn to the right.", correct: false },
      { text: "The compass will indicate a turn to the left, but at a faster rate than is actually occurring.", correct: true },
      { text: "The compass will remain on south for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the right from a westerly heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will remain on a westerly heading for a short time, then gradually catch up to the actual heading of the aircraft.", correct: false },
      { text: "The compass will initially show a turn in the opposite direction, then turn to a northerly indication but lagging behind the actual heading of the aircraft.", correct: false },
      { text: "The compass will indicate the approximate correct magnetic heading if the roll into the turn is smooth.", correct: true }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the right from a northerly heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will remain on north for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false },
      { text: "The compass will indicate a turn to the right, but at a faster rate than is actually occurring.", correct: false },
      { text: "The compass will initially indicate a turn to the left.", correct: true }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the left from a west heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will remain on west for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false },
      { text: "The compass will initially indicate a turn to the right.", correct: false },
      { text: "The compass will indicate the approximate correct magnetic heading if the roll into the turn is smooth.", correct: true }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the left from a north heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will initially indicate a turn to the right.", correct: true },
      { text: "The compass will indicate a turn to the left, but at a faster rate than is actually occurring.", correct: false },
      { text: "The compass will remain on north for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false }
    ]
  },
  {
    question: "During flight, if the pitot tube becomes clogged with ice, which of the following instruments would be affected?",
    choices: [
      { text: "The airspeed indicator only.", correct: true },
      { text: "The airspeed indicator, altimeter, and vertical speed indicator.", correct: false },
      { text: "The airspeed indicator and the altimeter.", correct: false }
    ]
  },
  {
    question: "If both the ram air input and the drain hole of the pitot system are blocked, what reaction should you observe on the airspeed indicator when power is applied and a climb is initiated out of severe icing conditions?",
    choices: [
      { text: "The airspeed would drop to, and remain at, zero.", correct: false },
      { text: "No change until an actual climb rate is established, then indicated airspeed will increase.", correct: true },
      { text: "The indicated airspeed would show a continuous deceleration while climbing.", correct: false }
    ]
  },
  {
    question: "What indication should a pilot observe if an airspeed indicator ram air input and drain hole are blocked?",
    choices: [
      { text: "No airspeed indicator change will occur during climbs or descents.", correct: false },
      { text: "The airspeed indicator will show a decrease with an increase in altitude.", correct: false },
      { text: "The airspeed indicator will react as an altimeter.", correct: true }
    ]
  },
  {
    question: "If the outside air temperature increases during a flight at constant power and at a constant indicated altitude, the true airspeed will",
    choices: [
      { text: "increase and true altitude will increase.", correct: true },
      { text: "increase and true altitude will decrease.", correct: false },
      { text: "decrease and true altitude will increase.", correct: false }
    ]
  },
  {
    question: "What would be the indication on the VSI during entry into a 500 FPM actual descent from level flight if the static ports were iced over?",
    choices: [
      { text: "The initial indication would be a climb, then descent at a rate in excess of 500 FPM.", correct: false },
      { text: "The indication would be in reverse of the actual rate of descent (500 FPM climb).", correct: false },
      { text: "The VSI pointer would remain at zero regardless of the actual rate of descent.", correct: true }
    ]
  },
  {
    question: "What information does a Mach meter present?",
    choices: [
      { text: "The ratio of aircraft true airspeed to the speed of sound.", correct: true },
      { text: "The ratio of aircraft indicated airspeed to the speed of sound.", correct: false },
      { text: "The ratio of aircraft equivalent airspeed, corrected for installation error, to the speed of sound.", correct: false }
    ]
  },
  {
    question: "How should you preflight check the altimeter prior to an IFR flight?",
    choices: [
      { text: "Set the altimeter first with 29.92\" Hg and then the current altimeter setting. The change in altitude should correspond to the change in setting.", correct: false },
      { text: "Set the altimeter to the current altimeter setting. The indication should be within 75 feet of the actual elevation for acceptable accuracy.", correct: true },
      { text: "Set the altimeter to 29.92\" Hg. With current temperature and the altimeter indication, determine the true altitude to compare with the field elevation.", correct: false }
    ]
  },
  {
    question: "How should you preflight check the altimeter prior to an IFR flight?",
    choices: [
      { text: "Set the altimeter to the current temperature. With current temperature and the altimeter indication, determine the calibrated altitude to compare with the field elevation.", correct: false },
      { text: "Set the altimeter to the current altimeter setting. The indication should be within 75 feet of the actual elevation for acceptable accuracy.", correct: true },
      { text: "Set the altimeter first with 29.92\" Hg and then the current altimeter setting. The change in altitude should correspond to the change in setting.", correct: false }
    ]
  },
  {
    question: "Pressure altitude is the altitude read on your altimeter when the instrument is adjusted to indicate height above",
    choices: [
      { text: "ground level.", correct: false },
      { text: "the standard datum plane.", correct: true },
      { text: "sea level.", correct: false }
    ]
  },
  {
    question: "If you are departing from an airport where you cannot obtain an altimeter setting, you should set your altimeter",
    choices: [
      { text: "on 29.92\" Hg.", correct: false },
      { text: "to the airport elevation.", correct: true },
      { text: "on the current airport barometric pressure, if known.", correct: false }
    ]
  },
  {
    question: "Which altitude is indicated when the altimeter is set to 29.92\" Hg?",
    choices: [
      { text: "Standard.", correct: true },
      { text: "Pressure.", correct: false },
      { text: "Density.", correct: false }
    ]
  },
  {
    question: "The pressure altitude at a given location is indicated on the altimeter after the altimeter is set to",
    choices: [
      { text: "the field elevation.", correct: false },
      { text: "29.92\" Hg.", correct: true },
      { text: "the current altimeter setting.", correct: false }
    ]
  },
  {
    question: "How can you determine the pressure altitude on an airport without a tower or FSS?",
    choices: [
      { text: "Set the altimeter to the current altimeter setting of a station within 100 miles and correct this indicated altitude with local temperature.", correct: false },
      { text: "Use your computer and correct the field elevation for temperature.", correct: false },
      { text: "Set the altimeter to 29.92\" Hg and read the altitude indicated.", correct: true }
    ]
  },
  {
    question: "How can you obtain the pressure altitude on flights below 18,000 feet?",
    choices: [
      { text: "Contact an FSS and ask for the pressure altitude.", correct: false },
      { text: "Use your computer to change the indicated altitude to pressure altitude.", correct: false },
      { text: "Set your altimeter to 29.92\" Hg.", correct: true }
    ]
  },
  {
    question: "At an altitude of 6,500 feet MSL, the current altimeter setting is 30.42\" Hg. The pressure altitude would be approximately",
    choices: [
      { text: "6,000 feet.", correct: true },
      { text: "7,500 feet.", correct: false },
      { text: "6,500 feet.", correct: false }
    ]
  },
  {
    question: "How does a pilot normally obtain the current altimeter setting during an IFR flight in Class E airspace below 18,000 feet?",
    choices: [
      { text: "FSS's along the route broadcast the weather information at 15 minutes past the hour.", correct: false },
      { text: "ATC periodically advises the pilot of the proper altimeter setting.", correct: true },
      { text: "The pilot should contact ARTCC at least every 100 NM and request the altimeter setting.", correct: false }
    ]
  },
  {
    question: "Which of the following defines the type of altitude used when maintaining FL 210?",
    choices: [
      { text: "Pressure.", correct: true },
      { text: "Indicated.", correct: false },
      { text: "Calibrated.", correct: false }
    ]
  },
  {
    question: "What is the procedure for setting the altimeter when assigned an IFR altitude of 18,000 feet or higher on a direct flight off airways?",
    choices: [
      { text: "Set the altimeter to the current reported setting for climb-out and 29.92\" Hg upon reaching 18,000 feet.", correct: true },
      { text: "Set the altimeter to the current altimeter setting until reaching the assigned altitude, then set to 29.92\" Hg.", correct: false },
      { text: "Set the altimeter to 29.92\" Hg before takeoff.", correct: false }
    ]
  },
  {
    question: "While you are flying at FL 250, you hear ATC give an altimeter setting of 28.92\" Hg in your area. At what pressure altitude are you flying?",
    choices: [
      { text: "24,000 feet.", correct: false },
      { text: "25,000 feet.", correct: true },
      { text: "26,000 feet.", correct: false }
    ]
  },
  {
    question: "En route at FL 290, the altimeter is set correctly, but not reset to the local altimeter setting of 30.57\" Hg during descent. If the field elevation is 650 feet and the altimeter is functioning properly, what is the approximate indication upon landing?",
    choices: [
      { text: "715 feet.", correct: false },
      { text: "1,300 feet.", correct: false },
      { text: "Sea level.", correct: true }
    ]
  },
  {
    question: "En route at FL 290, your altimeter is set correctly, but you fail to reset it to the local altimeter setting of 30.26 in. Hg during descent. If the field elevation is 134 feet and your altimeter is functioning properly, what will it indicate after landing?",
    choices: [
      { text: "206 feet below MSL.", correct: true },
      { text: "100 feet MSL.", correct: false },
      { text: "474 feet MSL.", correct: false }
    ]
  }
];

// DOM Elements
const questionElement = document.querySelector(".question");
const answersElement = document.querySelector(".answers");
const feedbackElement = document.querySelector(".feedback");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const remainingQuestionsText = document.getElementById("remaining-questions");

// Shuffle function to randomize arrays
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Update the progress bar and text
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    const remaining = questions.length - (currentQuestionIndex + 1);
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress.toFixed(1)}%`; // Display percentage
    remainingQuestionsText.textContent = `Remaining Questions: ${remaining} out of ${questions.length}`;
}

// Display a question
function displayQuestion(index) {
    const currentQuestion = questions[index];
    questionElement.innerHTML = `<strong>${index + 1}. ${currentQuestion.question}</strong>`;
    answersElement.innerHTML = ''; // Clear previous answers
    feedbackElement.textContent = ''; // Clear feedback
    nextButton.disabled = true; // Disable next button initially
    prevButton.disabled = index === 0; // Disable prev button on the first question

    // Shuffle choices if enabled
    const choicesToDisplay = shuffleChoices ? shuffle(currentQuestion.choices) : currentQuestion.choices;

    // Render choices
    choicesToDisplay.forEach((choice) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('answer-button');
        button.addEventListener('click', () => checkAnswer(button, choice, currentQuestion));
        answersElement.appendChild(button);
    });

    // Track attempted questions
    attemptedQuestions[index] = attemptedQuestions[index] || { isCorrect: false, firstAttempt: true };

    updateProgressBar();
}

// Check the answer
function checkAnswer(selectedButton, choice, currentQuestion) {
    const currentAttempt = attemptedQuestions[currentQuestionIndex];

    if (choice.correct) {
        selectedButton.classList.add("correct"); // Highlight correct answer
        feedbackElement.textContent = "Correct! You chose the right answer.";
        nextButton.disabled = false; // Enable Next button

        if (currentAttempt.firstAttempt) {
            score++; // Increment score on first correct attempt
            currentAttempt.isCorrect = true;
        }

        // Disable all buttons
        Array.from(answersElement.children).forEach((button) => button.disabled = true);
    } else {
        selectedButton.classList.add("incorrect"); // Highlight wrong answer
        feedbackElement.textContent = "Incorrect! Please try again.";
        currentAttempt.firstAttempt = false; // Mark as not first attempt
    }
}

// Go to next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

// Go to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

// Show result
function showResult() {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    questionElement.innerHTML = `<div class="final-score">Quiz Finished! Your final score is: ${score}/${questions.length} (${percentage}%)</div>`;
    answersElement.innerHTML = ''; // Clear answers
    feedbackElement.textContent = '';
    nextButton.style.display = 'none'; // Hide Next button
    prevButton.style.display = 'none'; // Hide Prev button

    // Check if restart button already exists before creating a new one
    if (!document.querySelector('.reset-btn')) {
        // Create Restart button
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart Quiz';
        restartButton.classList.add('reset-btn');
        restartButton.addEventListener('click', resetQuiz);
        answersElement.appendChild(restartButton); // Add Restart button
    }
}

// Reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    attemptedQuestions = []; // Reset attempted questions
    nextButton.style.display = 'inline-block'; // Show Next button
    prevButton.style.display = 'inline-block'; // Show Prev button
    displayQuestion(currentQuestionIndex); // Show first question
}

// Start the quiz and hide the start page
function startQuiz() {
    shuffleQuestions = document.getElementById("shuffle-questions").checked;
    shuffleChoices = document.getElementById("shuffle-choices").checked;

    document.getElementById("start-page").style.display = 'none'; // Hide start page
    document.getElementById("quiz-container").style.display = 'block'; // Show quiz content

    if (shuffleQuestions) shuffle(questions); // Shuffle questions if enabled

    displayQuestion(currentQuestionIndex); // Show first question
}

// Initialize the quiz
window.onload = () => {
    document.getElementById("start-page").style.display = 'block'; // Show start page
};
