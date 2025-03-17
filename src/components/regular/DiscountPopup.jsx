import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenDiscountPopup');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenDiscountPopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative transform transition-all duration-300 scale-100">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes />
        </button>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-2">Ofertă Specială</h3>
          <div className="text-5xl font-bold text-dark my-4">-20%</div>
          <p className="text-gray-600 mb-4">
            Programează o întâlnire astăzi și beneficiezi de 20% reducere la primele 3 luni de servicii!
          </p>
          <a
            href="/#contact"
            onClick={handleClose}
            className="btn btn-primary w-full"
          >
            Programează Întâlnirea
          </a>
          <p className="text-sm text-gray-400 mt-4">
            *Ofertă valabilă pentru contractele noi
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;