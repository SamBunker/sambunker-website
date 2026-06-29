import '../styles/Skills.css';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'HTML5', years: 6, level: 95 },
      { name: 'CSS3', years: 6, level: 95 },
      { name: 'JavaScript', years: 6, level: 95 },
      { name: 'React', years: 3, level: 50 },
      { name: 'Bootstrap', years: 4, level: 65 },
      { name: 'jQuery', years: 3, level: 50 },
      { name: 'Vite', years: 3, level: 50 },
      { name: 'Twig', years: 1, level: 20 },
    ],
    backend: [
      { name: 'PHP', years: 5, level: 80 },
      { name: 'MySQL', years: 6, level: 95 },
      { name: 'Node.js', years: 4, level: 65 },
      { name: 'Express.js', years: 4, level: 65 },
      { name: 'Python', years: 4, level: 65 },
      { name: 'RESTful API', years: 5, level: 80 },
      { name: 'Drupal 10', years: 1, level: 20 },
    ],
    devops: [
      { name: 'Git/GitHub', years: 6, level: 95 },
      { name: 'Docker', years: 3, level: 50 },
      { name: 'CI/CD (GitHub Actions)', years: 3, level: 50 },
      { name: 'Cloud Hosting (CF, Render)', years: 1, level: 20 },
      { name: 'Linux', years: 3, level: 50 },
      { name: 'Apache', years: 4, level: 65 },
      { name: 'Bash', years: 3, level: 50 },
    ],
    design: [
      { name: 'Figma', years: 4, level: 80 },
      { name: 'Adobe XD', years: 3, level: 80 },
      { name: 'UI/UX Design', years: 5, level: 80 },
      { name: 'Wireframing', years: 4, level: 80 },
      { name: 'Responsive Design', years: 5, level: 90 },
      { name: 'Accessibility', years: 3, level: 60 }
    ],
    design: [
      { name: 'UI/UX Design', years: 5, level: 80 },
      { name: 'Responsive Design', years: 5, level: 80 },
      { name: 'Figma', years: 4, level: 65 },
      { name: 'Adobe XD', years: 3, level: 50 },
      { name: 'Wireframing', years: 4, level: 65 },
      { name: 'Accessibility (WCAG)', years: 3, level: 50 },
    ],
    software_engineer: [
      { name: 'Object-Oriented Programming (OOP)', years: 4, level: 65 },
      { name: 'Clean Code Practices', years: 4, level: 65 },
      { name: 'Software Architecture Principles', years: 3, level: 50 },
      { name: 'API Design & Integration', years: 3, level: 50 },
      { name: 'Code Review & Collaboration', years: 3, level: 50 },
      { name: 'Java', years: 2, level: 35 },
    ],
    project_management: [
      { name: 'Agile / Scrum Methodology', years: 3, level: 50 },
      { name: 'Waterfall Methodology', years: 3, level: 50 },
      { name: 'Risk Management', years: 2, level: 35 },
      { name: 'Trello', years: 3, level: 50 },
      { name: 'Jira', years: 3, level: 50 },
    ],
    ai: [
      { name: 'Prompt Engineering', years: 2, level: 35 },
      { name: 'AI Agents', years: 3, level: 50 },
      { name: 'MCP Servers', years: 2, level: 35 },
      { name: 'Structured Deployment', years: 3, level: 50 },
      { name: 'LLM Integration', years: 2, level: 35 },
      { name: 'Local LLM Deployment', years: 2, level: 35 },
    ],
  };

  return (
    <section id="arsenal" className="skills-section section">
      <div className="container">
        <h2 className="section-title">THE SKILL SET</h2>
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

          {/* Software Engineering */}
          <div className="skill-category">
            <div className="tape-reel tape-reel-right"></div>
            <div className="category-header">
              <span className="category-icon">🛠️</span>
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
              <span className="category-icon">📋</span>
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

          {/* ML & LLM — last */}
          <div className="skill-category">
            <div className="tape-reel tape-reel-right"></div>
            <div className="category-header">
              <span className="category-icon">🤖</span>
              <h3>ML & LLM</h3>
            </div>
            <div className="skill-list">
              {skills.ai.map((skill, index) => (
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
              <h4>Cooperative Web Dev</h4>
              <p>Custom Drupal 10 modules and enhancements on SHiNE, serving hundreds of cooperative member sites</p>
            </div>
            <div className="extra-card">
              <h4>Project Management</h4>
              <p>Managed 78 cybersecurity projects valued at $900K+ with a 98.7% on-time, under-budget delivery rate</p>
            </div>
            <div className="extra-card">
              <h4>Hackathons</h4>
              <p>2x First Place Winner • Built and shipped full websites in under 48 hours</p>
            </div>
            <div className="extra-card">
              <h4>Self-Hosting</h4>
              <p>Homelab running containerized microservices, personal websites, and Discord bots via Docker and self-hosted infrastructure</p>
            </div>
            <div className="extra-card">
              <h4>Product Sales</h4>
              <p>Tap Me In • Grew from $0 to $1,000 net in the first year selling NFC business cards while in college</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
