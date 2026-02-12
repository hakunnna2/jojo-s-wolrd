
import React, { useEffect, useState } from 'react';
import StarBackground from './components/StarBackground';
import Hero from './components/Hero';
import Universe from './components/Universe';
import ScrollToTop from './components/ScrollToTop';
import InstallNotification from './components/InstallNotification';
import UpdateNotification from './components/UpdateNotification';

const App: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [notificationClosed, setNotificationClosed] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  // Listen for service worker updates
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
      navigator.serviceWorker.getRegistration().then(reg => {
        if (!reg) return;
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setWaitingWorker(newWorker);
                setUpdateAvailable(true);
              }
            });
          }
        });
      });
    }
  }, []);

  const handleUpdate = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  };

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstall(false);
      setDeferredPrompt(null);
    }
  };

  const handleNotificationClose = () => {
    setShowInstall(false);
    setNotificationClosed(true);
  };

  return (
    <div className="relative w-full min-h-screen group bg-black text-white selection:bg-pink-500/30">
      {updateAvailable && (
        <UpdateNotification onReload={handleUpdate} />
      )}
      {showInstall && !notificationClosed && (
        <InstallNotification onInstall={handleInstallClick} onClose={handleNotificationClose} />
      )}
      <StarBackground />
      <main className="relative z-10">
        <Hero />
        <Universe />
      </main>
      <ScrollToTop />
      {/* Cinematic Vignette */}
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-20"></div>
    </div>
  );
};

export default App;
