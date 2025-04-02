import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const LimitedOfferBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Show bubble after 3 seconds if it hasn't been shown before
    const timer = setTimeout(() => {
      if (!hasBeenShown) {
        setIsOpen(true);
        setHasBeenShown(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasBeenShown]);

  return (
    <div className="fixed bottom-32 md:bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl mb-4 w-[320px]"
          >
            <div className="p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>

              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Ofertă Limitată - Până pe 31 Aprilie
              </span>

              <h3 className="text-xl font-bold mb-2">
                Website Gratuit pentru Afacerea Ta
              </h3>

              <p className="text-gray-600 text-sm mb-6">
                Obține un website profesional gratuit + 6 luni de găzduire gratuită! Ofertă disponibilă pentru primele 20 de afaceri.
              </p>

              <div className="space-y-3">
                <Link
                  to="/oferta-limitata"
                  className="flex items-center justify-between w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <span className="font-medium">Vezi Detalii Ofertă</span>
                  <FaArrowRight />
                </Link>

                <a
                  href="https://wa.me/40743959914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <span className="font-medium">Discută pe WhatsApp</span>
                  <FaWhatsapp />
                </a>

                <a
                  href="mailto:contact@lightning-revenue.com"
                  className="flex items-center justify-between w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <span className="font-medium">Trimite Email</span>
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <span className="font-medium">Website Gratuit - Află Mai Multe</span>
          <FaArrowRight />
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

export default LimitedOfferBubble;