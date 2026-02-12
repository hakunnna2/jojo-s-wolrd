import React from 'react';

interface UpdateNotificationProps {
  onReload: () => void;
}

const UpdateNotification: React.FC<UpdateNotificationProps> = ({ onReload }) => (
  <div style={{
    position: 'fixed',
    bottom: 30,
    left: 30,
    background: 'rgba(30,30,30,0.98)',
    color: 'white',
    padding: '1.5rem 2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
    zIndex: 3000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minWidth: 260
  }}>
    <div style={{marginBottom: '1rem', fontWeight: 600, fontSize: '1.1rem'}}>New version available</div>
    <div style={{marginBottom: '1.2rem', fontSize: '0.95rem'}}>Click below to update and get the latest features.</div>
    <button onClick={onReload} style={{background: '#e11d48', color: 'white', border: 'none', borderRadius: 6, padding: '0.5rem 1.2rem', fontWeight: 600, cursor: 'pointer'}}>Update Now</button>
  </div>
);

export default UpdateNotification;
