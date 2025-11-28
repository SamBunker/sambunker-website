// SVG Icons for Architecture Nodes

export const UserIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill="#4A90E2"/>
    <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" fill="#4A90E2"/>
  </svg>
);

export const ApplicationIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#87CEEB"/>
    <rect x="2" y="4" width="20" height="4" rx="2" fill="#6BB6E8"/>
    <circle cx="5" cy="6" r="0.5" fill="#fff"/>
    <circle cx="7" cy="6" r="0.5" fill="#fff"/>
    <circle cx="9" cy="6" r="0.5" fill="#fff"/>
    <rect x="6" y="12" width="4" height="1.5" rx="0.5" fill="#6BB6E8"/>
    <rect x="6" y="15" width="8" height="1.5" rx="0.5" fill="#6BB6E8"/>
  </svg>
);

export const DatabaseIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#FFA834"/>
    <rect x="4" y="6" width="16" height="12" fill="#FFA834"/>
    <ellipse cx="12" cy="12" rx="8" ry="3" fill="#E89624"/>
    <ellipse cx="12" cy="18" rx="8" ry="3" fill="#FFA834"/>
  </svg>
);

export const ServiceIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="4" fill="#2E5C8A"/>
    <rect x="11" y="2" width="2" height="4" rx="1" fill="#2E5C8A"/>
    <rect x="11" y="18" width="2" height="4" rx="1" fill="#2E5C8A"/>
    <rect x="18" y="11" width="4" height="2" rx="1" fill="#2E5C8A"/>
    <rect x="2" y="11" width="4" height="2" rx="1" fill="#2E5C8A"/>
    <rect x="17" y="3.5" width="2" height="4" rx="1" fill="#2E5C8A" transform="rotate(45 18 5.5)"/>
    <rect x="5" y="16.5" width="2" height="4" rx="1" fill="#2E5C8A" transform="rotate(45 6 18.5)"/>
    <rect x="16.5" y="17" width="2" height="4" rx="1" fill="#2E5C8A" transform="rotate(-45 17.5 19)"/>
    <rect x="4.5" y="5" width="2" height="4" rx="1" fill="#2E5C8A" transform="rotate(-45 5.5 7)"/>
  </svg>
);

export const CloudIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M18.5 16H7c-2.485 0-4.5-2.015-4.5-4.5S4.515 7 7 7c.356-2.586 2.581-4.5 5.25-4.5 2.67 0 4.895 1.914 5.25 4.5 2.347 0 4.25 1.903 4.25 4.25S20.847 16 18.5 16z" fill="#A52A2A"/>
  </svg>
);

export const DockerIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="8" width="3" height="3" fill="#2496ED"/>
    <rect x="6" y="8" width="3" height="3" fill="#2496ED"/>
    <rect x="10" y="8" width="3" height="3" fill="#2496ED"/>
    <rect x="6" y="5" width="3" height="3" fill="#2496ED"/>
    <rect x="10" y="5" width="3" height="3" fill="#2496ED"/>
    <rect x="14" y="8" width="3" height="3" fill="#2496ED"/>
    <path d="M17 11c2 0 4 .5 5 2s0 3-1 3H2c-1 0-1-2 0-3s3-2 5-2z" fill="#2496ED"/>
  </svg>
);

export const NginxIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" fill="#009639"/>
    <path d="M8 8v8l8-8v8" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const RouterIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="12" width="18" height="8" rx="2" fill="#2F2F2F"/>
    <circle cx="7" cy="16" r="1" fill="#00FF00"/>
    <circle cx="11" cy="16" r="1" fill="#00FF00"/>
    <circle cx="15" cy="16" r="1" fill="#FFA834"/>
    <path d="M8 12V9c0-2.209 1.791-4 4-4s4 1.791 4 4v3" fill="none" stroke="#666" strokeWidth="2"/>
    <circle cx="10" cy="7" r="0.8" fill="#666"/>
    <circle cx="14" cy="7" r="0.8" fill="#666"/>
  </svg>
);

export const GitHubIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#333"/>
  </svg>
);

export const CICDIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="9" width="6" height="6" rx="1" fill="#FF6B35"/>
    <rect x="16" y="9" width="6" height="6" rx="1" fill="#FF6B35"/>
    <circle cx="12" cy="12" r="2" fill="#FF6B35"/>
    <rect x="8" y="11.5" width="2" height="1" fill="#FF6B35"/>
    <rect x="14" y="11.5" width="2" height="1" fill="#FF6B35"/>
    <path d="M5 9V6l2-2 2 2v3M19 9V6l-2-2-2 2v3" fill="#FF6B35"/>
  </svg>
);

export const PortainerIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#13BEF9"/>
    <rect x="11" y="6" width="2" height="12" rx="1" fill="#fff"/>
    <rect x="6" y="11" width="12" height="2" rx="1" fill="#fff"/>
    <circle cx="12" cy="12" r="2.5" fill="#fff"/>
  </svg>
);

export const DiscordIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#5865F2"/>
  </svg>
);

export const DynamoDBIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 6v12l9 4 9-4V6l-9-4z" fill="#527FFF"/>
    <path d="M12 2L3 6l9 4 9-4-9-4z" fill="#6B9FFF"/>
    <path d="M12 14L3 10v8l9 4v-8z" fill="#4169E1"/>
    <path d="M12 14l9-4v8l-9 4v-8z" fill="#5A8FFF"/>
  </svg>
);

// Icon mapper
export const getNodeIcon = (type, size = 40) => {
  switch (type) {
    case 'user':
      return <UserIcon size={size} />;
    case 'application':
      return <ApplicationIcon size={size} />;
    case 'database':
      return <DatabaseIcon size={size} />;
    case 'service':
      return <ServiceIcon size={size} />;
    case 'external':
      return <CloudIcon size={size} />;
    case 'infrastructure':
      return <DockerIcon size={size} />;
    case 'cicd':
      return <CICDIcon size={size} />;
    default:
      return <ApplicationIcon size={size} />;
  }
};

// Special icons for specific nodes
export const getSpecialIcon = (label, type, size = 40) => {
  const lowerLabel = label.toLowerCase();

  if (lowerLabel.includes('nginx')) return <NginxIcon size={size} />;
  if (lowerLabel.includes('router')) return <RouterIcon size={size} />;
  if (lowerLabel.includes('github')) return <GitHubIcon size={size} />;
  if (lowerLabel.includes('portainer')) return <PortainerIcon size={size} />;
  if (lowerLabel.includes('discord')) return <DiscordIcon size={size} />;
  if (lowerLabel.includes('dynamodb') || lowerLabel.includes('dynamo')) return <DynamoDBIcon size={size} />;
  if (lowerLabel.includes('docker')) return <DockerIcon size={size} />;

  return getNodeIcon(type, size);
};
