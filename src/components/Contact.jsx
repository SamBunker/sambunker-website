import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  return (
    <section id="contact" className="contact-section section rap-sheet">
      <div className="container">
        <h2 className="section-title">// LET'S CONNECT \\</h2>
        <p className="section-subtitle">"Ready to Collaborate"</p>

        {/* Final Verse */}
        <div className="verse">
          <p>
            "Got a project? Let's connect, collaborate, <span className="highlight-yellow">create</span>,<br />
            Email or LinkedIn, don't <span className="highlight-yellow">hesitate</span>,<br />
            Code and design, that's the <span className="highlight-pink">combination</span>,<br />
            Hit me up, let's build the <span className="highlight-pink">foundation</span>."
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading">GET IN TOUCH</h3>
            <p className="contact-text text-content">
              Need a developer who can handle the full stack and make things look good? Let's build something together.
            </p>

            <div className="contact-details">
              <a href="mailto:samuelbunker@live.com" className="contact-item">
                <span className="contact-icon icon-sm">📧</span>
                <div className="contact-item-text">
                  <strong>Email</strong>
                  <span>samuelbunker@live.com</span>
                </div>
              </a>

              {phoneRevealed ? (
                <a href="tel:+17174466875" className="contact-item">
                  <span className="contact-icon icon-sm">📱</span>
                  <div className="contact-item-text">
                    <strong>Phone</strong>
                    <span>(717) 446-6875</span>
                  </div>
                </a>
              ) : (
                <button
                  onClick={() => setPhoneRevealed(true)}
                  className="contact-item contact-item-reveal"
                >
                  <span className="contact-icon icon-sm">📱</span>
                  <div className="contact-item-text">
                    <strong>Phone</strong>
                    <span className="reveal-text">Click to reveal number</span>
                  </div>
                </button>
              )}

              <a
                href="https://linkedin.com/in/sambunker/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-icon icon-sm">💼</span>
                <div className="contact-item-text">
                  <strong>LinkedIn</strong>
                  <span>linkedin.com/in/sambunker</span>
                </div>
              </a>

              <a
                href="https://github.com/SamBunker"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-icon icon-sm">💻</span>
                <div className="contact-item-text">
                  <strong>GitHub</strong>
                  <span>github.com/SamBunker</span>
                </div>
              </a>

              <a
                href="https://behance.net/samuelbunker"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-icon icon-sm">🎨</span>
                <div className="contact-item-text">
                  <strong>Behance</strong>
                  <span>behance.net/samuelbunker</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-card">
              <h3>Open for Opportunities</h3>
              <p>
                Looking for full-time, contract, or freelance opportunities. Need someone to build an app, design an interface, or lead a project? You need me, you need Samuel Bunker.
              </p>
              <div className="cta-buttons">
                <a href="mailto:samuelbunker@live.com" className="btn btn-primary">
                  📧 Email Me
                </a>
                <a
                  href="https://linkedin.com/in/sambunker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  💼 Connect on LinkedIn
                </a>
              </div>
              <p className="cta-tagline">"Let's turn your vision into reality."</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <h3 className="social-heading">FIND ME ONLINE</h3>
          <div className="social-icons">
            <a
              href="https://github.com/SamBunker"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/sambunker/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path
                  fill="currentColor"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>

            <a
              href="https://behance.net/samuelbunker"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Behance"
            >
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path
                  fill="currentColor"
                  d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
