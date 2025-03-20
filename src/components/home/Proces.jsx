import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLightbulb, FaSearchPlus, FaCogs, FaRocket, FaChartLine,
  FaArrowRight, FaCheck, FaPlay, FaPause
} from 'react-icons/fa';

const Proces = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  
  React.useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const steps = [
    {
      icon: <FaLightbulb />,
      title: "Analiză și Strategie",
      description: "Începem cu o analiză detaliată a afacerii tale, a pieței și a competiției.",
      details: [
        "Audit complet al prezenței digitale",
        "Analiza competitivă și de piață",
        "Identificarea oportunităților de creștere",
        "Definirea KPI-urilor și obiectivelor"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaSearchPlus />,
      title: "Cercetare și Planificare",
      description: "Efectuăm cercetări aprofundate pentru strategii eficiente și targetare precisă.",
      details: [
        "Cercetare cuvinte cheie",
        "Analiza comportamentului utilizatorilor",
        "Planificare content marketing",
        "Definirea strategiei de conversie"
      ],
      color: "from-primary to-blue-500"
    },
    {
      icon: <FaCogs />,
      title: "Implementare și Optimizare",
      description: "Implementăm strategiile folosind cele mai bune practici și tehnologii.",
      details: [
        "Dezvoltare website și landing pages",
        "Optimizare SEO on-page și off-page",
        "Implementare campanii PPC",
        "Creare și distribuire conținut"
      ],
      color: "from-blue-400 to-primary"
    },
    {
      icon: <FaRocket />,
      title: "Lansare și Scalare",
      description: "Lansăm campaniile și optimizăm constant pentru performanță maximă.",
      details: [
        "Testare A/B continuă",
        "Optimizare rata de conversie",
        "Scalare campanii performante",
        "Ajustare strategii în timp real"
      ],
      color: "from-primary to-blue-400"
    },
    {
      icon: <FaChartLine />,
      title: "Măsurare și Raportare",
      description: "Monitorizăm și analizăm constant rezultatele pentru îmbunătățire continuă.",
      details: [
        "Rapoarte personalizate lunare",
        "Analiză metrici cheie",
        "Recomandări de optimizare",
        "ROI și impact business"
      ],
      color: "from-blue-500 to-primary"
    }
  ];

  return (
    <section className="py-20 bg-[#F5F5F7] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/80" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-gray-100/40 bg-[size:60px_60px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Procesul Nostru
            <span className="block text-primary">
              De Implementare
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            O abordare metodică și transparentă pentru rezultate excepționale
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                className={`h-full bg-gradient-to-r ${steps[activeStep].color}`}
                initial={{ width: '0%' }}
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.button
                  key={index}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    activeStep === index 
                      ? 'bg-gradient-to-r ' + step.color + ' text-white shadow-lg' 
                      : 'bg-white hover:bg-gray-50 text-gray-600 shadow-sm'
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ x: 10 }}
                  animate={{
                    scale: activeStep === index ? 1.02 : 1,
                    opacity: activeStep === index ? 1 : 0.9
                  }}
                >
                  <div className="flex items-center">
                    <div className={`mr-4 p-2 rounded-lg ${
                      activeStep === index ? 'bg-white/20' : 'bg-primary/10'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <p className={`text-sm ${
                        activeStep === index ? 'text-white/90' : 'text-gray-500'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                    {activeStep === index && (
                      <FaArrowRight className="ml-auto animate-pulse" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Active Step Details */}
            <div className="relative h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 p-8 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} shadow-xl`}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-white/20 rounded-xl text-white">
                        {steps[activeStep].icon}
                      </div>
                      <span className="text-white/90 text-lg">
                        {activeStep + 1}/{steps.length}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {steps[activeStep].title}
                    </h3>
                    
                    <p className="text-white/90 mb-6">
                      {steps[activeStep].description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                      {steps[activeStep].details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <FaCheck className="text-white/90" />
                          <span className="text-white/90 text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-12 flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
              className="p-3 rounded-full bg-white text-gray-700 hover:bg-gray-50 shadow-md transition-colors"
            >
              <FaArrowRight className="transform rotate-180" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`p-3 rounded-full shadow-md ${
                isAutoPlay ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              } transition-colors`}
            >
              {isAutoPlay ? <FaPause /> : <FaPlay />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="p-3 rounded-full bg-white text-gray-700 hover:bg-gray-50 shadow-md transition-colors"
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proces;