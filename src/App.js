import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Pages
import Home from './pages/Home';
import Levels from './pages/Levels';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Login from './pages/Login';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/levels" 
            element={
              <ProtectedRoute>
                <Levels />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/quiz/:levelId" 
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/result" 
            element={
              <ProtectedRoute>
                <Result />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;