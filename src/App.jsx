import { useState, useEffect } from 'react';
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
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [showLoading, setShowLoading] = useState(true);

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
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* The Story (About) */}
        <About />

        {/* The Arsenal (Skills) */}
        <Skills />

        {/* The Discography (Projects) */}
        <Projects />

        {/* The Blueprint (Architecture) */}
        <ArchitectureShowcase />

        {/* The Resume */}
        <Resume />

        {/* Let's Connect (Contact) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
