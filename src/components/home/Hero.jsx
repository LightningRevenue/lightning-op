import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaAward, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  const seoTags = [
    "Marketing Digital",
    "Web Development",
    "SEO",
    "Social Media",
    "Branding",
    "E-commerce",
    "Google Ads",
    "UX/UI Design",
    "Content Marketing",
    "Cloud Services"
  ];

  const achievements = [
    {
      number: "200+",
      text: "Proiecte Finalizate"
    },
    {
      number: "98%",
      text: "Clienți Mulțumiți"
    },
    {
      number: "150%",
      text: "Creștere Medie"
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex justify-center gap-2">
              <FaAward className="text-primary text-3xl" />
              <span className="text-sm font-medium bg-primary/10 text-primary px-4 py-2 rounded-full">
                Top Agentie Digitala 2025
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
              Transformăm <br />
              <span className="bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                Viziunea Digitală
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Creăm experiențe digitale excepționale care inspiră, 
              inovează și transformă afaceri prin strategii integrate de marketing și tehnologie.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.text}</div>
                </div>
              ))}
            </div>

            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {seoTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium hover:bg-white hover:shadow-md transition-all cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-12 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="#servicii" 
                  className="group flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  Explorează serviciile
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Contactează-ne
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FaCheckCircle className="text-primary" />
                <span className="text-sm">Consultație inițială gratuită</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;