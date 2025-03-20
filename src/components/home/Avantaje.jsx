import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers, FaCogs, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const Avantaje = () => {
  const advantages = [
    {
      icon: <FaRocket />,
      title: "Expertiză Dovedită",
      description: "Cu peste 200 de proiecte finalizate cu succes, echipa noastră de experți în marketing digital și dezvoltare web oferă soluții personalizate care generează rezultate măsurabile pentru afacerea ta."
    },
    {
      icon: <FaChartLine />,
      title: "Strategii Bazate pe Date",
      description: "Utilizăm tehnologii avansate de analiză și instrumente profesionale pentru a dezvolta strategii de marketing digital optimizate constant pentru maximizarea ROI-ului tău."
    },
    {
      icon: <FaUsers />,
      title: "Echipă Dedicată",
      description: "Beneficiezi de o echipă completă de specialiști în SEO, programatori, designeri UX/UI și experți în marketing digital, toți dedicați succesului proiectului tău."
    },
    {
      icon: <FaCogs />,
      title: "Soluții Integrate",
      description: "Oferim servicii complete de marketing online, de la dezvoltare web și optimizare SEO până la campanii PPC și social media marketing, toate aliniate cu obiectivele tale de business."
    },
    {
      icon: <FaHeadset />,
      title: "Suport Premium",
      description: "Asigurăm suport tehnic continuu și consultanță strategică, cu timp de răspuns rapid și asistență personalizată pentru toate serviciile noastre digitale."
    },
    {
      icon: <FaShieldAlt />,
      title: "Rezultate Garantate",
      description: "Ne angajăm să livrăm rezultate concrete și măsurabile, cu focus pe creșterea vizibilității online, generarea de leaduri și maximizarea conversiilor."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              De Ce Să Alegi
              <span className="block text-primary">Lightning Revenue</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Suntem partenerul tău strategic în transformarea digitală, oferind servicii premium 
              de marketing digital și dezvoltare web care duc afacerea ta la următorul nivel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-primary text-3xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avantaje;