import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CollapsibleSection = ({ id, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 prose prose-lg">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CollapsibleSection;