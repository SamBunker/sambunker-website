import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section section">
      <div className="container">
        <h2 className="section-title">// THE RESUME \\</h2>
        <p className="section-subtitle">"The Official Document"</p>

        <div className="resume-verse verse">
          <p>
            "Check the credentials, years of <span className="highlight-green">dedication</span>,<br />
            Every line on this page shows my <span className="highlight-green">foundation</span>,<br />
            From the classroom to the code, I've been <span className="highlight-orange">grinding</span>,<br />
            Professional resume, all the proof you're <span className="highlight-orange">finding</span>."
          </p>
        </div>

        <div className="resume-content">
          <div className="resume-intro text-content">
            <p>
              This is where the rubber meets the road—my professional journey documented in black and white.
              Five years of web development experience, project management expertise, and a proven track record
              of delivering high-performance solutions.
            </p>
          </div>

          {/* PDF Viewer Container */}
          <div className="resume-viewer">
            <div className="resume-controls">
              <a
                href="/Samuel_Bunker_Professional_Resume.pdf"
                download="Samuel_Bunker_Resume.pdf"
                className="download-btn"
              >
                <span className="btn-icon">📥</span>
                Download Resume (PDF)
              </a>
              <a
                href="/Samuel_Bunker_Professional_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                <span className="btn-icon">🔍</span>
                View Full Screen
              </a>
            </div>

            <div className="pdf-container">
              <iframe
                src="/Samuel_Bunker_Professional_Resume.pdf"
                title="Samuel Bunker Resume"
                className="pdf-iframe"
              />
              <div className="pdf-fallback">
                <p>Unable to display PDF? <a href="/Samuel_Bunker_Professional_Resume.pdf" target="_blank" rel="noopener noreferrer">Click here to view</a></p>
              </div>
            </div>
          </div>

          {/* Quick Highlights */}
          <div className="resume-highlights">
            <h3 className="highlights-title">Quick Hits</h3>
            <div className="highlights-grid">
              <div className="highlight-card card-hover">
                <div className="highlight-icon icon-md">💼</div>
                <div className="highlight-content">
                  <h4>5+ Years Experience</h4>
                  <p>Full-stack web development, from concept to deployment</p>
                </div>
              </div>
              <div className="highlight-card card-hover">
                <div className="highlight-icon icon-md">🎓</div>
                <div className="highlight-content">
                  <h4>IT + CS Education</h4>
                  <p>BS Information Technology, Minor Computer Science</p>
                </div>
              </div>
              <div className="highlight-card card-hover">
                <div className="highlight-icon icon-md">🏆</div>
                <div className="highlight-content">
                  <h4>Award Winner</h4>
                  <p>2x First Place Hackathon Champion</p>
                </div>
              </div>
              <div className="highlight-card card-hover">
                <div className="highlight-icon icon-md">🚀</div>
                <div className="highlight-content">
                  <h4>Performance Focus</h4>
                  <p>Lighthouse scores 95+ across all projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
