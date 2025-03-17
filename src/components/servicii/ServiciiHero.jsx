import React from 'react';
import { FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';

const ServiciiHero = () => {
  const beneficii = [
    {
      icon: <FaRocket />,
      title: "Expertiza Dovedită",
      description: "Peste 200 de proiecte livrate cu succes"
    },
    {
      icon: <FaChartLine />,
      title: "Rezultate Măsurabile",
      description: "Creștere medie de 150% în vizibilitate"
    },
    {
      icon: <FaUsers />,
      title: "Suport Dedicat",
      description: "Echipă specializată la dispoziția ta"
    }
  ];

  return (
    <section className="relative py-32 bg-white text-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Servicii Premium pentru
              <span className="block bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
                Succes Digital
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              De la strategie la implementare, oferim soluții complete de marketing digital și dezvoltare web pentru creșterea și scalarea afacerii tale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {beneficii.map((beneficiu, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 shadow-sm"
              >
                <div className="text-primary text-3xl mb-6">
                  {beneficiu.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {beneficiu.title}
                </h3>
                <p className="text-gray-600">
                  {beneficiu.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 rounded-full text-lg font-medium transition-all duration-300 text-white"
            >
              Solicită o Consultație Gratuită
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciiHero;