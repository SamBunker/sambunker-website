import '../styles/Hero.css';
import meImage from '../assets/images/me.webp';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Photo */}
      <div className="hero-photo-background">
        <img src={meImage} alt="Samuel Bunker" className="hero-photo" />
      </div>

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
            Full-Stack Developer • Problem Solver • Hip-Hop Head
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
            <span>UI/UX</span>
            <span className="divider">•</span>
            <span>Docker</span>
            <span className="divider">•</span>
            <span>GitOps</span>
            <span className="divider">•</span>
            <span>DevOps</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll down - see the story unfold</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;
