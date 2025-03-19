import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaFacebook, FaHubspot, FaShopify, FaWordpress, FaAws } from 'react-icons/fa';

const Expertiza = () => {
  const expertize = [
    {
      id: 1,
      icon: <FaGoogle />,
      titlu: "Google Certified Partner",
      descriere: "Certificați în Google Ads, Analytics și Marketing Digital"
    },
    {
      id: 2,
      icon: <FaFacebook />,
      titlu: "Meta Business Partner",
      descriere: "Experți certificați în Facebook & Instagram Ads"
    },
    {
      id: 3,
      icon: <FaHubspot />,
      titlu: "HubSpot Partner",
      descriere: "Certificați în Marketing Automation și CRM"
    },
    {
      id: 4,
      icon: <FaShopify />,
      titlu: "Shopify Partner",
      descriere: "Experți în dezvoltare e-commerce"
    },
    {
      id: 5,
      icon: <FaWordpress />,
      titlu: "WordPress Expert",
      descriere: "Dezvoltatori certificați WordPress"
    },
    {
      id: 6,
      icon: <FaAws />,
      titlu: "AWS Certified",
      descriere: "Experți în cloud computing și securitate"
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
            Expertiză Certificată
            <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
              în Tehnologii de Top
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Investim constant în dezvoltarea echipei și certificări pentru a oferi 
            cele mai bune soluții clienților noștri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {expertize.map((expertiza, index) => (
            <motion.div
              key={expertiza.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl text-primary mb-6">{expertiza.icon}</div>
              <h3 className="text-xl font-bold mb-3">{expertiza.titlu}</h3>
              <p className="text-gray-600">{expertiza.descriere}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertiza;