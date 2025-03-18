import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaRocket, FaLightbulb } from 'react-icons/fa';

const NewsletterSubscribe = ({ variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    setIsSubscribed(true);
    setEmail('');
  };

  if (variant === 'minimal') {
    return (
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6">
        {isSubscribed ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center text-primary"
          >
            <FaRocket className="text-3xl mx-auto mb-2" />
            <p className="font-medium">
              Mulțumim pentru abonare! 🎉
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresa ta de email"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Abonare
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="text-center mb-8">
        <FaLightbulb className="text-4xl text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Nu Rata Noutățile!</h2>
        <p className="text-gray-600">
          Abonează-te la newsletter și primește cele mai noi articole și resurse direct în inbox.
        </p>
      </div>

      {isSubscribed ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center text-primary"
        >
          <FaRocket className="text-4xl mx-auto mb-4" />
          <p className="text-xl font-medium">
            Mulțumim pentru abonare! 🎉
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresa ta de email"
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white rounded-xl text-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <span>Mă Abonez</span>
            <FaRocket className="text-xl" />
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default NewsletterSubscribe;