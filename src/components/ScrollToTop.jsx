import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/ScrollToTop.css';

const ScrollToTop = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

ScrollToTop.propTypes = {
  onNavigate: PropTypes.func.isRequired
};

export default ScrollToTop;
