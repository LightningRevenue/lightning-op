import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaAws, FaGoogle, FaMicrosoft, FaWordpress, FaShopify,
  FaNode, FaPython, FaPhp, FaDocker, FaStripe, FaHubspot
} from 'react-icons/fa';

const TechnologiesPartners = () => {
  const technologies = [
    {
      icon: <FaReact className="text-[#61DAFB]" />,
      name: "React",
      category: "Frontend"
    },
    {
      icon: <FaNode className="text-[#68A063]" />,
      name: "Node.js",
      category: "Backend"
    },
    {
      icon: <FaPython className="text-[#3776AB]" />,
      name: "Python",
      category: "Backend"
    },
    {
      icon: <FaPhp className="text-[#777BB4]" />,
      name: "PHP",
      category: "Backend"
    },
    {
      icon: <FaWordpress className="text-[#21759B]" />,
      name: "WordPress",
      category: "CMS"
    },
    {
      icon: <FaDocker className="text-[#2496ED]" />,
      name: "Docker",
      category: "DevOps"
    }
  ];

  const partners = [
    {
      icon: <FaGoogle className="text-[#4285F4]" />,
      name: "Google Cloud",
      description: "Partner Google for Startups"
    },
    {
      icon: <FaMicrosoft className="text-[#00A4EF]" />,
      name: "Microsoft",
      description: "Microsoft for Startups Founder Hub"
    },
    {
      icon: <FaAws className="text-[#FF9900]" />,
      name: "Amazon AWS",
      description: "AWS Partner Network Member"
    },
    {
      icon: <FaHubspot className="text-[#FF7A59]" />,
      name: "HubSpot",
      description: "Solutions Partner"
    },
    {
      icon: <FaStripe className="text-[#635BFF]" />,
      name: "Stripe",
      description: "Verified Partner"
    },
    {
      icon: <FaShopify className="text-[#7AB55C]" />,
      name: "Shopify",
      description: "Development Partner"
    }
  ];

  return (
    <section className="py-24 bg-white">
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
              Stack Tehnologic și
              <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                Parteneriate Strategice
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Utilizăm tehnologii de ultimă generație și beneficiem de parteneriate strategice 
              cu lideri globali în tehnologie pentru a livra soluții la cel mai înalt nivel.
            </p>
          </motion.div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12">Stack Tehnologic</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all"
                >
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h4 className="font-bold mb-1">{tech.name}</h4>
                  <span className="text-sm text-gray-600">{tech.category}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-12">Parteneriate Strategice</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all"
                >
                  <div className="text-4xl">{partner.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{partner.name}</h4>
                    <p className="text-sm text-gray-600">{partner.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesPartners;