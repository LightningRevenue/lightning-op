import React from 'react';

const ServiciiProces = () => {
  const steps = [
    {
      number: "01",
      title: "Analiză și Strategie",
      description: "Analizăm obiectivele tale și dezvoltăm o strategie personalizată pentru maximizarea rezultatelor."
    },
    {
      number: "02",
      title: "Planificare",
      description: "Creăm un plan de acțiune detaliat cu obiective măsurabile și termene clare."
    },
    {
      number: "03",
      title: "Implementare",
      description: "Punem în practică strategia folosind cele mai bune practici și tehnologii actuale."
    },
    {
      number: "04",
      title: "Optimizare",
      description: "Monitorizăm și optimizăm constant pentru a asigura cele mai bune rezultate."
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading text-4xl font-bold mb-8 leading-tight text-gray-900">
              Proces de Lucru
              <span className="block text-primary">Transparent și Eficient</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Metodologia noastră dovedită asigură rezultate excepționale 
              și o colaborare transparentă în fiecare etapă a proiectului.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="absolute -top-6 left-8">
                  <span className="inline-block bg-primary text-white text-4xl font-bold py-2 px-4 rounded-xl">
                    {step.number}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg 
                      className="w-8 h-8 text-primary" 
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
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 bg-white rounded-full p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Comunicare constantă</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Raportare săptămânală</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Suport dedicat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciiProces;