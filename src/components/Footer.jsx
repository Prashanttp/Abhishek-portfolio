import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-copy">
            © 2026 Abhishek Choudhary. All rights reserved. Video Editor & Graphic Designer.
          </div>

          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/video-editing" className="footer-link">Video Editing</Link></li>
            <li><Link to="/graphic-design" className="footer-link">Graphic Design</Link></li>
          </ul>

          <a href="#top" className="btn-back-to-top" onClick={scrollToTop}>
            <span>Back to Top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
