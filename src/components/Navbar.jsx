import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav" aria-label="Main Navigation">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-badge"></span>
            <span>Abhishek Choudhary</span>
            <span className="logo-tag">Portfolio</span>
          </Link>

          {/* Desktop & Mobile Menu */}
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`} id="navMenu">
            <li>
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/video-editing" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Video Editing
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/graphic-design" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Graphic Design
              </NavLink>
            </li>
            <li className="nav-cta">
              <a 
                href={location.pathname === '/' ? '#contact' : '#/contact'} 
                className="btn btn-primary btn-sm"
                onClick={(e) => {
                  closeMenu();
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get in Touch
              </a>
            </li>
          </ul>

          {/* Hamburger Toggle */}
          <button 
            className={`nav-toggle ${isOpen ? 'active' : ''}`} 
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
