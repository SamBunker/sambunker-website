import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-terminal">
          <div className="terminal-output">
            <span className="terminal-prompt">&gt; samuel@bunker:~$</span>
            <span className="terminal-command">cat intro.txt</span>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-verse verse">
            <p>"Yo, check the <span className="highlight-yellow">method</span>,<br />
            Code and rhymes <span className="highlight-yellow">connected</span>,<br />
            Bunker on the <span className="highlight-orange">boards</span>,<br />
            Keeping us <span className="highlight-yellow">perfected</span>."</p>
          </div>

          <h1 className="hero-title">SAMUEL J. BUNKER</h1>
          <p className="hero-subtitle">
            Full-Stack Developer • Hip-Hop Head • Problem Solver
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('discography')}
            >
              View The Works
            </button>
            <button
              className="btn btn-gold"
              onClick={() => scrollToSection('resume')}
            >
              View Resume
            </button>
          </div>

          <div className="hero-tech-stack">
            <span>React</span>
            <span className="divider">•</span>
            <span>Node.js</span>
            <span className="divider">•</span>
            <span>PHP</span>
            <span className="divider">•</span>
            <span>Python</span>
            <span className="divider">•</span>
            <span>Boom-Bap Soul</span>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll down - see the story unfold</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
