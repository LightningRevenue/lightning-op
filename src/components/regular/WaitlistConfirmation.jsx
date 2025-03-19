import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const WaitlistConfirmation = ({ productName, onBackClick, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl p-12 shadow-lg max-w-2xl mx-auto text-center"
    >
      <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Mulțumim pentru înscriere!</h2>
      <p className="text-xl text-gray-600 mb-8">
        Te-am adăugat pe lista de așteptare și vei fi printre primii care vor avea acces la {productName}.
        {description}
      </p>
      <button
        onClick={onBackClick}
        className="text-primary hover:text-primary/80 font-medium"
      >
        ← Înapoi la formular
      </button>
    </motion.div>
  );
};

export default WaitlistConfirmation;