import React from 'react';
import { motion } from 'framer-motion';

const Rezultate = () => {
  const rezultate = [
    {
      id: 1,
      cifra: "50+",
      text: "Proiecte Finalizate",
      descriere: "Pentru afaceri locale"
    },
    {
      id: 2,
      cifra: "25%",
      text: "Creștere Conversii",
      descriere: "În medie pentru clienții noștri"
    },
    {
      id: 3,
      cifra: "15+",
      text: "Clienți Mulțumiți",
      descriere: "Colaborări de lungă durată"
    },
    {
      id: 4,
      cifra: "2x",
      text: "Trafic Organic",
      descriere: "Creștere în 6 luni"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Rezultate Concrete pentru
              <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                Afaceri ca a Ta
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Creștem împreună cu clienții noștri, focusându-ne pe rezultate măsurabile
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {rezultate.map((rezultat) => (
              <motion.div
                key={rezultat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: rezultat.id * 0.1 }}
                className="text-center p-6"
              >
                <div className="font-bold text-4xl md:text-5xl text-primary mb-4">
                  {rezultat.cifra}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {rezultat.text}
                </h3>
                <p className="text-gray-600">
                  {rezultat.descriere}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rezultate;