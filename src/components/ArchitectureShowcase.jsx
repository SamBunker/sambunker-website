import '../styles/ArchitectureShowcase.css';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { projectArchitectures } from '../data/architectureData';
import { getSpecialIcon } from './ArchitectureIcons';

// ============================================================================
// CASSETTE CARD COMPONENT - 90s Hip-Hop Style
// ============================================================================

const CassetteCard = ({ project, isSelected, isAnimating, isEjecting, onClick }) => {
  const { cassetteColor } = project;

  return (
    <div
      className={`cassette-card ${isSelected ? 'selected' : ''} ${isAnimating ? 'animating' : ''} ${isEjecting ? 'ejecting' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      style={{
        '--cassette-primary': cassetteColor.primary,
        '--cassette-secondary': cassetteColor.secondary,
        '--cassette-border': cassetteColor.border,
        '--cassette-text': cassetteColor.textColor
      }}
    >
      {/* Cassette Label */}
      <div className="cassette-label">
        <div className="cassette-icon">{project.icon}</div>
        <div className="cassette-title">{project.name.toUpperCase()}</div>
      </div>

      {/* Magnetic Tape Window */}
      <div className="cassette-tape-window">
        <div className="tape-reel left">
          <div className="reel-center"></div>
        </div>
        <div className="tape-strip"></div>
        <div className="tape-reel right">
          <div className="reel-center"></div>
        </div>
      </div>

      {/* Cassette Screws */}
      <div className="cassette-screw top-left"></div>
      <div className="cassette-screw top-right"></div>
      <div className="cassette-screw bottom-left"></div>
      <div className="cassette-screw bottom-right"></div>
    </div>
  );
};

CassetteCard.propTypes = {
  project: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
  isAnimating: PropTypes.bool,
  isEjecting: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

// ============================================================================
// BOOM BOX COMPONENT - BumpBoxx Inspired
// ============================================================================

const BoomBox = ({ selectedProject, isPlaying, onEject, onViewBlueprint }) => {
  return (
    <div className={`boom-box ${isPlaying ? 'playing' : ''}`}>
      {/* LCD Display */}
      <div className="boom-box-display">
        <div className="lcd-content">
          {isPlaying && selectedProject ? (
            <>
              <span className="rec-indicator">● REC</span>
              <span className="now-playing">NOW PLAYING: {selectedProject.name.toUpperCase()}</span>
              <div className="lcd-buttons">
                <button
                  className="view-blueprint-btn"
                  onClick={onViewBlueprint}
                  aria-label="View blueprint"
                >
                  📋 VIEW
                </button>
                <button
                  className="eject-btn"
                  onClick={onEject}
                  aria-label="Eject cassette"
                >
                  ⏏️ EJECT
                </button>
              </div>
            </>
          ) : (
            <span className="waiting-text">🎵 INSERT TAPE TO PLAY 🎵</span>
          )}
        </div>
      </div>

      {/* Cassette Slot */}
      <div className="boom-box-slot">
        <div className="slot-opening">
          {isPlaying && selectedProject && (
            <div className="cassette-in-slot">
              <div className="mini-cassette-icon">{selectedProject.icon}</div>
              <div className="mini-cassette-label">{selectedProject.name}</div>
            </div>
          )}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="boom-box-controls">
        <button className={`control-btn ${isPlaying ? 'active' : ''}`} aria-label="Play" disabled>⏯️</button>
        <button className="control-btn" aria-label="Stop" disabled>⏹️</button>
        <button className="control-btn" aria-label="Forward" disabled>⏭️</button>
        <button className="control-btn" aria-label="Shuffle" disabled>🔀</button>
        <button className="control-btn" aria-label="Volume" disabled>🔊</button>
      </div>

      {/* Speakers */}
      <div className="boom-box-speakers">
        <div className="speaker left-speaker">
          <div className="speaker-grille">
            <div className="speaker-cone"></div>
          </div>
          {isPlaying && <div className="sound-wave left">(((</div>}
          {isPlaying && <div className="sound-wave right">)))</div>}
        </div>

        {/* Logo Label */}
        <div className="boom-box-logo">
          <img src="/img/logo-white.webp" alt="SB" className="boombox-logo-img" />
        </div>



        <div className="speaker right-speaker">
          <div className="speaker-grille">
            <div className="speaker-cone"></div>
          </div>
          {isPlaying && <div className="sound-wave left">(((</div>}
          {isPlaying && <div className="sound-wave right">)))</div>}
        </div>
      </div>

      {/* Gold Trim */}
      <div className="boom-box-trim top-trim"></div>
      <div className="boom-box-trim bottom-trim"></div>
    </div>
  );
};

BoomBox.propTypes = {
  selectedProject: PropTypes.object,
  isPlaying: PropTypes.bool,
  onEject: PropTypes.func.isRequired,
  onViewBlueprint: PropTypes.func,
};

// ============================================================================
// FLOW NODE COMPONENT (Kept from original)
// ============================================================================

const FlowNode = ({ node, isActive, onClick, showConnector }) => {
  return (
    <div className="flow-node-wrapper">
      <div
        className={`flow-node ${isActive ? 'active' : ''}`}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
      >
        <div className="flow-node-icon">
          {getSpecialIcon(node.label, node.type, 45)}
        </div>
        <div className="flow-node-label">{node.label}</div>
        {node.port && <div className="flow-node-port">:{node.port}</div>}
      </div>
      {showConnector && (
        <div className="flow-connector">
          <div className="flow-arrow">→</div>
        </div>
      )}
    </div>
  );
};

FlowNode.propTypes = {
  node: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  showConnector: PropTypes.bool,
};

// ============================================================================
// ARCHITECTURE FLOW MODAL COMPONENT
// ============================================================================

const ArchitectureFlowModal = ({ project, flowRows, activeNode, setActiveNode, onClose }) => {
  if (!project) return null;

  return (
    <div className="architecture-modal-overlay" onClick={onClose}>
      <div className="architecture-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-icon">{project.icon}</div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>

        <div className="modal-flow-container">
          {flowRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flow-row">
              <div className="flow-row-label">{row.label}</div>
              <div className="flow-nodes">
                {row.nodes.map((node, nodeIndex) => (
                  <FlowNode
                    key={node.id}
                    node={node}
                    isActive={activeNode?.id === node.id}
                    onClick={() => setActiveNode(node)}
                    showConnector={nodeIndex < row.nodes.length - 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="modal-hint">
          💡 Click any component to see details
        </div>
      </div>
    </div>
  );
};

ArchitectureFlowModal.propTypes = {
  project: PropTypes.object,
  flowRows: PropTypes.array.isRequired,
  activeNode: PropTypes.object,
  setActiveNode: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

// ============================================================================
// INFO MODAL COMPONENT (Kept from original)
// ============================================================================

const InfoModal = ({ node, onClose }) => {
  if (!node) return null;

  return (
    <div className="info-modal-overlay" onClick={onClose}>
      <div className="info-modal" onClick={(e) => e.stopPropagation()}>
        <button className="info-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="info-header">
          <div className="info-icon">
            {getSpecialIcon(node.label, node.type, 70)}
          </div>
          <h3>{node.label}</h3>
          {node.port && <code className="info-port-badge">Port: {node.port}</code>}
        </div>

        <div className="info-content">
          {node.details && (
            <div className="info-section">
              <strong>DETAILS</strong>
              <p>{node.details}</p>
            </div>
          )}

          {node.tech && (
            <div className="info-section">
              <strong>TECH</strong>
              <code>{node.tech}</code>
            </div>
          )}

          {node.config && (
            <div className="info-section">
              <strong>CONFIG</strong>
              <p>{node.config}</p>
            </div>
          )}

          {node.tables && (
            <div className="info-section">
              <strong>TABLES</strong>
              <div className="info-tags">
                {node.tables.map((table, i) => (
                  <span key={i} className="info-tag">{table}</span>
                ))}
              </div>
            </div>
          )}

          {node.connections && (
            <div className="info-section">
              <strong>FEATURES</strong>
              <ul>
                {node.connections.map((conn, i) => (
                  <li key={i}>{conn}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

InfoModal.propTypes = {
  node: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

// ============================================================================
// MAIN SHOWCASE COMPONENT
// ============================================================================

const ArchitectureShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isEjecting, setIsEjecting] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  const [showFlowModal, setShowFlowModal] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showFlowModal || activeNode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showFlowModal, activeNode]);

  // Build flow path from connections
  const buildFlowPath = (project) => {
    if (!project) return [];

    const flowRows = [];
    const processedNodes = new Set();

    const startNode = project.nodes.find(n => n.type === 'user') || project.nodes[0];
    const mainFlow = [];
    let currentNode = startNode;

    while (currentNode && !processedNodes.has(currentNode.id)) {
      mainFlow.push(currentNode);
      processedNodes.add(currentNode.id);

      const nextConn = project.connections.find(c => c.from === currentNode.id);
      if (nextConn) {
        currentNode = project.nodes.find(n => n.id === nextConn.to);
      } else {
        break;
      }
    }

    if (mainFlow.length > 0) {
      flowRows.push({ label: 'Main Flow', nodes: mainFlow });
    }

    const cicdNodes = project.nodes.filter(n =>
      n.type === 'cicd' && !processedNodes.has(n.id)
    );
    if (cicdNodes.length > 0) {
      flowRows.push({ label: 'CI/CD Pipeline', nodes: cicdNodes });
    }

    const serviceNodes = project.nodes.filter(n =>
      (n.type === 'service' || n.type === 'database') && !processedNodes.has(n.id)
    );
    if (serviceNodes.length > 0) {
      flowRows.push({ label: 'Additional Services', nodes: serviceNodes });
    }

    return flowRows;
  };

  // Handle cassette insertion
  const handleCassetteClick = async (project) => {
    if (isAnimating || isEjecting || (isPlaying && selectedProject?.id === project.id)) return;

    // If switching tapes, eject first
    if (isPlaying && selectedProject) {
      setIsEjecting(true);
      setIsPlaying(false);
      // Wait for eject animation to mostly complete (0.8s for smoother transition)
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsEjecting(false);
    }

    // Insert new cassette
    setIsAnimating(true);
    setSelectedProject(project);
    // Wait for insert animation (1.2s)
    await new Promise(resolve => setTimeout(resolve, 1200));

    setIsPlaying(true);
    setIsAnimating(false);

    // Open modal after animation completes
    setTimeout(() => {
      setShowFlowModal(true);
    }, 300);
  };

  // Handle eject button
  const handleEject = async () => {
    if (isAnimating || isEjecting) return;

    setIsEjecting(true);
    setIsPlaying(false);

    // Wait for eject animation (1.2s)
    await new Promise(resolve => setTimeout(resolve, 1200));

    setSelectedProject(null);
    setIsEjecting(false);
  };

  const flowRows = selectedProject ? buildFlowPath(selectedProject) : [];

  return (
    <section id="architecture" className="architecture-showcase section rap-sheet">
      <div className="container">
        <h2 className="section-title">// THE BUNK-BOX \\</h2>
        <p className="section-subtitle">"Pick a Tape to See How It Works"</p>
        <p className="section-description">
          Click on any cassette to see the tech blueprint and stack for that project.
          Each diagram shows how the frontend, backend, APIs, and databases connect.
        </p>

        {/* Boom Box */}
        <BoomBox
          selectedProject={selectedProject}
          isPlaying={isPlaying}
          onEject={handleEject}
          onViewBlueprint={() => setShowFlowModal(true)}
        />

        {/* Cassette Collection */}
        <div className="cassette-collection">
          {projectArchitectures.map((project) => (
            <CassetteCard
              key={project.id}
              project={project}
              isSelected={selectedProject?.id === project.id}
              isAnimating={isAnimating && selectedProject?.id === project.id}
              isEjecting={isEjecting && selectedProject?.id === project.id}
              onClick={() => handleCassetteClick(project)}
            />
          ))}
        </div>

        <div className="flow-hint">
          👆 Insert a cassette to see the blueprint
        </div>

        {/* Architecture Flow Modal */}
        {showFlowModal && selectedProject && (
          <ArchitectureFlowModal
            project={selectedProject}
            flowRows={flowRows}
            activeNode={activeNode}
            setActiveNode={setActiveNode}
            onClose={() => setShowFlowModal(false)}
          />
        )}

        {/* Info Modal */}
        <InfoModal node={activeNode} onClose={() => setActiveNode(null)} />
      </div>
    </section>
  );
};

export default ArchitectureShowcase;
