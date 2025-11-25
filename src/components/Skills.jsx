import './Skills.css';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React', years: 2, level: 40 },
      { name: 'JavaScript', years: 5, level: 100 },
      { name: 'HTML5', years: 5, level: 100 },
      { name: 'CSS3', years: 5, level: 100 },
      { name: 'Bootstrap', years: 4, level: 80 },
      { name: 'jQuery', years: 3, level: 60 }
    ],
    backend: [
      { name: 'Node.js', years: 4, level: 80 },
      { name: 'Express.js', years: 3, level: 60 },
      { name: 'PHP', years: 5, level: 100 },
      { name: 'MySQL', years: 5, level: 100 },
      { name: 'Python', years: 2, level: 40 },
      { name: 'REST APIs', years: 4, level: 80 }
    ],
    devops: [
      { name: 'Docker', years: 2, level: 40 },
      { name: 'Git/GitHub', years: 5, level: 100 },
      { name: 'CI/CD', years: 2, level: 40 },
      { name: 'Linux', years: 3, level: 60 },
      { name: 'Apache', years: 4, level: 80 },
      { name: 'Bash', years: 3, level: 60 }
    ],
    design: [
      { name: 'Figma', years: 3, level: 60 },
      { name: 'Adobe XD', years: 2, level: 40 },
      { name: 'UI/UX Design', years: 4, level: 80 },
      { name: 'Wireframing', years: 4, level: 80 },
      { name: 'Responsive Design', years: 5, level: 100 },
      { name: 'Accessibility', years: 3, level: 60 }
    ],
    software_engineer: [
      { name: 'Object-Oriented Programming (OOP)', years: 4, level: 80 },
      { name: 'Python', years: 3, level: 60 },
      { name: 'Java', years: 2, level: 40 },
      { name: 'Software Architecture Principles', years: 3, level: 70 },
      { name: 'Code Review & Collaboration', years: 3, level: 60 },
      { name: 'API Design & Integration', years: 4, level: 80 },
      { name: 'Clean Code Practices', years: 4, level: 80 }
    ],
    project_management: [
      { name: 'Agile / Scrum Methodology', years: 2, level: 50 },
      { name: 'Waterfall Methodology', years: 2, level: 50 },
      { name: 'Risk Management', years: 2, level: 50 },
      { name: 'Trello', years: 3, level: 60 },
      { name: 'Jira', years: 3, level: 60 },
      { name: 'ConnectWise Manage', years: 1, level: 20 },
      { name: 'Moovila', years: 1, level: 20 }
    ],
  };

  return (
    <section id="arsenal" className="skills-section section">
      <div className="container">
        <h2 className="section-title">// THE ARSENAL \\</h2>
        <p className="section-subtitle">"Tools of the Trade"</p>

        {/* Opening Verse */}
        <div className="verse">
          <p>
            "Check the toolkit, every weapon locked and <span className="highlight-yellow">loaded</span>,<br />
            From the frontend views to the backends <span className="highlight-yellow">coded</span>,<br />
            React on the screen, Node running the <span className="highlight-pink">server</span>,<br />
            PHP's the back, my hustle is the <span className="highlight-pink">murder</span>."
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-category">
            <div className="tape-reel tape-reel-right"></div>
            <div className="category-header">
              <span className="category-icon">💻</span>
              <h3>FRONTEND</h3>
            </div>
            <div className="skill-list">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{ width: `${skill.level}%` }}
                      data-years={`${skill.years}yr${skill.years > 1 ? 's' : ''}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category">
            <div className="tape-reel tape-reel-right"></div>
            <div className="category-header">
              <span className="category-icon">⚙️</span>
              <h3>BACKEND</h3>
            </div>
            <div className="skill-list">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{ width: `${skill.level}%` }}
                      data-years={`${skill.years}yr${skill.years > 1 ? 's' : ''}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="skill-category">
            <div className="tape-reel tape-reel-right"></div>
            <div className="category-header">
              <span className="category-icon">🚀</span>
              <h3>DEVOPS</h3>
            </div>
            <div className="skill-list">
              {skills.devops.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{ width: `${skill.level}%` }}
                      data-years={`${skill.years}yr${skill.years > 1 ? 's' : ''}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design */}
          <div className="skill-category">
            <div className="tape-reel tape-reel-right"></div>
            <div className="category-header">
              <span className="category-icon">🎨</span>
              <h3>DESIGN</h3>
            </div>
            <div className="skill-list">
              {skills.design.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{ width: `${skill.level}%` }}
                      data-years={`${skill.years}yr${skill.years > 1 ? 's' : ''}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Management */}
          <div className="skill-category">
            <div className="tape-reel tape-reel-right"></div>
            <div className="category-header">
              <span className="category-icon">🎨</span>
              <h3>SOFTWARE ENGINEER</h3>
            </div>
            <div className="skill-list">
              {skills.software_engineer.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{ width: `${skill.level}%` }}
                      data-years={`${skill.years}yr${skill.years > 1 ? 's' : ''}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Project Management */}
          <div className="skill-category">
            <div className="tape-reel tape-reel-right"></div>
            <div className="category-header">
              <span className="category-icon">🎨</span>
              <h3>PROJECT MGMT.</h3>
            </div>
            <div className="skill-list">
              {skills.project_management.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{ width: `${skill.level}%` }}
                      data-years={`${skill.years}yr${skill.years > 1 ? 's' : ''}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* The Extras */}
        <div className="extras-section">
          <h3 className="extras-title">🎯 THE EXTRAS</h3>
          <div className="extras-grid">
            <div className="extra-card">
              <h4>Product Sales</h4>
              <p>Tap Me In • Net $1,000 in the first year from $0 while in college</p>
            </div>
            <div className="extra-card">
              <h4>Project Management</h4>
              <p>Managed over $900,000 in cybersecurity projects (NIST, HIPAA)</p>
            </div>
            <div className="extra-card">
              <h4>Hackathons</h4>
              <p>2x First Place Winner • Web Development (UI/UX Design and Implementation)</p>
            </div>
            <div className="extra-card">
              <h4>Self-Hosting</h4>
              <p>Manage homelab with multiple microservices, websites, and Discord bots</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
