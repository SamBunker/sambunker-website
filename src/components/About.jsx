import '../styles/About.css';
import { useState, useEffect, useRef } from 'react';
import youngSamuelImage from '../assets/images/young-samuel-and-david.webp';
import aboutImage from '../assets/images/home.webp';

const About = () => {
  const photoRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const graffitiLine1Ref = useRef(null);
  const graffitiLine2Ref = useRef(null);
  const graffitiLine3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            entry.target.classList.add('animate');
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentPhotoRef = photoRef.current;

    if (currentPhotoRef) {
      observer.observe(currentPhotoRef);
    }

    return () => {
      if (currentPhotoRef) {
        observer.unobserve(currentPhotoRef);
      }
    };
  }, [hasAnimated]);

  // Graffiti bar fade-out effect
  useEffect(() => {
    const graffitiObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add fade-out class after 2 seconds
            setTimeout(() => {
              entry.target.classList.add('bar-fade-out');
            }, 1000);
            graffitiObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const refs = [graffitiLine1Ref, graffitiLine2Ref, graffitiLine3Ref];
    refs.forEach(ref => {
      if (ref.current) {
        graffitiObserver.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          graffitiObserver.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section id="story" className="about-section section rap-sheet">
      <div className="graffiti-text" aria-hidden="true">
        <span className="graffiti-line" ref={graffitiLine1Ref}>BUILD <span className="solid-bar">████████████</span></span>
        <span className="graffiti-line" ref={graffitiLine2Ref}><span className="solid-bar">████████████</span> BELIEVE</span>
        <span className="graffiti-line" ref={graffitiLine3Ref}>BECOME <span className="solid-bar">████████████</span></span>
      </div>

      <div className="container">
        <h2 className="section-title">THE STORY</h2>
        <p className="section-subtitle">"Back to My Roots"</p>

        <div className="about-hero-image">
          <img src={aboutImage} alt="Samuel's Home" className="home-photo" />
        </div>

        <div className="about-content">
          <div className="verse">
            <p>
              "Dad showed me tech on Dunham Drive back <span className="highlight-yellow">then</span>,<br />
              Took apart machines just to build 'em <span className="highlight-yellow">again</span>,<br />
              From broken parts to building apps that <span className="highlight-orange">glow</span>,<br />
              Every challenge faced made my passion <span className="highlight-orange">overflow</span>."
            </p>
          </div>

          <div className="about-text-section">
            <h3 className="subsection-title">🎤 WHO I AM</h3>

            <div className="about-grid">
              <div className="about-text-with-image text-content">
                <div className="photo-drop-container" ref={photoRef}>
                  <div className="cursor-animation" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animated-cursor">
                      <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="white" stroke="black" strokeWidth="2"/>
                    </svg>
                  </div>
                  <img src={youngSamuelImage} alt="Samuel Bunker" className="about-photo" />
                </div>
                <p>
                  Son of George Bunker and Sarah Bunker, whom I also shared a house with my older three brothers.
                  I grew up in North Carolina and then soon moved to Pennsylvania. I recently graduated from
                  <strong> Juniata College</strong> with a Bachelor's of Science in Information Technology.
                </p>
                <p>
                 I fell in love with computers because of my Dad. His intuition and passion drove me further to
                  explore and fittle with technology. For many years now I've been passionate about web design and development.
                  Being able to create something from nothing and share it with anyone else on the internet is exciting!
                </p>
              </div>
            </div>
          </div>

          <div className="about-text-section">
            <div className="entrepreneurial-intro">
              <p className="intro-statement">
                "With a passion for technology and a love for connecting with people,
                I couldn't let my skills sit idle—I've always dreamed of building something of my own."
              </p>
            </div>
          </div>

          <div className="about-text-section">
            <h3 className="subsection-title">💼 SMALL BUSINESS OWNER</h3>
            <div className="business-content">
              <div className="business-card-float">
                <img
                  src="/img/tapmein.png"
                  alt="Tap Me In NFC Business Card"
                  className="business-card-image"
                />
              </div>

              <div className="business-text text-content">
                <h4 className="business-title card-title">Tap Me In</h4>
                <p className="business-subtitle card-subtitle">NFC Business Cards</p>

                <p>
                  Founded and operate <strong>Tap Me In</strong>, a small business specializing in
                  NFC-tappable business cards. We serve students looking to stand out and enterprise
                  companies seeking modern networking solutions.
                </p>
              </div>

              <div className="business-text-full text-content">
                <p>
                  Leading <strong>Tap Me In</strong> from concept to execution, I oversee product design,
                  web management, e-commerce operations, and customer relations alongside a dedicated team.
                  Building a business from the ground up taught me resilience, adaptability, and the
                  importance of collaboration and delivering value.
                </p>
                <p>
                  <strong>The official web application dashboard is currently in development.</strong> Stay
                  tuned for a full-featured platform to manage and customize your NFC business cards.
                </p>

                <div className="business-buttons">
                  <a
                    href="https://www.tapmein.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-blueprint"
                  >
                    <span>Visit Tap Me In</span>
                    <span className="button-arrow">→</span>
                  </a>

                  <button className="btn-blueprint-disabled" disabled>
                    <span className="badge-pulse-white"></span>
                    <span>Dashboard Coming Soon</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
