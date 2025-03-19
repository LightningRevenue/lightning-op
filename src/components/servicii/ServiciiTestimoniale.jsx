import React, { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const ServiciiTestimoniale = () => {
  const categorii = [
    "Toate",
    "Dezvoltare Web",
    "SEO",
    "Marketing Digital",
    "Social Media"
  ];

  const testimoniale = [
    {
      id: 1,
      nume: "Alexandru Popescu",
      pozitie: "CEO",
      companie: "Tech Solutions SRL",
      text: "Dezvoltarea platformei noastre e-commerce cu Lightning Operational a fost o decizie strategică excelentă. Performanța site-ului și experiența utilizatorilor s-au îmbunătățit semnificativ.",
      imagine: "/testimoniale/alexandru-p.jpg",
      rating: 5,
      categorie: "Dezvoltare Web",
      rezultate: ["Viteză: < 2s", "Conversii: +150%", "Uptime: 99.9%"]
    },
    {
      id: 2,
      nume: "Maria Ionescu",
      pozitie: "Marketing Manager",
      companie: "Fashion Boutique",
      text: "Strategia SEO implementată de echipa Lightning a adus rezultate remarcabile. Traficul organic și pozițiile în Google s-au îmbunătățit conform targetelor stabilite.",
      imagine: "/testimoniale/maria-i.jpg",
      rating: 5,
      categorie: "SEO",
      rezultate: ["Trafic: +150%", "Top 3: 80% keywords", "ROI: 3.5x"]
    },
    {
      id: 3,
      nume: "Cristian Dumitrescu",
      pozitie: "Director Marketing",
      companie: "Restaurant Trattoria",
      text: "Campaniile de marketing digital au transformat complet prezența noastră online. ROI-ul a depășit așteptările, iar baza de clienți continuă să crească.",
      imagine: "/testimoniale/cristian-d.jpg",
      rating: 5,
      categorie: "Marketing Digital",
      rezultate: ["ROAS: 3.5x", "CPL: -40%", "Conversii: +150%"]
    },
    {
      id: 4,
      nume: "Elena Radu",
      pozitie: "Brand Manager",
      companie: "EcoStyle",
      text: "Prezența noastră pe social media s-a transformat complet. Engagement-ul a crescut spectaculos, iar comunitatea noastră este mai activă ca niciodată.",
      imagine: "/testimoniale/elena-r.jpg",
      rating: 5,
      categorie: "Social Media",
      rezultate: ["Reach: +150%", "Engagement: +120%", "ROI: 3.5x"]
    }
  ];

  const [categorieCurenta, setCategorieCurenta] = useState("Toate");
  const [indexCurent, setIndexCurent] = useState(0);

  const testimonialeFiltered = categorieCurenta === "Toate" 
    ? testimoniale 
    : testimoniale.filter(t => t.categorie === categorieCurenta);

  const nextSlide = () => {
    setIndexCurent((prev) => 
      prev === testimonialeFiltered.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndexCurent((prev) => 
      prev === 0 ? testimonialeFiltered.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-[#F5F5F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
              Rezultate Reale,
              <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                Clienți Mulțumiți
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Descoperă poveștile de succes ale clienților noștri și rezultatele 
              concrete obținute prin serviciile noastre.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categorii.map((categorie) => (
              <button
                key={categorie}
                onClick={() => {
                  setCategorieCurenta(categorie);
                  setIndexCurent(0);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${categorieCurenta === categorie
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {categorie}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-out"
                   style={{ transform: `translateX(-${indexCurent * 100}%)` }}>
                {testimonialeFiltered.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                      <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className="md:w-1/3">
                            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-6">
                              {/* Placeholder pentru imagine */}
                              <div className="w-full h-full flex items-center justify-center bg-primary/5">
                                <span className="text-4xl font-bold text-primary">
                                  {testimonial.nume.charAt(0)}
                                </span>
                              </div>
                            </div>
                            <div className="text-center md:text-left">
                              <h4 className="font-bold text-xl mb-1">{testimonial.nume}</h4>
                              <p className="text-gray-600 mb-1">{testimonial.pozitie}</p>
                              <p className="text-primary font-medium">{testimonial.companie}</p>
                            </div>
                          </div>

                          <div className="md:w-2/3">
                            <div className="flex gap-1 mb-6">
                              {[...Array(5)].map((_, i) => (
                                <FaStar
                                  key={i}
                                  className={i < testimonial.rating ? "text-yellow-400" : "text-gray-200"}
                                  size={24}
                                />
                              ))}
                            </div>

                            <FaQuoteLeft className="text-primary/20 text-4xl mb-6" />

                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                              {testimonial.text}
                            </p>

                            <div className="grid grid-cols-3 gap-4">
                              {testimonial.rezultate.map((rezultat, idx) => (
                                <div
                                  key={idx}
                                  className="bg-primary/5 rounded-xl p-4 text-center"
                                >
                                  <span className="text-primary font-medium">
                                    {rezultat}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {testimonialeFiltered.length > 1 && (
              <>
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
              </>
            )}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonialeFiltered.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndexCurent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === indexCurent ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciiTestimoniale;