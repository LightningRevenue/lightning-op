import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies in this session
    const hasAccepted = sessionStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setTimeout(() => {
        setIsVisible(true);
      }, 500);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-xl z-[9999] border-t-2 border-primary"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-gray-600 text-base">
                  Folosim cookie-uri pentru a-ți oferi cea mai bună experiență pe site-ul nostru.
                  Pentru mai multe detalii, citește{' '}
                  <Link to="/politica-cookie" className="text-primary hover:underline font-medium">
                    Politica Cookie
                  </Link>.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <button
                  onClick={handleAccept}
                  className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium min-w-[100px]"
                >
                  Accept
                </button>
                <Link
                  to="/politica-cookie"
                  className="px-6 py-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium min-w-[100px] text-center"
                >
                  Setări
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;