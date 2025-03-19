import React from 'react';
import { FaLaptopCode, FaSearchPlus, FaChartLine, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Servicii = () => {
  const servicii = [
    {
      id: 1,
      icon: <FaLaptopCode className="text-4xl" />,
      titlu: "Dezvoltare Web",
      descriere: "Site-uri și aplicații web optimizate pentru performanță",
      link: "/dezvoltare-web"
    },
    {
      id: 2,
      icon: <FaSearchPlus className="text-4xl" />,
      titlu: "Optimizare SEO",
      descriere: "Strategii pentru vizibilitate maximă în căutări",
      link: "/optimizare-seo"
    },
    {
      id: 3,
      icon: <FaChartLine className="text-4xl" />,
      titlu: "Marketing Digital",
      descriere: "Campanii personalizate pentru rezultate măsurabile",
      link: "/marketing-digital"
    },
    {
      id: 4,
      icon: <FaInstagram className="text-4xl" />,
      titlu: "Social Media",
      descriere: "Prezență puternică pe rețelele sociale",
      link: "/social-media"
    }
  ];

  return (
    <section id="servicii" className="py-32 bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
              Servicii Premium pentru 
              <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                Creșterea Afacerii Tale
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Oferim soluții digitale complete, adaptate nevoilor tale specifice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicii.map((serviciu, index) => (
              <motion.div 
                key={serviciu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-12 hover:shadow-2xl transition-all duration-500 ease-out"
              >
                <motion.div 
                  className="bg-primary/5 rounded-2xl w-16 h-16 flex items-center justify-center text-primary mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {serviciu.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{serviciu.titlu}</h3>
                <p className="text-gray-600 mb-8">{serviciu.descriere}</p>
                <Link 
                  to={serviciu.link}
                  className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                >
                  Află mai multe
                  <svg 
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/servicii" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
            >
              Vezi toate serviciile
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
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Servicii;