import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaChartBar, FaRobot, FaHeadset, FaBrain, FaChartLine, FaLock, FaCheckCircle } from 'react-icons/fa';
import { BsFillCloudCheckFill } from 'react-icons/bs';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import WaitlistConfirmation from '../components/regular/WaitlistConfirmation';

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    teamSize: '',
    currentCRM: '',
    industry: '',
    useCase: '',
    callVolume: '',
    integrations: []
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const newIntegrations = checked
        ? [...formData.integrations, value]
        : formData.integrations.filter(item => item !== value);
      setFormData(prev => ({
        ...prev,
        integrations: newIntegrations
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/waitlist/sales-intelligence', {
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
          teamSize: '',
          currentCRM: '',
          industry: '',
          useCase: '',
          callVolume: '',
          integrations: []
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
      icon: <FaPhoneAlt className="text-4xl text-blue-600" />,
      title: "Inteligență în Apeluri",
      description: "Analiza în timp real a convorbirilor cu transcripție instantanee și sugestii contextuale pentru agenți."
    },
    {
      icon: <FaChartBar className="text-4xl text-green-600" />,
      title: "Analitice Avansate",
      description: "Dashboard-uri detaliate pentru KPI-uri, rate de conversie și performanța echipei de vânzări."
    },
    {
      icon: <FaRobot className="text-4xl text-purple-600" />,
      title: "AI Assistant",
      description: "Asistent AI pentru pregătirea apelurilor, analiza sentimentului și recomandări personalizate."
    }
  ];

  const technologies = [
    {
      icon: <FaBrain className="text-3xl text-indigo-600" />,
      title: "Natural Language Processing",
      description: "Procesare avansată a limbajului natural pentru înțelegerea contextului și intenției."
    },
    {
      icon: <FaHeadset className="text-3xl text-orange-600" />,
      title: "Voice Analytics",
      description: "Analiza tonalității vocii, a ritmului și a altor parametri pentru optimizarea conversațiilor."
    },
    {
      icon: <FaChartLine className="text-3xl text-red-600" />,
      title: "Predictive Analytics",
      description: "Algoritmi de predicție pentru identificarea oportunităților de vânzare și a riscurilor."
    },
    {
      icon: <BsFillCloudCheckFill className="text-3xl text-cyan-600" />,
      title: "Cloud Integration",
      description: "Integrare perfectă cu sisteme CRM și alte instrumente de vânzări prin API-uri securizate."
    },
    {
      icon: <FaLock className="text-3xl text-gray-600" />,
      title: "Securitate Enterprise",
      description: "Criptare end-to-end și conformitate cu GDPR pentru protecția datelor sensibile."
    }
  ];

  return (
    <>
      <SEO 
        title="Lightning Sales Intelligence | Lista de Așteptare"
        description="Înscrie-te pe lista de așteptare pentru Lightning Sales Intelligence - platforma modernă de management și analiză a apelurilor de vânzări, powered by AI."
        keywords="sales intelligence, management apeluri, analytics vanzari, AI sales, transcriptie automata, voice analytics"
        canonical="https://www.lightningrevenue.ro/sales-intelligence"
      />
      <SchemaOrg 
        type="Product"
        name="Lightning Sales Intelligence"
        description="Platformă modernă de management și analiză a apelurilor de vânzări, cu inteligență artificială"
      />
      <Header />
      
      <main className="min-h-screen">
        <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center max-w-4xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  Revoluționează
                  <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    Procesul Tău de Vânzări cu AI
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  Alătură-te listei de așteptare pentru a descoperi viitorul vânzărilor bazate pe inteligență artificială. 
                  Transformă fiecare apel într-o oportunitate de succes.
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

              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Tehnologii Avansate</h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-md text-center"
                    >
                      <div className="mb-4">{tech.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {!isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-3xl p-8 shadow-lg max-w-3xl mx-auto"
                >
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Înscrie-te pe Lista de Așteptare</h2>
                    <p className="text-gray-600">Fii primul care va avea acces la Lightning Sales Intelligence</p>
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                          Industrie
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        >
                          <option value="">Selectează</option>
                          <option value="IT/Software">IT/Software</option>
                          <option value="Retail">Retail</option>
                          <option value="Manufacturing">Producție</option>
                          <option value="Healthcare">Sănătate</option>
                          <option value="Financial">Financiar</option>
                          <option value="Real Estate">Imobiliare</option>
                          <option value="Education">Educație</option>
                          <option value="Other">Altele</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mărimea Echipei de Vânzări
                        </label>
                        <select
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        >
                          <option value="">Selectează</option>
                          <option value="1-5">1-5 agenți</option>
                          <option value="6-20">6-20 agenți</option>
                          <option value="21-50">21-50 agenți</option>
                          <option value="51+">51+ agenți</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Volum Lunar de Apeluri
                        </label>
                        <select
                          name="callVolume"
                          value={formData.callVolume}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        >
                          <option value="">Selectează</option>
                          <option value="100">Sub 100 apeluri</option>
                          <option value="500">100-500 apeluri</option>
                          <option value="1000">501-1000 apeluri</option>
                          <option value="5000">1001-5000 apeluri</option>
                          <option value="5000+">Peste 5000 apeluri</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ce soluție folosești în prezent?
                      </label>
                      <input
                        type="text"
                        name="currentCRM"
                        value={formData.currentCRM}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Ex: Hubspot, Salesforce, RingCentral, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Integrări necesare
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {['Salesforce', 'HubSpot', 'Microsoft Teams', 'Slack', 'Zoom', 'Google Meet'].map((integration) => (
                          <div key={integration} className="flex items-center">
                            <input
                              type="checkbox"
                              id={integration}
                              name="integrations"
                              value={integration}
                              checked={formData.integrations.includes(integration)}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                            />
                            <label htmlFor={integration} className="ml-2 text-sm text-gray-700">
                              {integration}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cum plănuiești să folosești platforma?
                      </label>
                      <textarea
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Descrie scenariile specifice de utilizare și provocările pe care dorești să le rezolvi."
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
              ) : (
                <WaitlistConfirmation 
                  productName="Lightning Sales Intelligence"
                  onBackClick={() => setIsSubmitted(false)}
                  description=" Vei fi printre primii care vor avea acces la platforma noastră de Sales Intelligence powered by AI."
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

export default Waitlist;