import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Harper and Lyre',
      subtitle: 'Professional Gaming Studio Site',
      status: 'platinum',
      description: 'A professional interactive website for an upcoming indie game studio, optimized for speed, accessibility, and SEO. Validated through Lighthouse with a 99 Performance score.',
      tech: ['React', 'Node.js', 'Handlebars', 'Express'],
      achievements: ['⚡ 99 Performance', '🎯 95+ All Categories', '🚀 Optimized SEO'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AfterDark Quotes',
      subtitle: 'Scalable CMS Platform',
      status: 'gold',
      description: 'A scalable content management system with role-based access control, data analytics, and automated deployment infrastructure.',
      tech: ['Express', 'MySQL', 'Handlebars', 'Analytics'],
      achievements: ['📊 Real-time Analytics', '🔒 Role-Based Access', '📱 Mobile-First'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Code Bunker',
      subtitle: 'Project Management System',
      status: 'gold',
      description: 'A comprehensive, enterprise-grade project management system designed to track and manage development projects securely.',
      tech: ['PHP', 'MySQL', 'JSON APIs', 'XAMPP'],
      achievements: ['🔐 Custom Auth', '📋 Project Tracking', '🌐 Web APIs'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Tap Me In',
      subtitle: 'NFC Business Cards',
      status: 'silver',
      description: 'Cultivated a small business around selling authored NFC-tappable business cards to students and enterprise companies.',
      tech: ['E-commerce', 'Marketing', 'Web Management'],
      achievements: ['💼 Small Business', '📱 NFC Tech', '💰 Sales'],
      liveUrl: 'https://www.tapmein.online',
      githubUrl: null
    },
    {
      title: 'Hackathon 2023',
      subtitle: 'Non-Profit Website',
      status: 'trophy',
      description: 'Won 1st place in a Hackathon. Built a one-page website for a local non-profit using React components and rapid prototyping.',
      tech: ['React', 'Rapid Prototyping', 'UI/UX'],
      achievements: ['🏆 1st Place', '⚡ Built in 24hrs', '🎨 Clean Design'],
      liveUrl: null,
      githubUrl: '#'
    },
    {
      title: 'Graphic Design Portfolio',
      subtitle: 'Behance Showcase',
      status: 'creative',
      description: 'Professional graphic design work showcasing UI/UX designs, branding, and visual communications.',
      tech: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
      achievements: ['🎨 UI/UX Design', '🖼️ Branding', '✨ Visual Design'],
      liveUrl: 'https://behance.net/samuelbunker',
      githubUrl: null
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      platinum: { icon: '💎', label: 'PLATINUM HIT', class: 'platinum' },
      gold: { icon: '🥇', label: 'GOLD RELEASE', class: 'gold' },
      silver: { icon: '🥈', label: 'SILVER TRACK', class: 'silver' },
      trophy: { icon: '🏆', label: 'AWARD WINNER', class: 'trophy' },
      creative: { icon: '🎨', label: 'CREATIVE WORK', class: 'creative' }
    };
    return badges[status] || badges.gold;
  };

  return (
    <section id="discography" className="projects-section section rap-sheet">
      <div className="container">
        <h2 className="section-title">// THE DISCOGRAPHY \\</h2>
        <p className="section-subtitle">"Projects Dropped Like Albums"</p>

        {/* Opening Verse */}
        <div className="verse">
          <p>
            "Dropped more projects than mixtapes in the <span className="highlight-orange">summer</span>,<br />
            Each one crafted, ain't no wonder I'm a <span className="highlight-orange">comer</span>,<br />
            From Harper to Quotes, the portfolio's <span className="highlight-green">stacked</span>,<br />
            Every build optimized, every deploy on <span className="highlight-green">track</span>."
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => {
            const badge = getStatusBadge(project.status);
            return (
              <div key={index} className={`project-card ${badge.class}`}>
                <div className="project-status-badge">
                  <span className="badge-icon">{badge.icon}</span>
                  <span className="badge-label">{badge.label}</span>
                </div>

                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-achievements">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="achievement-badge">{achievement}</div>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      ▶ Play Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      {'</>'} Code
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View More */}
        <div className="view-more">
          <a
            href="https://github.com/SamBunker"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            🎧 View Full Discography on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
