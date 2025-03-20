import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaRocket, FaCog, FaCheckCircle } from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import WaitlistConfirmation from '../components/regular/WaitlistConfirmation';

const CRMWaitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/waitlist/crm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          employees: '',
          message: ''
        });
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const features = [
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Automatizare Relații Clienți",
      description: "Management complet al relațiilor cu clienții, automatizări inteligente și pipeline-uri de vânzări personalizabile."
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "Analiză în Timp Real",
      description: "Dashboard-uri interactive și rapoarte personalizate pentru monitorizarea KPI-urilor esențiale."
    },
    {
      icon: <FaCog className="text-4xl text-purple-600" />,
      title: "Integrări Multiple",
      description: "Conectare cu platformele tale favorite de email, marketing, facturare și multe altele."
    }
  ];

  return (
    <>
      <SEO 
        title="Lightning-Revenue CRM Waitlist | Sistem CRM Modern pentru Afaceri"
        description="Înscrie-te pe lista de așteptare pentru Lightning-Revenue CRM - sistemul CRM personalizat pentru optimizarea relației cu clienții și creșterea vânzărilor."
        keywords="CRM, sistem management clienti, automatizare vanzari, pipeline management, dashboard business"
        canonical="https://www.lightning-revenue.com/crm-waitlist"
      />
      <SchemaOrg 
        type="Product"
        name="LightningCRM"
        description="Sistem CRM modern pentru managementul și automatizarea relațiilor cu clienții"
      />
      <Header />
      
      <main className="min-h-screen">
        <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {!isSubmitted ? (
                <>
                  <motion.div 
                    className="text-center max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                      Viitorul Managementului
                      <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                        Relațiilor cu Clienții
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-12">
                      Alătură-te listei de așteptare pentru a fi primul care experimentează 
                      noul nostru sistem CRM, construit pentru afacerile moderne.
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-lg"
                      >
                        <div className="mb-6">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl p-8 shadow-lg max-w-3xl mx-auto"
                  >
                    <div className="mb-8 text-center">
                      <h2 className="text-2xl font-bold mb-4">Înscrie-te pe Lista de Așteptare</h2>
                      <p className="text-gray-600">Fii printre primii care vor avea acces la LightningCRM</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                            Companie
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
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
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Număr Angajați
                        </label>
                        <select
                          name="employees"
                          value={formData.employees}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        >
                          <option value="">Selectează</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201+">201+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ce funcționalități te interesează cel mai mult?
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
                          className="inline-flex justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-blue-600 rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
                        >
                          Înscrie-te pe Lista de Așteptare
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </>
              ) : (
                <WaitlistConfirmation 
                  productName="LightningCRM"
                  onBackClick={() => setIsSubmitted(false)}
                  description=" Te vom contacta în curând cu mai multe detalii despre sistemul nostru CRM modern."
                />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CRMWaitlist;