import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={theme === 'light' ? '/img/logo.webp' : '/img/logo-white.webp'}
            alt="Samuel Bunker Logo"
            className="logo-image"
          />
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('home')} className="nav-link">HOME</button></li>
          <li><button onClick={() => scrollToSection('story')} className="nav-link">THE STORY</button></li>
          <li><button onClick={() => scrollToSection('arsenal')} className="nav-link">THE ARSENAL</button></li>
          <li><button onClick={() => scrollToSection('discography')} className="nav-link">THE WORKS</button></li>
          <li><button onClick={() => scrollToSection('architecture')} className="nav-link">BUNK-BOX</button></li>
          <li><button onClick={() => scrollToSection('resume')} className="nav-link">RESUME</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-link">CONTACT</button></li>
          <li>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
