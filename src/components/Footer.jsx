import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/img/logo-white.webp" alt="Samuel J. Bunker Logo" className="footer-logo" />
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#story">The Story</a></li>
                <li><a href="#arsenal">The Arsenal</a></li>
                <li><a href="#discography">The Discography</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#connect">Connect</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="mailto:samuelbunker@live.com" target="_blank" rel="noopener noreferrer">
                    📧 Email
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/samuel-bunker" target="_blank" rel="noopener noreferrer">
                    💼 LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/samuelbunker" target="_blank" rel="noopener noreferrer">
                    💻 GitHub
                  </a>
                </li>
                <li>
                  <a href="https://behance.net/samuelbunker" target="_blank" rel="noopener noreferrer">
                    🎨 Behance
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Tech Stack</h4>
              <ul>
                <li>React • Node.js • PHP</li>
                <li>MySQL • MongoDB</li>
                <li>Express • Handlebars</li>
                <li>HTML5 • CSS3 • JavaScript</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-quote">
            <p>Full-Stack Developer • Problem Solver • Hip-Hop Head</p>
            <p>Built with a whole lot of frickin' love.</p>
          </div>
          <div className="footer-copyright">
            <p>© {currentYear} Samuel J. Bunker</p> | Thank you!
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
