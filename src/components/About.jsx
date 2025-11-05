import './About.css';

// Timeline data from 2018 to 2028
const timelineData = [
  {
    year: 2019,
    icon: "🎨",
    label: "Graphic Design Certificate",
    description: "Graphic Design Certificate\nFranklin County Career & Technology Center"
  },
  {
    year: 2020,
    icon: "🏫",
    label: "Chambersburg Area Senior High School",
    description: "Graduated from\nChambersburg Area Senior High School"
  },
  {
    year: 2024,
    icon: "🎓",
    label: "Juniata College",
    description: "B.Sc. in Information Technology\nMinor Computer Science\nJuniata College"
  },
  {
    year: 2026,
    icon: "❓",
    label: "Future Education",
    description: "Masters Degree?\nFuture Educational Opportunities?"
  }
];

const EducationTimeline = () => {
  const startYear = 2018;
  const endYear = 2028;
  const totalYears = endYear - startYear;

  // Calculate position for each milestone (0-100%)
  const getPosition = (year) => {
    return ((year - startYear) / totalYears) * 100;
  };

  return (
    <div className="timeline-chart">
      <div className="timeline-axis">
        {/* Start year label */}
        <span className="year-label year-start">{startYear}</span>

        {/* Timeline line with dots */}
        <div className="timeline-track">
          {timelineData.map((event, index) => (
            <div
              key={index}
              className="timeline-dot"
              style={{ left: `${getPosition(event.year)}%` }}
              data-tooltip={event.description}
            >
              <span className="dot-icon">{event.icon}</span>
              <span className="dot-year">{event.year}</span>
            </div>
          ))}
        </div>

        {/* End year label */}
        <span className="year-label year-end">{endYear}</span>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="story" className="about-section section rap-sheet">
      <div className="container">
        <h2 className="section-title">// THE STORY \\</h2>
        <p className="section-subtitle">"From the Code to the Booth"</p>

        {/* Bar 1 - Tech Side */}
        <div className="about-content">
          <div className="verse">
            <p>
              "Started from the tech, hands dirty with the <span className="highlight-yellow">code</span>,<br />
              Fascinated by the systems, learning every <span className="highlight-yellow">mode</span>,<br />
              From hardware to software, I'm a hands-on <span className="highlight-orange">learner</span>,<br />
              Every bug I squash makes my passion burn <span className="highlight-orange">warmer</span>."
            </p>
          </div>

          <div className="about-text-section">
            <h3 className="subsection-title">WHO I AM</h3>
            <div className="about-grid">
              <div className="about-text-with-image">
                <img src="/img/me.jpg" alt="Samuel Bunker" className="about-photo" />
                <p>
                  Information Technology graduate from <strong>Juniata College</strong>, but that's just the surface.
                  I'm a hands-on learner who fiddles with technology like Eminem spits bars—everything fascinates me.
                </p>
                <p>
                  Whether it's building full-stack web applications, optimizing server infrastructure, or designing
                  clean user interfaces, I dive deep into every project. I don't just write code; I craft solutions
                  that perform.
                </p>
              </div>
            </div>

            {/* Education Timeline Chart */}
            <h3 className="subsection-title">Educational Timeline</h3>
            <div className="education-timeline">
              <EducationTimeline />
            </div>
          </div>

          {/* Bar 2 - Hip-Hop Side */}
          <div className="verse">
            <p>
              "But yo, that's just half of what defines my <span className="highlight-pink">name</span>,<br />
              Hip-hop in my veins like I'm running this <span className="highlight-pink">game</span>,<br />
              From Em to J-Cole, Joyner Lucas on <span className="highlight-green">repeat</span>,<br />
              Boom-bap snare and bass got me moving to the <span className="highlight-green">beat</span>."
            </p>
          </div>

          <div className="about-text-section">
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
                <div className="music-badges">
                  <span className="badge">🎤 Freestyle Rapper</span>
                  <span className="badge">🎧 Boom-Bap Enthusiast</span>
                  <span className="badge">🔥 Real</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bar 3 - The Blend */}
          <div className="verse">
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
          </div>

          {/* Education & Achievements */}
          <div className="about-achievements">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
