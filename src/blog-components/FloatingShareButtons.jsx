import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaShareAlt } from 'react-icons/fa';

const FloatingShareButtons = ({ url, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 400;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed right-4 bottom-4 z-50"
        >
          <div className="relative">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <FaShareAlt size={20} />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-2 flex flex-col gap-2"
                >
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-sky-500 hover:bg-sky-50 rounded-full transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-green-600 hover:bg-green-50 rounded-full transition-colors"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingShareButtons;