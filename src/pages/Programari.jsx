import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaCalendarAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const Programari = () => {
  const [selectedType, setSelectedType] = useState('consultanta');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    type: 'programare',
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const meetingTypes = [
    {
      id: 'consultanta',
      title: 'Consultanță Gratuită',
      duration: 30,
      icon: <FaVideo />,
      description: 'Discuție inițială pentru a înțelege nevoile afacerii tale'
    },
    {
      id: 'audit',
      title: 'Audit Digital',
      duration: 45,
      icon: <FaCalendarAlt />,
      description: 'Analiză completă a prezenței tale online'
    },
    {
      id: 'demo',
      title: 'Demo Servicii',
      duration: 30,
      icon: <FaPhoneAlt />,
      description: 'Prezentare detaliată a serviciilor noastre'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          status: 'new', // Changed from 'programare' to 'new' to match enum
          subject: `Programare: ${meetingTypes.find(t => t.id === selectedType)?.title}`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          type: 'programare',
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Programează o Consultație | LightningRevenue"
        description="Programează o consultație gratuită cu experții noștri în marketing digital și dezvoltare web. Află cum putem ajuta afacerea ta să crească online."
        keywords="consultație marketing digital, programare întâlnire, consultanță SEO, audit digital gratuit"
        canonical="https://www.lightning-revenue.ro/programari"
      />
      <SchemaOrg 
        type="Service"
        name="Consultații Lightning-Revenue"
        description="Servicii de consultanță în marketing digital și dezvoltare web"
      />
      <Header />
      
      <main className="min-h-screen">
        <section className="pt-32 pb-20 bg-[#F5F5F7]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center max-w-4xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
                  Programează o
                  <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    Consultație Gratuită
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Discută cu experții noștri și află cum putem accelera creșterea afacerii tale în mediul online
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {meetingTypes.map((type, index) => (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                      selectedType === type.id ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <div className={`text-4xl mb-4 ${selectedType === type.id ? 'text-primary' : 'text-gray-400'}`}>
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <FaClock />
                      <span>{type.duration} minute</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {type.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {!isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                >
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Completează Detaliile Tale</h2>
                    <p className="text-gray-600">Te vom contacta în cel mai scurt timp posibil</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nume Complet
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Companie
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mesaj (Opțional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      ></textarea>
                    </div>

                    <div className="text-center pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-blue-600 rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Se trimite...' : 'Trimite Cererea'}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-3xl p-12 shadow-lg max-w-2xl mx-auto text-center"
                >
                  <div className="text-5xl text-green-500 mb-4">✓</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Mulțumim pentru solicitare!</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Te-am adăugat în agenda noastră. 
                    Un agent va lua legătura cu dumneavoastră în cel mai scurt timp posibil pentru stabilirea detaliilor întâlnirii.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex justify-center px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Programează altă întâlnire
                  </button>
                </motion.div>
              )}

              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-gray-500">
                  Ai întrebări? Contactează-ne la{' '}
                  <a 
                    href="mailto:contact@lightning-revenue.com" 
                    className="text-primary hover:underline"
                  >
                    contact@lightning-revenue.com
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Programari;