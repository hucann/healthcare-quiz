const quizLevels = [
  {
    id: "diabetes-history-basics",
    title: "Living with Diabetes Long-Term",
    description: "Understand the impact of living with diabetes for many years, including risks and management priorities.",
    unlockRequirement: null,
    questions: [
      {
        type: "mcq",
        question: "After 10 years of type 2 diabetes, which complication is most common?",
        options: [
          "Joint pain",
          "Kidney damage",
          "Asthma"
        ],
        correctAnswer: 1,
        explanation: "Kidney damage (diabetic nephropathy) is a common complication in patients with long-term uncontrolled diabetes."
      },
      {
        type: "mcq",
        question: "Which of the following is a long-term effect of uncontrolled blood sugar?",
        options: [
          "Improved immune function",
          "Increased energy levels",
          "Nerve damage in the feet"
        ],
        correctAnswer: 2,
        explanation: "Peripheral neuropathy, or nerve damage in the extremities, is a common complication of poorly controlled diabetes over time."
      },
      {
        type: "mcq",
        question: "Why are eye exams important for people with long-standing diabetes?",
        options: [
          "To check for cataracts only",
          "To detect diabetic retinopathy early",
          "To improve reading ability"
        ],
        correctAnswer: 1,
        explanation: "Diabetic retinopathy is a leading cause of vision loss, and regular eye exams help detect early signs."
      },
      {
        type: "mcq",
        question: "How often should HbA1c be checked in patients with long-term diabetes?",
        options: [
          "Every 2 years",
          "Every 6 months or as advised by a doctor",
          "Only when symptoms worsen"
        ],
        correctAnswer: 1,
        explanation: "The HbA1c test should typically be done every 3–6 months to monitor blood sugar control over time."
      },
      {
        type: "mcq",
        question: "Which of the following helps reduce long-term diabetes complications?",
        options: [
          "Eating high-sugar snacks",
          "Skipping insulin on weekends",
          "Consistent blood sugar monitoring"
        ],
        correctAnswer: 2,
        explanation: "Regular monitoring allows early adjustments to medication and lifestyle to prevent complications."
      }
    ]
  },
  {
    id: "hypertension-diabetes-care",
    title: "Managing Diabetes with Hypertension",
    description: "Learn how hypertension affects diabetes management and what lifestyle adjustments are critical.",
    unlockRequirement: "diabetes-history-basics",
    questions: [
      {
        type: "mcq",
        question: "Why is hypertension a concern for people with diabetes?",
        options: [
          "It decreases cholesterol",
          "It increases the risk of heart and kidney disease",
          "It cures diabetic symptoms"
        ],
        correctAnswer: 1,
        explanation: "Having both conditions increases the risk of cardiovascular and kidney complications significantly."
      },
      {
        type: "mcq",
        question: "What is a recommended blood pressure target for patients with diabetes and hypertension?",
        options: [
          "Below 140/90 mmHg",
          "Exactly 150/100 mmHg",
          "Any value is fine if blood sugar is controlled"
        ],
        correctAnswer: 0,
        explanation: "Guidelines generally recommend keeping blood pressure below 140/90 mmHg for diabetes patients."
      },
      {
        type: "mcq",
        question: "Which lifestyle change helps control both diabetes and hypertension?",
        options: [
          "High-sodium snacks",
          "Regular exercise and low-sodium diet",
          "Energy drinks before bed"
        ],
        correctAnswer: 1,
        explanation: "Exercise and dietary changes (especially lowering salt) benefit both conditions."
      },
      {
        type: "mcq",
        question: "Which medication is commonly used to protect kidneys in diabetic patients with hypertension?",
        options: [
          "ACE inhibitors",
          "Aspirin",
          "Cough syrup"
        ],
        correctAnswer: 0,
        explanation: "ACE inhibitors not only control blood pressure but also reduce kidney damage risk."
      },
      {
        type: "mcq",
        question: "What is one sign that your blood pressure may be too high?",
        options: [
          "Blurry vision or headaches",
          "Increased appetite",
          "Fever"
        ],
        correctAnswer: 0,
        explanation: "Blurry vision and headaches are common signs of uncontrolled hypertension."
      }
    ]
  },
  {
    id: "lifestyle-adjustments",
    title: "Daily Habits for Long-Term Health",
    description: "Build habits to manage both diabetes and hypertension effectively for years to come.",
    unlockRequirement: "hypertension-diabetes-care",
    questions: [
      {
        type: "mcq",
        question: "What is the ideal plate composition for managing both diabetes and high blood pressure?",
        options: [
          "Half plate carbs, half plate meat",
          "Half vegetables, one-quarter whole grains, one-quarter lean protein",
          "All fruits and bread"
        ],
        correctAnswer: 1,
        explanation: "A balanced plate with vegetables, whole grains, and lean proteins helps control sugar and blood pressure."
      },
      {
        type: "mcq",
        question: "What is one recommended physical activity for managing both conditions?",
        options: [
          "Walking 30 minutes daily",
          "Watching TV to relax",
          "Skipping meals and napping"
        ],
        correctAnswer: 0,
        explanation: "Walking is safe and effective for blood sugar and cardiovascular health."
      },
      {
        type: "mcq",
        question: "Which habit should be avoided to reduce diabetes and hypertension complications?",
        options: [
          "Smoking",
          "Drinking water",
          "Stretching after waking up"
        ],
        correctAnswer: 0,
        explanation: "Smoking damages blood vessels and worsens both diabetes and high blood pressure outcomes."
      },
      {
        type: "mcq",
        question: "What is a helpful technique to reduce stress and lower blood pressure?",
        options: [
          "Deep breathing or meditation",
          "Eating more to distract yourself",
          "Watching intense action movies"
        ],
        correctAnswer: 0,
        explanation: "Relaxation techniques like meditation can lower stress and positively impact blood pressure."
      },
      {
        type: "mcq",
        question: "How can tracking help improve health in these conditions?",
        options: [
          "Tracking only weight once a year",
          "Logging blood sugar, blood pressure, and medication daily",
          "Only tracking exercise routines"
        ],
        correctAnswer: 1,
        explanation: "Consistent tracking allows early adjustments and promotes accountability in daily management."
      }
    ]
  }
];

export default quizLevels;