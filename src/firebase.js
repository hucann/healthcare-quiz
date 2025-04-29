import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRT2nzxYIFqqoW7bsHT9PB40eRDj9KSd0",
  authDomain: "healthcare-tech-quiz.firebaseapp.com",
  projectId: "healthcare-tech-quiz",
  storageBucket: "healthcare-tech-quiz.firebasestorage.app",
  messagingSenderId: "542517999521",
  appId: "1:542517999521:web:29f91f6f25309b76c9bde0",
  measurementId: "G-SM5W8152QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;