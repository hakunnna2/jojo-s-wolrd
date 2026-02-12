import React from 'react';

interface InstallNotificationProps {
  onInstall: () => void;
  onClose: () => void;
}

const InstallNotification: React.FC<InstallNotificationProps> = ({ onInstall, onClose }) => (
  <div style={{
    position: 'fixed',
    bottom: 30,
    right: 30,
    background: 'rgba(30,30,30,0.98)',
    color: 'white',
    padding: '1.5rem 2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
    zIndex: 2000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minWidth: 260
  }}>
    <div style={{marginBottom: '1rem', fontWeight: 600, fontSize: '1.1rem'}}>Install Jojo's World?</div>
    <div style={{marginBottom: '1.2rem', fontSize: '0.95rem'}}>Get the full app experience by installing it on your device.</div>
    <div style={{display: 'flex', gap: '0.5rem'}}>
      <button onClick={onInstall} style={{background: '#e11d48', color: 'white', border: 'none', borderRadius: 6, padding: '0.5rem 1.2rem', fontWeight: 600, cursor: 'pointer'}}>Install</button>
      <button onClick={onClose} style={{background: 'transparent', color: '#fff', border: '1px solid #fff', borderRadius: 6, padding: '0.5rem 1.2rem', fontWeight: 500, cursor: 'pointer'}}>Maybe later</button>
    </div>
  </div>
);

export default InstallNotification;
