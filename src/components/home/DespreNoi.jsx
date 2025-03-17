import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaRocket, FaChartLine } from 'react-icons/fa';
import teamImage from '../../images/office-lite.webp';

const DespreNoi = () => {
  const valori = [
    {
      icon: <FaLightbulb />,
      titlu: "Inovație",
      descriere: "Adoptăm cele mai noi tehnologii"
    },
    {
      icon: <FaHandshake />,
      titlu: "Parteneriat",
      descriere: "Creștem împreună cu clienții"
    },
    {
      icon: <FaRocket />,
      titlu: "Performanță",
      descriere: "Rezultate măsurabile"
    },
    {
      icon: <FaChartLine />,
      titlu: "Creștere",
      descriere: "Strategii de dezvoltare"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-12">
                <div className="">
                  <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
                    Expertiza Digitală la 
                    <span className="block text-primary">Cel Mai Înalt Nivel</span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Cu o abordare inovatoare și o pasiune pentru excelență, 
                    transformăm provocările digitale în oportunități de creștere pentru afacerea ta.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-5xl font-bold text-gray-900 mb-2">100+</span>
                    <span className="text-gray-600">Clienți mulțumiți</span>
                  </div>
                  <div>
                    <span className="block text-5xl font-bold text-gray-900 mb-2">200+</span>
                    <span className="text-gray-600">Proiecte finalizate</span>
                  </div>
                  <div>
                    <span className="block text-5xl font-bold text-gray-900 mb-2">5+</span>
                    <span className="text-gray-600">Ani de experiență</span>
                  </div>
                  <div>
                    <span className="block text-5xl font-bold text-gray-900 mb-2">15+</span>
                    <span className="text-gray-600">Experți dedicați</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative">
                <div className="aspect-square bg-[#F5F5F7] rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  <img 
                    src={teamImage} 
                    alt="Echipa noastră de experți" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-12 -right-12 w-2/3">
                  <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {valori.map((valoare, index) => (
                        <div key={index} className="text-center">
                          <div className="bg-primary/5 rounded-full w-12 h-12 flex items-center justify-center text-primary text-xl mx-auto mb-4">
                            {valoare.icon}
                          </div>
                          <h3 className="font-bold mb-2">{valoare.titlu}</h3>
                          <p className="text-sm text-gray-600">{valoare.descriere}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DespreNoi;