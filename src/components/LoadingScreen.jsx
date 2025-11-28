import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Show for 2 seconds, then fade out
    const timer = setTimeout(() => {
      setIsAnimating(false);
      // Fade out and then call onComplete
      setTimeout(onComplete, 500); // 500ms for fade out
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${!isAnimating ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="cursive-text-wrapper">
          <span className="cursive-text">Thank you for visiting...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
