import { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPreviewUrl, setCurrentPreviewUrl] = useState('');

  const projects = [
    {
      title: 'AW Design & Foto',
      subtitle: 'Photography Portfolio — awdesignfoto.com',
      status: 'platinum',
      description: 'A portfolio built for a real photographer. The goal was simple: get out of the way and let the work land. Fast, clean, and built to handle scale.',
      tech: ['React', 'Cloudflare Pages + Workers', 'GitHub Actions', 'Resend', 'Turnstile'],
      achievements: ['📸 Real Photographer Client', '🖼️ 1,100+ Gallery Images', '🔄 Auto-Deployed', '✉️ Spam-Protected Contact'],
      liveUrl: 'https://awdesignfoto.com',
      previewUrl: 'https://awdesignfoto.com',
      githubUrl: null
    },
    {
      title: 'Lannay.com',
      subtitle: 'Freelance Portfolio — Brand Strategist Chloe Webb',
      status: 'platinum',
      description: "A freelance portfolio for brand strategist Chloe Webb. The ocean-depth concept mirrors her brand — layered, immersive, and built to pull people in. Behind it, a single Cloudflare Worker handles both asset delivery and API routing — no separate backend needed.",
      tech: ['React', 'Cloudflare Workers', 'GitHub Actions', 'Docker', 'Resend'],
      achievements: ['💼 Freelance Client', '☁️ Worker-Served SPA', '🐳 Dockerized Dev', '📧 Resend Email API'],
      liveUrl: 'https://lannay.com',
      previewUrl: 'https://lannay.com',
      githubUrl: null
    },
    {
      title: 'Harper and Lyre',
      subtitle: 'Professional Gaming Studio Site',
      status: 'platinum',
      description: 'A professional interactive website for an upcoming indie game studio. Full-stack development from design to deployment, showcasing their vision with smooth animations and responsive design.',
      tech: ['Node.js', 'Express', 'Handlebars', 'MySQL'],
      achievements: ['🎮 Real Gaming Studio Client', '🎨 Custom Interactive Design', '🔧 Ongoing Maintenance'],
      liveUrl: 'https://www.harperandlyre.com',
      previewUrl: 'https://www.harperandlyre.com',
      githubUrl: 'https://github.com/SamBunker/harperandlyre-website'
    },
    {
      title: 'AfterDark Quotes',
      subtitle: 'Scalable CMS Platform',
      status: 'gold',
      description: 'A scalable content management system with role-based access control, data analytics, and automated deployment infrastructure.',
      tech: ['Express', 'MySQL', 'Handlebars', 'Analytics'],
      achievements: ['📊 Real-time Analytics', '🔒 Role-Based Access', '📱 Mobile-First'],
      liveUrl: 'https://quotes.sambunker.com',
      previewUrl: 'https://quotes.sambunker.com',
      githubUrl: 'https://github.com/SamBunker/afterdark-quotes-website'
    },
    {
      title: 'Code Bunker',
      subtitle: 'Open-Source PHP-based Project Management System',
      status: 'gold',
      description: 'A comprehensive, enterprise-grade project management system designed to track and manage development projects securely.',
      tech: ['PHP', 'MySQL', 'JSON APIs', 'XAMPP'],
      achievements: ['📖 Open Source', '🔐 Custom Auth', '📋 Project Tracking', '🌐 Webhook Support', '❤️ Active Support'],
      liveUrl: null,
      githubUrl: 'https://github.com/SamBunker/code-bunker'
    },
    {
      title: 'Tap Me In',
      subtitle: 'NFC Business Cards',
      status: 'silver',
      description: 'Cultivated a small business around selling authored NFC-tappable business cards to students and enterprise companies.',
      tech: ['E-commerce', 'Marketing', 'Web Management'],
      achievements: ['💼 Small Business', '📱 NFC Tech', '💰 Sales'],
      liveUrl: 'https://www.tapmein.online/',
      previewUrl: 'https://www.tapmein.online/',
      githubUrl: null
    },
    {
      title: 'Hackathon 2023',
      subtitle: 'Non-Profit Website',
      status: 'trophy',
      description: 'Won 1st place in a Hackathon. Built a one-page website for a local non-profit using React components and rapid prototyping.',
      tech: ['React', 'Rapid Prototyping', 'UI/UX'],
      achievements: ['🏆 1st Place', '⚡ Built in 48hrs', '🎨 Clean Design'],
      liveUrl: null,
      githubUrl: 'https://github.com/SamBunker/Hackathon2023'
    },
    {
      title: 'RuneFeed',
      subtitle: 'Real-Time OSRS Grand Exchange Feed',
      status: 'creative',
      description: 'A real-time volume spike detection system for Old School RuneScape\'s Grand Exchange. Detects massive sell-offs, buy-ins, and price surges as they happen. Full-stack: polling server, WebSocket broadcast, CLI client on npm, and a live dashboard.',
      tech: ['TypeScript', 'Node.js', 'WebSocket', 'React', 'Docker'],
      achievements: ['📡 Live WebSocket Feed', '📦 Published on npm', '🔍 Spike Detection Engine', '📈 Prediction System'],
      liveUrl: 'https://runefeed.cc',
      previewUrl: 'https://runefeed.cc',
      githubUrl: 'https://github.com/SamBunker/runefeed'
    },
    {
      title: 'Graphic Design Portfolio',
      subtitle: 'Behance Showcase',
      status: 'creative',
      description: 'Professional graphic design work featuring UI/UX designs, visual communications, and street art photography.',
      tech: ['Photography', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
      achievements: ['📸 Street Art Photography', '✨ Creative Technologist', '🎨 Visual Storytelling'],
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

  const openPreview = (url) => {
    setCurrentPreviewUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentPreviewUrl('');
  };

  return (
    <section id="discography" className="projects-section section rap-sheet">
      {/* Vinyl Record Decorations */}
      <div className="vinyl-records" aria-hidden="true">
        {/* Left Vinyl - Higher on page */}
        <div className="vinyl-left">
          <svg viewBox="0 0 200 200" className="vinyl-svg">
            {/* Outer edge */}
            <circle cx="100" cy="100" r="95" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
            {/* Grooves */}
            <circle cx="100" cy="100" r="85" fill="none" stroke="#2a2a2a" strokeWidth="1" opacity="0.7"/>
            <circle cx="100" cy="100" r="75" fill="none" stroke="#2a2a2a" strokeWidth="1" opacity="0.7"/>
            <circle cx="100" cy="100" r="65" fill="none" stroke="#2a2a2a" strokeWidth="1" opacity="0.7"/>
            <circle cx="100" cy="100" r="55" fill="none" stroke="#2a2a2a" strokeWidth="1" opacity="0.7"/>
            {/* Label */}
            <circle cx="100" cy="100" r="40" fill="#4A90E2"/>
            <circle cx="100" cy="100" r="35" fill="none" stroke="#2E5C8A" strokeWidth="1"/>
            {/* Text - Top Line */}
            <text x="100" y="95" fill="#FFFFFF" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif" textAnchor="middle">
              HARPER AND
            </text>
            {/* Text - Bottom Line */}
            <text x="100" y="108" fill="#FFFFFF" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif" textAnchor="middle">
              LYRE
            </text>
            {/* Center hole */}
            <circle cx="100" cy="100" r="8" fill="#0a0a0a"/>
            {/* Shine effect */}
            <path d="M 60 60 Q 100 80 140 60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
          </svg>
        </div>

        {/* Right Vinyl - Lower on page */}
        <div className="vinyl-right">
          <svg viewBox="0 0 200 200" className="vinyl-svg">
            {/* Outer edge */}
            <circle cx="100" cy="100" r="95" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
            {/* Grooves */}
            <circle cx="100" cy="100" r="85" fill="none" stroke="#2a2a2a" strokeWidth="1" opacity="0.7"/>
            <circle cx="100" cy="100" r="75" fill="none" stroke="#2a2a2a" strokeWidth="1" opacity="0.7"/>
            <circle cx="100" cy="100" r="65" fill="none" stroke="#2a2a2a" strokeWidth="1" opacity="0.7"/>
            <circle cx="100" cy="100" r="55" fill="none" stroke="#2a2a2a" strokeWidth="1" opacity="0.7"/>
            {/* Label */}
            <circle cx="100" cy="100" r="40" fill="#FFA834"/>
            <circle cx="100" cy="100" r="35" fill="none" stroke="#CC8629" strokeWidth="1"/>
            {/* Center hole */}
            <circle cx="100" cy="100" r="8" fill="#0a0a0a"/>
            {/* Shine effect */}
            <path d="M 60 140 Q 100 120 140 140" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">THE DISCOGRAPHY</h2>
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
                  <span className="badge-icon icon-xs">{badge.icon}</span>
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
                  {project.previewUrl ? (
                    <button
                      onClick={() => openPreview(project.previewUrl)}
                      className="project-link live"
                    >
                      ▶ Play Live
                    </button>
                  ) : project.liveUrl && (
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

      {/* Preview Modal */}
      {modalOpen && (
        <div className="preview-modal" onClick={closeModal}>
          <div className="preview-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="preview-modal-close" onClick={closeModal}>
              ✕
            </button>
            <iframe
              src={currentPreviewUrl}
              className="preview-iframe"
              title="Project Preview"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
