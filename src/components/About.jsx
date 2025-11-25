import './About.css';
import { useState, useEffect, useRef } from 'react';
import youngSamuelImage from '../assets/images/young-samuel-and-david.webp';
import aboutImage from '../assets/images/home.webp';

const About = () => {
  const photoRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

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

    if (photoRef.current) {
      observer.observe(photoRef.current);
    }

    return () => {
      if (photoRef.current) {
        observer.unobserve(photoRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="story" className="about-section section rap-sheet">
      {/* Graffiti Background Text */}
      <div className="graffiti-text" aria-hidden="true">
        <span className="graffiti-line">BUILD</span>
        <span className="graffiti-line">BELIEVE</span>
        <span className="graffiti-line">BECOME</span>
      </div>

      <div className="container">
        {/* Home Photo at Top */}
        <div className="about-hero-image">
          <img src={aboutImage} alt="Samuel's Home" className="home-photo" />
        </div>

        <h2 className="section-title">// THE STORY \\</h2>
        <p className="section-subtitle">"Back to My Roots"</p>

        {/* Bar 1 - Tech Side */}
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
                {/* Photo with Drag & Drop Cursor Animation */}
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

          {/* <div className="about-text-section">
            <h3 className="subsection-title">THE MUSIC</h3>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  When I'm not coding, you'll catch me with my headphones, vibing to the greats:
                  <strong> Eminem, J-Cole, Joyner Lucas, Ice Cube, D12</strong>. That boom-bap snare + bass
                  HITS DIFFERENT.
                </p>
                <p>
                  I freestyle, I love the gangster-rap vibe, the raw authenticity, the lyrical wordplay.
                  Hip-hop taught me about rhythm, flow, and storytelling—skills that translate directly into
                  how I approach problem-solving in code.
                </p>
              </div>
            </div>
          </div> */}

          {/* Bar 3 - The Blend */}
          {/* <div className="verse">
            <p>
              "Code bars and lyrical scars, that's my <span className="highlight-yellow">repertoire</span>,<br />
              From React components to verses I <span className="highlight-yellow">record</span>,<br />
              Portfolio site that breaks the corporate <span className="highlight-orange">mold</span>,<br />
              Street-smart aesthetic but the skills are <span className="highlight-orange">gold</span>."
            </p>
          </div>

          <div className="about-text-section">
            <h3 className="subsection-title">THE BLEND</h3>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Why not combine both? This portfolio isn't your typical resume site. It's rap sheets meets
                  code sheets. It's bold, it's authentic, it's ME.
                </p>
                <p>
                  Just like a rapper crafts bars with precision, I write clean, maintainable code.
                  Just like hip-hop values authenticity, I bring genuine passion to every project.
                  Let's build something that stands out.
                </p>
              </div>
            </div>
          </div> */}

          {/* Education & Achievements */}
          {/* <div className="about-achievements">
            <div className="achievement-card">
              <div className="achievement-icon">🎓</div>
              <h4>Education</h4>
              <p><strong>Juniata College</strong></p>
              <p>BS in Information Technology</p>
              <p>Minor in Computer Science</p>
              <p className="year">May 2024</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">🎨</div>
              <h4>Design Cert</h4>
              <p><strong>Franklin County CTC</strong></p>
              <p>Graphic Communications</p>
              <p>Certificate</p>
              <p className="year">January 2020</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h4>Hackathons</h4>
              <p><strong>2x First Place Winner</strong></p>
              <p>Juniata Hackathon 2023</p>
              <p>Juniata Hackathon 2022</p>
              <p className="year">React & UI/UX</p>
            </div>
          </div> */}

          {/* Entrepreneurial Drive Section */}
          <div className="about-text-section">
            <div className="entrepreneurial-intro">
              <p className="intro-statement">
                "With a passion for technology and a love for connecting with people,
                I couldn't let my skills sit idle—I've always dreamed of building something of my own."
              </p>
            </div>
          </div>

          {/* Small Business Owner Section */}
          <div className="about-text-section">
            <h3 className="subsection-title">💼 SMALL BUSINESS OWNER</h3>
            <div className="business-content">
              {/* Business Card Image - Floats Left */}
              <div className="business-card-float">
                <img
                  src="/img/tapmein.png"
                  alt="Tap Me In NFC Business Card"
                  className="business-card-image"
                />
              </div>

              {/* Text Content - Wraps Around Card */}
              <div className="business-text text-content">
                <h4 className="business-title card-title">Tap Me In</h4>
                <p className="business-subtitle card-subtitle">NFC Business Cards</p>

                <p>
                  Founded and operate <strong>Tap Me In</strong>, a small business specializing in
                  NFC-tappable business cards. We serve students looking to stand out and enterprise
                  companies seeking modern networking solutions.
                </p>
              </div>

              {/* Full-width content below image */}
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
