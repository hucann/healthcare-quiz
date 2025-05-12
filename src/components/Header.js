import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Header.css";

const Header = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Patient Education Quiz
        </Link>
        <nav className="nav">
          {currentUser ? (
            <>
              <Link to="/levels" className="nav-link">Levels</Link>
              <Link to="/generate-quiz" className="nav-link">
                Generate Quiz
              </Link>
              <div className="user-info">
                {currentUser.photoURL && (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName}
                    className="user-avatar"
                  />
                )}
                <span className="user-name">{currentUser.displayName}</span>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link to="/login" className="nav-link login-link">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
