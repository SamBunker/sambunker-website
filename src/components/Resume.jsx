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
              Here's the official rundown of what I've been building. Five years deep in web development,
              managing projects, and shipping solutions that actually perform. Everything's laid out below,
              so go ahead and check it out.
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

        </div>
      </div>
    </section>
  );
};

export default Resume;
