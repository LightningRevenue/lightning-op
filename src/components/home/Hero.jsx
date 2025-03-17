import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const seoTags = [
    "Marketing Digital",
    "Web Development",
    "SEO",
    "Social Media",
    "Branding",
    "E-commerce"
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
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
              Transformăm <br />
              <span className="bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                Viziunea Digitală
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Creăm experiențe digitale excepționale care inspiră, 
              inovează și transformă afaceri.
            </p>

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
          </motion.div>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;