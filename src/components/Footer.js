import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Healthcare Technology Quiz</p>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Use</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;