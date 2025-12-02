import { useState, useEffect, useCallback, useRef } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ArchitectureShowcase from './components/ArchitectureShowcase';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import { instantScrollTo } from './utils/smoothScroll';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [showLoading, setShowLoading] = useState(true);
  const [transitionActive, setTransitionActive] = useState(false);
  const [targetSection, setTargetSection] = useState(null);
  const targetSectionRef = useRef(null);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Handle loading screen completion
  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  // Handle page transition navigation
  const navigateWithTransition = useCallback((sectionId) => {
    // Prevent triggering if already transitioning
    if (targetSectionRef.current !== null) {
      return;
    }

    targetSectionRef.current = sectionId;
    setTargetSection(sectionId);
    setTransitionActive(true);
  }, []);

  // Handle transition complete
  const handleTransitionComplete = useCallback(() => {
    const section = targetSectionRef.current;

    if (section) {
      const element = document.getElementById(section);
      if (element) {
        instantScrollTo(element);
      }
    }

    setTransitionActive(false);
    setTargetSection(null);
    targetSectionRef.current = null;
  }, []);

  // Show loading screen on first visit
  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="App">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content.
      </a>

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} onNavigate={navigateWithTransition} />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onNavigate={navigateWithTransition} />

        {/* The Story (About) */}
        <About />

        {/* The Arsenal (Skills) */}
        <Skills />

        {/* The Discography (Projects) */}
        <Projects />

        {/* The Bunk-Box (Project Blueprints) */}
        <ArchitectureShowcase />

        {/* The Resume */}
        <Resume />

        {/* Let's Connect (Contact) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop onNavigate={navigateWithTransition} />

      {/* Page Transition Overlay */}
      {transitionActive && (
        <PageTransition
          targetSection={targetSection}
          onComplete={handleTransitionComplete}
        />
      )}
    </div>
  );
}

export default App;
