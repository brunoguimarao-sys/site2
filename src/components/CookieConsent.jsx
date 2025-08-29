import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined'); // Or handle as per your policy
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 bg-card text-card-foreground p-4 shadow-lg z-50 border-t border-border"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-left">
              Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. Ao continuar, você concorda com nossa política de privacidade.
            </p>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button onClick={handleAccept} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Aceitar
              </Button>
              <Button onClick={handleDecline} variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Recusar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
