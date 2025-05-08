import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  
  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithGoogle();
      // navigate('/levels');
      navigate('/generate-quiz')
    } catch (error) {
      setError('Failed to sign in with Google. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="login-screen screen">
      <h1>Welcome to Healthcare Tech Quiz</h1>
      <p>Sign in to track your progress and unlock levels</p>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="login-container">
        <button 
          className="google-signin-btn" 
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.pngx" 
            alt="Google logo" 
            className="google-icon" 
          />
          Sign in with Google
        </button>
        
        <div className="login-info">
          <h3>Why sign in?</h3>
          <ul>
            <li>Track your progress across devices</li>
            <li>Save your completed levels</li>
            <li>Unlock new challenges as you learn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;