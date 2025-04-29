/**
 * Healthcare Technology Quiz Game Data
 * 
 * This file contains all the quiz levels and questions data.
 */

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
  },
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
];

export default quizLevels;