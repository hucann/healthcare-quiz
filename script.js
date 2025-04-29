/**
 * Healthcare Technology Quiz Game
 * 
 * This script handles the quiz logic including:
 * - Level and question data structures
 * - Quiz navigation and level progression
 * - Answer validation
 * - Score tracking and persistence
 * - Feedback display
 */

// Quiz levels and questions data structure
const quizLevels = [
    {
        id: "telemedicine",
        title: "Telemedicine",
        description: "Test your knowledge about remote healthcare delivery technologies.",
        unlockRequirement: null, // First level is always unlocked
        questions: [
            {
                type: "mcq", // Multiple Choice Question
                question: "What is telemedicine?",
                options: [
                    "A type of medical equipment used in hospitals",
                    "The use of technology to provide healthcare services remotely",
                    "A medication delivery service"
                ],
                correctAnswer: 1, // Index of the correct answer (0-based)
                explanation: "Telemedicine is the use of digital technologies like video calls, phone, and messaging to provide healthcare services remotely when an in-person visit isn't necessary."
            },
            {
                type: "mcq",
                question: "Which of the following is NOT typically a benefit of telemedicine?",
                options: [
                    "Increased access to healthcare for rural patients",
                    "Reduced exposure to contagious illnesses",
                    "Ability to perform complex surgical procedures"
                ],
                correctAnswer: 2,
                explanation: "While telemedicine offers many benefits like increased access and reduced exposure to illness, it cannot be used for complex surgical procedures that require physical presence and hands-on techniques."
            },
            {
                type: "mcq",
                question: "What technology is essential for a basic telemedicine consultation?",
                options: [
                    "Virtual reality headset",
                    "Internet connection and a device with camera/microphone",
                    "Specialized medical diagnostic equipment"
                ],
                correctAnswer: 1,
                explanation: "A basic telemedicine consultation requires an internet connection and a device (computer, tablet, or smartphone) with a camera and microphone for video/audio communication."
            },
            {
                type: "mcq",
                question: "Which patient scenario is LEAST suitable for telemedicine?",
                options: [
                    "Follow-up appointment for medication management",
                    "Severe chest pain requiring immediate attention",
                    "Mental health counseling session"
                ],
                correctAnswer: 1,
                explanation: "Severe chest pain could indicate a heart attack or other life-threatening condition requiring immediate in-person emergency care. Follow-ups and mental health counseling are often well-suited for telemedicine."
            },
            {
                type: "mcq",
                question: "What is an important privacy consideration in telemedicine?",
                options: [
                    "Using public Wi-Fi for convenience",
                    "Ensuring HIPAA compliance for patient data protection",
                    "Sharing medical records on social media for second opinions"
                ],
                correctAnswer: 1,
                explanation: "HIPAA (Health Insurance Portability and Accountability Act) compliance is crucial in telemedicine to ensure patient data is protected and confidential during virtual consultations."
            }
        ]
    },
    {
        id: "ai-diagnostics",
        title: "AI Diagnostics",
        description: "Explore how artificial intelligence is transforming medical diagnostics.",
        unlockRequirement: "telemedicine", // Requires completion of the telemedicine level
        questions: [
            {
                type: "mcq",
                question: "What is the primary advantage of AI in medical image analysis?",
                options: [
                    "Completely replacing radiologists",
                    "Detecting patterns that might be missed by human eyes",
                    "Reducing the need for medical imaging altogether"
                ],
                correctAnswer: 1,
                explanation: "AI excels at detecting subtle patterns in medical images that might be missed by human eyes. It serves as a valuable tool to assist radiologists, not replace them."
            },
            {
                type: "mcq",
                question: "Which of these is NOT a common application of AI in healthcare diagnostics?",
                options: [
                    "Analyzing retinal scans for signs of diabetic retinopathy",
                    "Performing surgical procedures autonomously",
                    "Identifying potential lung nodules in CT scans"
                ],
                correctAnswer: 1,
                explanation: "While AI is used for image analysis and diagnostic support, autonomous surgical procedures remain primarily in the research phase and require human supervision."
            },
            {
                type: "mcq",
                question: "What type of data is typically used to train AI diagnostic systems?",
                options: [
                    "Only synthetic data created by computers",
                    "Large datasets of anonymized patient records and images",
                    "Real-time patient data without privacy protections"
                ],
                correctAnswer: 1,
                explanation: "AI diagnostic systems are trained on large datasets of anonymized patient records and medical images to ensure both effectiveness and patient privacy."
            },
            {
                type: "mcq",
                question: "What is a significant challenge in implementing AI diagnostic tools?",
                options: [
                    "Integration with existing healthcare workflows and systems",
                    "The low cost of AI systems compared to human diagnosticians",
                    "The complete accuracy of all AI diagnostic systems"
                ],
                correctAnswer: 0,
                explanation: "A major challenge is integrating AI tools with existing healthcare workflows, electronic health records, and clinical decision-making processes."
            },
            {
                type: "mcq",
                question: "Which regulatory body oversees AI-based medical devices in the United States?",
                options: [
                    "Department of Technology",
                    "Food and Drug Administration (FDA)",
                    "Artificial Intelligence Medical Board"
                ],
                correctAnswer: 1,
                explanation: "The FDA regulates AI-based medical devices in the US, evaluating their safety and effectiveness before they can be marketed for clinical use."
            }
        ]
    }
,
    {
        id: "wearable-devices",
        title: "Wearable Devices",
        description: "Learn about the latest in wearable health monitoring technology.",
        unlockRequirement: "ai-diagnostics", // Requires completion of the AI diagnostics level
        questions: [
            {
                type: "mcq",
                question: "Which vital sign is NOT commonly monitored by consumer wearable devices?",
                options: [
                    "Heart rate",
                    "Blood oxygen levels",
                    "Intracranial pressure"
                ],
                correctAnswer: 2,
                explanation: "While heart rate and blood oxygen levels are commonly monitored by consumer wearables, intracranial pressure monitoring requires specialized medical devices not available in consumer wearables."
            },
            {
                type: "mcq",
                question: "What is a key benefit of continuous health monitoring through wearable devices?",
                options: [
                    "It completely eliminates the need for doctor visits",
                    "It can detect trends and changes that might be missed in periodic check-ups",
                    "It provides 100% accurate diagnostic information"
                ],
                correctAnswer: 1,
                explanation: "Continuous monitoring can reveal trends and changes in health metrics over time that might not be apparent during occasional doctor visits, enabling earlier intervention."
            },
            {
                type: "mcq",
                question: "Which of the following is a legitimate concern about wearable health devices?",
                options: [
                    "Data privacy and security",
                    "They emit harmful radiation",
                    "They always provide medical-grade accuracy"
                ],
                correctAnswer: 0,
                explanation: "Data privacy and security are significant concerns, as wearable devices collect sensitive health information that could potentially be compromised or misused."
            },
            {
                type: "mcq",
                question: "How are advanced wearable devices changing chronic disease management?",
                options: [
                    "By curing chronic diseases",
                    "By enabling real-time monitoring and timely interventions",
                    "By eliminating the need for medication"
                ],
                correctAnswer: 1,
                explanation: "Advanced wearables enable real-time monitoring of chronic conditions, allowing for timely interventions and adjustments to treatment plans based on actual patient data."
            },
            {
                type: "mcq",
                question: "What technology allows some wearable devices to detect falls in elderly users?",
                options: [
                    "Facial recognition",
                    "Accelerometers and gyroscopes",
                    "GPS location only"
                ],
                correctAnswer: 1,
                explanation: "Accelerometers and gyroscopes detect sudden movements and changes in orientation that indicate a fall, allowing the device to alert emergency contacts or services."
            }
        ]
    }
]

// Quiz state variables
let currentLevelId = null;
let currentLevel = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

// Player progress data structure
let playerProgress = {
    completedLevels: {},
    // Structure: { levelId: { completed: true, score: 4, totalQuestions: 5 } }
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const levelSelectScreen = document.getElementById('level-select-screen');
const quizScreen = document.getElementById('quiz-screen');
const feedbackScreen = document.getElementById('feedback-screen');
const levelCompleteScreen = document.getElementById('level-complete-screen');

const levelsContainer = document.getElementById('levels-container');
const levelTitle = document.getElementById('level-title');
const questionNumber = document.getElementById('question-number');
const questionTotal = document.getElementById('question-total');
const progressBar = document.getElementById('progress');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');

const feedbackResult = document.getElementById('feedback-result');
const feedbackExplanation = document.getElementById('feedback-explanation');
const nextBtn = document.getElementById('next-btn');

const levelFinalScore = document.getElementById('level-final-score');
const levelTotalQuestions = document.getElementById('level-total-questions');
const levelScoreMessage = document.getElementById('level-score-message');
const nextLevelBtn = document.getElementById('next-level-btn');

// Event Listeners - Wrap in DOMContentLoaded to ensure all elements are loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start screen
    document.getElementById('start-btn').addEventListener('click', showLevelSelect);
    
    // Level select screen
    document.getElementById('back-to-start-btn').addEventListener('click', function() {
        levelSelectScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    });
    
    // Quiz screen
    submitBtn.addEventListener('click', submitAnswer);
    
    // Feedback screen
    nextBtn.addEventListener('click', showNextQuestion);
    
    // Level complete screen
    nextLevelBtn.addEventListener('click', startNextLevel);
    document.getElementById('return-to-levels-btn').addEventListener('click', showLevelSelect);
    
    // Initialize the app
    initializeApp();
});

/**
 * Initializes the application, loads saved progress
 */
function initializeApp() {
    loadProgress();
    createLevelCards();
}

/**
 * Loads player progress from localStorage
 */
function loadProgress() {
    const savedProgress = localStorage.getItem('healthcareTechQuizProgress');
    if (savedProgress) {
        playerProgress = JSON.parse(savedProgress);
    }
}

/**
 * Saves player progress to localStorage
 */
function saveProgress() {
    localStorage.setItem('healthcareTechQuizProgress', JSON.stringify(playerProgress));
}

/**
 * Shows the level selection screen
 */
function showLevelSelect() {
    // Hide other screens
    startScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    levelCompleteScreen.classList.add('hidden');
    
    // Show level selection screen
    levelSelectScreen.classList.remove('hidden');
    
    // Update level cards status
    updateLevelCards();
}

/**
 * Creates level cards for the level selection screen
 */
function createLevelCards() {
    levelsContainer.innerHTML = '';
    
    quizLevels.forEach(level => {
        const levelCard = document.createElement('div');
        levelCard.className = 'level-card';
        levelCard.dataset.levelId = level.id;
        
        const levelContent = document.createElement('div');
        levelContent.className = 'level-content';
        
        const title = document.createElement('h3');
        title.textContent = level.title;
        
        const description = document.createElement('p');
        description.textContent = level.description;
        
        const statusSpan = document.createElement('span');
        statusSpan.className = 'level-status';
        statusSpan.id = `status-${level.id}`;
        
        levelContent.appendChild(title);
        levelContent.appendChild(description);
        levelContent.appendChild(statusSpan);
        
        levelCard.appendChild(levelContent);
        levelsContainer.appendChild(levelCard);
        
        // Add click event
        levelCard.addEventListener('click', function() {
            if (!levelCard.classList.contains('locked')) {
                startLevel(level.id);
            }
        });
    });
    
    // Update status of level cards
    updateLevelCards();
}

/**
 * Updates the status of level cards based on player progress
 */
function updateLevelCards() {
    quizLevels.forEach(level => {
        const levelCard = document.querySelector(`.level-card[data-level-id="${level.id}"]`);
        const statusSpan = document.getElementById(`status-${level.id}`);
        
        // Check if level is completed
        if (playerProgress.completedLevels[level.id]) {
            levelCard.classList.remove('locked');
            statusSpan.textContent = 'Completed';
            statusSpan.className = 'level-status status-completed';
            return;
        }
        
        // Check if level is unlocked
        if (level.unlockRequirement === null) {
            // First level is always unlocked
            levelCard.classList.remove('locked');
            statusSpan.textContent = 'Start';
            statusSpan.className = 'level-status status-in-progress';
        } else if (playerProgress.completedLevels[level.unlockRequirement]) {
            // Level is unlocked if its requirement is completed
            levelCard.classList.remove('locked');
            statusSpan.textContent = 'Unlocked';
            statusSpan.className = 'level-status status-in-progress';
            
            // Add unlock animation if it was just unlocked
            if (levelCard.dataset.wasLocked === 'true') {
                levelCard.classList.add('level-unlock-animation');
                setTimeout(() => {
                    levelCard.classList.remove('level-unlock-animation');
                }, 1000);
            }
        } else {
            // Level is locked
            levelCard.classList.add('locked');
            levelCard.dataset.wasLocked = 'true';
            statusSpan.textContent = 'Locked';
            statusSpan.className = 'level-status status-locked';
        }
    });
}

/**
 * Starts a level by its ID
 * @param {string} levelId - The ID of the level to start
 */
function startLevel(levelId) {
    // Find the level
    currentLevel = quizLevels.find(level => level.id === levelId);
    if (!currentLevel) return;
    
    currentLevelId = levelId;
    currentQuestionIndex = 0;
    score = 0;
    
    // Hide level selection screen
    levelSelectScreen.classList.add('hidden');
    
    // Show quiz screen
    quizScreen.classList.remove('hidden');
    
    // Set level title
    levelTitle.textContent = currentLevel.title;
    
    // Load first question
    loadQuestion(0);
}

/**
 * Loads a question by its index
 * @param {number} index - The index of the question to load
 */
function loadQuestion(index) {
    // Reset state for new question
    selectedOptionIndex = null;
    submitBtn.disabled = true;
    
    // Update question number and progress bar
    questionNumber.textContent = index + 1;
    questionTotal.textContent = currentLevel.questions.length;
    progressBar.style.width = `${(index / currentLevel.questions.length) * 100}%`;
    
    // Set question text
    const question = currentLevel.questions[index];
    questionText.textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option elements based on question type
    if (question.type === "mcq") {
        // Multiple choice question
        question.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.dataset.index = i;
            
            optionElement.addEventListener('click', () => selectOption(optionElement, i));
            
            optionsContainer.appendChild(optionElement);
        });
    }
    // Add other question types here in the future
}

/**
 * Handles option selection
 * @param {HTMLElement} optionElement - The selected option element
 * @param {number} index - The index of the selected option
 */
function selectOption(optionElement, index) {
    // Clear previous selection
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Mark new selection
    optionElement.classList.add('selected');
    selectedOptionIndex = index;
    
    // Enable submit button
    submitBtn.disabled = false;
}

/**
 * Handles answer submission and shows feedback
 */
function submitAnswer() {
    const currentQuestion = currentLevel.questions[currentQuestionIndex];
    const isCorrect = selectedOptionIndex === currentQuestion.correctAnswer;
    
    // Update score if answer is correct
    if (isCorrect) {
        score++;
    }
    
    // Show feedback
    quizScreen.classList.add('hidden');
    feedbackScreen.classList.remove('hidden');
    
    // Set feedback content
    if (isCorrect) {
        feedbackResult.textContent = 'Correct!';
        feedbackResult.className = 'correct';
    } else {
        feedbackResult.textContent = 'Incorrect';
        feedbackResult.className = 'incorrect';
    }
    
    feedbackExplanation.textContent = currentQuestion.explanation;
    
    // Change button text on last question
    if (currentQuestionIndex === currentLevel.questions.length - 1) {
        nextBtn.textContent = 'See Results';
    } else {
        nextBtn.textContent = 'Next Question';
    }
}

/**
 * Shows the next question or results if quiz is complete
 */
function showNextQuestion() {
    feedbackScreen.classList.add('hidden');
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentLevel.questions.length) {
        // Show next question
        quizScreen.classList.remove('hidden');
        loadQuestion(currentQuestionIndex);
    } else {
        // Show level complete screen
        showLevelComplete();
    }
}

/**
 * Shows the level complete screen
 */
function showLevelComplete() {
    // Update level progress
    playerProgress.completedLevels[currentLevelId] = {
        completed: true,
        score: score,
        totalQuestions: currentLevel.questions.length
    };
    
    // Save progress
    saveProgress();
    
    // Show level complete screen
    levelCompleteScreen.classList.remove('hidden');
    
    // Update score display
    levelFinalScore.textContent = score;
    levelTotalQuestions.textContent = currentLevel.questions.length;
    
    // Set score message based on performance
    if (score === currentLevel.questions.length) {
        levelScoreMessage.textContent = "Perfect! You've mastered this topic!";
    } else if (score >= Math.floor(currentLevel.questions.length * 0.7)) {
        levelScoreMessage.textContent = "Great job! You have good knowledge of this topic.";
    } else if (score >= Math.floor(currentLevel.questions.length * 0.5)) {
        levelScoreMessage.textContent = "Not bad! You have a basic understanding of this topic.";
    } else {
        levelScoreMessage.textContent = "You might want to learn more about this topic.";
    }
    
    // Check if there's a next level
    const currentLevelIndex = quizLevels.findIndex(level => level.id === currentLevelId);
    const nextLevel = quizLevels[currentLevelIndex + 1];
    
    if (nextLevel) {
        nextLevelBtn.style.display = 'block';
        nextLevelBtn.dataset.nextLevelId = nextLevel.id;
    } else {
        nextLevelBtn.style.display = 'none';
    }
}

/**
 * Starts the next level
 */
function startNextLevel() {
    const nextLevelId = nextLevelBtn.dataset.nextLevelId;
    if (nextLevelId) {
        startLevel(nextLevelId);
    } else {
        showLevelSelect();
    }
}