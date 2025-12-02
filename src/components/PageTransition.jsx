import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/PageTransition.css';

const PageTransition = ({ targetSection, onComplete }) => {
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    // Complete transition after animation
    const timer = setTimeout(() => {
      // Only call onComplete once
      if (!hasCompletedRef.current && onComplete) {
        hasCompletedRef.current = true;
        onComplete();
      }
    }, 1000); // Total transition time

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Section name mapping for display
  const sectionNames = {
    home: 'HOME',
    story: 'THE STORY',
    arsenal: 'THE ARSENAL',
    discography: 'THE WORKS',
    architecture: 'BUNK-BOX',
    resume: 'RESUME',
    contact: 'CONTACT'
  };

  const displayName = sectionNames[targetSection || 'home'] || 'HOME';

  return (
    <div className="page-transition-overlay">
      <div className="cassette-container">
        {/* Cassette Tape */}
        <div className="transition-cassette">
          {/* Left Reel */}
          <div className="cassette-reel left-reel">
            <div className="reel-inner"></div>
            <div className="reel-center"></div>
          </div>

          {/* Tape Strip */}
          <div className="cassette-tape-strip"></div>

          {/* Right Reel */}
          <div className="cassette-reel right-reel">
            <div className="reel-inner"></div>
            <div className="reel-center"></div>
          </div>

          {/* Cassette Body */}
          <div className="cassette-body"></div>
        </div>

        {/* Fast Forward Text */}
        <div className="transition-text">
          <div className="ff-icon">⏩</div>
          <div className="ff-label">FAST-FORWARDING TO</div>
          <div className="ff-destination">{displayName}</div>
        </div>
      </div>
    </div>
  );
};

PageTransition.propTypes = {
  targetSection: PropTypes.string,
  onComplete: PropTypes.func.isRequired
};

export default PageTransition;
