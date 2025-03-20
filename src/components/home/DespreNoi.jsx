import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaLightbulb, FaHandshake, FaRocket, FaChartLine, FaUsers, FaGlobe, FaStar, FaClock } from 'react-icons/fa';
import teamImage from '../../images/office-lite.webp';

const DespreNoi = () => {
  const valori = [
    {
      icon: <FaLightbulb />,
      titlu: "Inovație",
      descriere: "Adoptăm cele mai noi tehnologii și metodologii din industrie"
    },
    {
      icon: <FaHandshake />,
      titlu: "Parteneriat",
      descriere: "Construim relații pe termen lung cu clienții noștri"
    },
    {
      icon: <FaRocket />,
      titlu: "Performanță",
      descriere: "Livrăm rezultate măsurabile și impact real"
    },
    {
      icon: <FaChartLine />,
      titlu: "Creștere",
      descriere: "Focus pe scalabilitate și dezvoltare continuă"
    }
  ];

  const rezultate = [
    {
      icon: <FaUsers />,
      cifra: "+100",
      text: "Clienți Activi",
      descriere: "La nivel global"
    },
    {
      icon: <FaGlobe />,
      cifra: "15+",
      text: "Țări Deservite",
      descriere: "Prezență internațională"
    },
    {
      icon: <FaStar />,
      cifra: "98%",
      text: "Satisfacție",
      descriere: "Feedback pozitiv"
    },
    {
      icon: <FaClock />,
      cifra: "6+",
      text: "Ani Experiență",
      descriere: "În digital marketing"
    }
  ];


  return (
    <>
      <Helmet>
        <title>Despre Lightning Digital - Agenție de Marketing Digital & Dezvoltare Web</title>
        <meta 
          name="description" 
          content="Cu peste 10 ani de experiență în industria digitală, Lightning Digital oferă servicii premium de marketing și dezvoltare web. Află povestea noastră și vezi cum putem ajuta afacerea ta să crească." 
        />
        <meta 
          name="keywords" 
          content="agenție digitală, marketing digital, dezvoltare web, expertiză digitală, agenție marketing, Lightning Digital" 
        />
      </Helmet>

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
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                      Cu o abordare inovatoare și o pasiune pentru excelență, 
                      transformăm provocările digitale în oportunități de creștere pentru afacerea ta.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      Suntem o echipă de experți pasionați de tehnologie și marketing digital, 
                      cu peste 10 ani de experiență în implementarea de soluții digitale complexe 
                      pentru companii din diverse industrii.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    {rezultate.map((rezultat, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-primary text-2xl mb-4">{rezultat.icon}</div>
                        <span className="block text-5xl font-bold text-gray-900 mb-2">{rezultat.cifra}</span>
                        <span className="text-gray-600 font-medium">{rezultat.text}</span>
                        <p className="text-sm text-gray-600">{rezultat.descriere}</p>
                      </motion.div>
                    ))}
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
                      alt="Echipa noastră de experți în marketing digital și dezvoltare web" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-12 -right-12 w-2/3">
                    <div className="bg-white rounded-2xl shadow-2xl p-8">
                      <div className="grid grid-cols-2 gap-8">
                        {valori.map((valoare, index) => (
                          <motion.div 
                            key={index} 
                            className="text-center"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="bg-primary/5 rounded-full w-12 h-12 flex items-center justify-center text-primary text-xl mx-auto mb-4">
                              {valoare.icon}
                            </div>
                            <h3 className="font-bold mb-2">{valoare.titlu}</h3>
                            <p className="text-sm text-gray-600">{valoare.descriere}</p>
                          </motion.div>
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
    </>
  );
};

export default DespreNoi;