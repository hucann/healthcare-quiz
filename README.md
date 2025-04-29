# Healthcare Technology Quiz Game

A web-based quiz game focused on healthcare technology knowledge. This interactive quiz tests users' understanding of various healthcare technology concepts through multiple levels and question types.

## Features

- **Multiple Quiz Levels:**
  - Telemedicine: Learn about remote healthcare delivery technologies
  - AI Diagnostics: Explore artificial intelligence in medical diagnostics
  - Wearable Devices: Discover wearable health monitoring technologies

- **Level Progression System:**
  - Complete levels to unlock new ones
  - Track your progress across multiple sessions
  - Visual indicators for completed, in-progress, and locked levels

- **Question Types:**
  - Multiple-choice questions with instant feedback
  - Detailed explanations for each answer

- **User Experience:**
  - Clean, modern interface with healthcare-themed colors
  - Responsive design for mobile and desktop devices
  - Clear navigation between Start Menu → Level Select → Quiz
  - Progress tracking within each level

- **Persistent Progress:**
  - Your completed levels are saved using localStorage
  - Return to the game anytime and continue where you left off

## Technologies Used

- HTML5
- CSS3 (with media queries for responsiveness)
- Vanilla JavaScript (no external libraries)
- localStorage for data persistence

## Project Structure

- `index.html` - The main HTML structure of the quiz
- `styles.css` - CSS styling with a healthcare-themed blue and green color scheme
- `script.js` - JavaScript logic for the quiz functionality, level system, and progress tracking

## How to Run

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Click the "Start Quiz" button to begin
4. Select an unlocked level to play

## Design Choices

- Modern, minimalistic UI with blue and green colors reflecting a healthcare theme
- Clear separation between different quiz screens (start, level selection, questions, feedback, results)
- Intuitive navigation with prominent buttons
- Progress tracking to show quiz advancement
- Responsive design that adapts to different screen sizes
- Level cards with visual status indicators

## Future Enhancements

The quiz is designed for easy expansion. Potential future enhancements include:
- Adding more question types (matching, drag-and-drop)
- Implementing a timer feature
- Adding difficulty levels within each topic
- Including images or diagrams in questions
- Creating a global leaderboard system
