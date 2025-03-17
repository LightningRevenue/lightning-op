import React, { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimoniale = () => {
  const testimoniale = [
    {
      id: 1,
      nume: "Alexandru Popescu",
      companie: "Tech Solutions SRL",
      text: "Colaborarea cu Lightning Operational a fost o decizie excepțională pentru afacerea noastră. Noul nostru site web nu doar că arată incredibil, dar are și o rată de conversie cu 40% mai mare.",
      rating: 5
    },
    {
      id: 2,
      nume: "Maria Ionescu",
      companie: "Fashion Boutique",
      text: "Am ales Lightning Operational pentru prezența noastră pe social media și rezultatele au depășit toate așteptările. Echipa lor a creat o strategie care ne-a ajutat să ne creștem organic urmăritorii.",
      rating: 5
    },
    {
      id: 3,
      nume: "Cristian Dumitrescu",
      companie: "Restaurant Trattoria",
      text: "De când am început să lucrăm cu Lightning Operational pentru marketing digital și SEO local, rezervările noastre online au crescut cu 75%. Sunt profesioniști adevărați.",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimoniale.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimoniale.length - 1 : prevIndex - 1));
  };

  return (
    <section id="testimoniale" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
              Ce Spun 
              <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                Clienții Noștri
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Rezultate reale și experiențe autentice de la clienții care ne-au ales
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimoniale.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-[#F5F5F7] rounded-3xl p-12 md:p-16">
                      <div className="max-w-3xl mx-auto">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-8">
                            <span className="text-2xl font-bold text-primary">
                              {testimonial.nume.charAt(0)}
                            </span>
                          </div>
                          
                          <div className="flex gap-1 mb-8">
                            {[...Array(5)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                                size={24}
                              />
                            ))}
                          </div>

                          <FaQuoteLeft className="text-primary/20 text-6xl mb-8" />
                          
                          <p className="text-xl md:text-2xl text-gray-900 mb-8 leading-relaxed">
                            {testimonial.text}
                          </p>
                          
                          <div>
                            <h4 className="font-bold text-xl mb-2">{testimonial.nume}</h4>
                            <p className="text-primary">{testimonial.companie}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevSlide}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:scale-110 transition-transform"
              aria-label="Testimonial anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:scale-110 transition-transform"
              aria-label="Testimonial următor"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {testimoniale.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
                aria-label={`Mergi la testimonialul ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoniale;