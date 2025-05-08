const quizLevels = [
  {
    id: "diabetes-basics",
    title: "Understanding Diabetes",
    description: "Learn the fundamentals of type 2 diabetes, including causes, symptoms, and diagnosis.",
    unlockRequirement: null,
    questions: [
      {
        type: "mcq",
        question: "What is type 2 diabetes?",
        options: [
          "A condition where the body resists insulin or doesn’t use it effectively",
          "A condition where the body doesn't produce insulin",
          "A temporary rise in blood sugar levels after meals"
        ],
        correctAnswer: 0,
        explanation: "Type 2 diabetes is a chronic condition in which the body resists insulin or doesn’t use it efficiently, leading to elevated blood sugar levels."
      },
      {
        type: "mcq",
        question: "Which of the following is a common symptom of type 2 diabetes?",
        options: [
          "Frequent urination and excessive thirst",
          "Sudden weight gain",
          "Improved vision"
        ],
        correctAnswer: 0,
        explanation: "Frequent urination and increased thirst are classic symptoms due to the body’s effort to flush out excess sugar."
      },
      {
        type: "mcq",
        question: "Which test is commonly used to diagnose diabetes?",
        options: [
          "Liver function test",
          "HbA1c test",
          "Complete blood count"
        ],
        correctAnswer: 1,
        explanation: "The HbA1c test measures average blood sugar over 2–3 months and is a standard diagnostic tool for diabetes."
      },
      {
        type: "mcq",
        question: "Which of the following is a potential complication of untreated diabetes?",
        options: [
          "Kidney damage",
          "Osteoporosis",
          "Hearing loss"
        ],
        correctAnswer: 0,
        explanation: "High blood sugar over time can damage the kidneys, leading to diabetic nephropathy."
      },
      {
        type: "mcq",
        question: "Is type 2 diabetes curable?",
        options: [
          "No, but it can be managed with lifestyle and medication",
          "Yes, completely reversible with one treatment",
          "Yes, by avoiding sugar alone"
        ],
        correctAnswer: 0,
        explanation: "While not curable, type 2 diabetes can be managed effectively with the right lifestyle and medical approach."
      }
    ]
  },
  {
    id: "diabetes-self-care",
    title: "Managing Diabetes Daily",
    description: "Explore how to manage diabetes through medication, checkups, and healthy daily routines.",
    unlockRequirement: "diabetes-basics",
    questions: [
      {
        type: "mcq",
        question: "Which of these is essential for monitoring diabetes at home?",
        options: [
          "Pulse oximeter",
          "Glucometer",
          "Blood pressure monitor"
        ],
        correctAnswer: 1,
        explanation: "A glucometer allows patients to track blood glucose levels regularly at home."
      },
      {
        type: "mcq",
        question: "Why is regular physical activity important for people with diabetes?",
        options: [
          "It helps improve insulin sensitivity",
          "It replaces the need for medication",
          "It raises blood sugar"
        ],
        correctAnswer: 0,
        explanation: "Physical activity improves how the body uses insulin and helps lower blood glucose levels."
      },
      {
        type: "mcq",
        question: "Which dietary habit helps in managing diabetes?",
        options: [
          "Skipping breakfast",
          "Eating sugary snacks between meals",
          "Choosing high-fiber, low-glycemic foods"
        ],
        correctAnswer: 2,
        explanation: "High-fiber, low-GI foods help control blood sugar and reduce insulin spikes."
      },
      {
        type: "mcq",
        question: "How often should people with diabetes visit their doctor for a check-up?",
        options: [
          "Once every 5 years",
          "Only when symptoms appear",
          "Every 3–6 months"
        ],
        correctAnswer: 2,
        explanation: "Regular visits (every 3–6 months) help monitor blood sugar, medications, and prevent complications."
      },
      {
        type: "mcq",
        question: "What is a common dietary restriction for managing type 2 diabetes?",
        options: [
          "Only eating low-fat foods",
          "Avoiding all fruits",
          "Reducing processed sugars and refined carbs"
        ],
        correctAnswer: 2,
        explanation: "Processed sugars and refined carbs can spike blood glucose and are commonly limited in diabetes care."
      }
    ]
  },
  {
    id: "diabetes-prevention",
    title: "Preventing Complications",
    description: "Learn about long-term diabetes complications and how to prevent them through proactive care.",
    unlockRequirement: "diabetes-self-care",
    questions: [
      {
        type: "mcq",
        question: "Which organ is most commonly affected by diabetes-related complications?",
        options: [
          "Lungs",
          "Kidneys",
          "Heart"
        ],
        correctAnswer: 1,
        explanation: "Diabetes can cause nephropathy, or kidney damage, over time due to high blood sugar levels."
      },
      {
        type: "mcq",
        question: "What is diabetic neuropathy?",
        options: [
          "Nerve damage due to high blood sugar",
          "A skin infection common in diabetics",
          "Excessive insulin production"
        ],
        correctAnswer: 0,
        explanation: "Diabetic neuropathy is nerve damage caused by long-term high blood sugar levels."
      },
      {
        type: "mcq",
        question: "How can regular eye exams help diabetes patients?",
        options: [
          "Detect early signs of diabetic retinopathy",
          "Improve blood pressure",
          "Strengthen vision"
        ],
        correctAnswer: 0,
        explanation: "Diabetic retinopathy is a common complication, and regular eye exams help detect it early."
      },
      {
        type: "mcq",
        question: "Which lifestyle habit is most effective in reducing the risk of diabetes complications?",
        options: [
          "Frequent snacking",
          "Smoking",
          "Regular exercise and balanced diet"
        ],
        correctAnswer: 2,
        explanation: "Exercise and a healthy diet are key to managing blood sugar and preventing complications."
      },
      {
        type: "mcq",
        question: "What role does blood pressure control play in diabetes management?",
        options: [
          "It prevents skin infections",
          "It reduces the risk of heart and kidney disease",
          "It lowers cholesterol instantly"
        ],
        correctAnswer: 1,
        explanation: "Maintaining healthy blood pressure helps prevent common diabetes-related cardiovascular and kidney complications."
      }
    ]
  }
];

export default quizLevels;