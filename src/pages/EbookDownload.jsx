import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaDownload, FaCheck, FaChartLine, FaSearch, FaUsers, FaShieldAlt, FaMobile, FaQuestionCircle } from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const EbookDownload = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
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
      const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/waitlist/ebook', {
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
          company: ''
        });
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const ebookFeatures = [
    'Evaluarea prezenței tale digitale actuale',
    'Identificarea oportunităților de digitalizare',
    'Implementarea instrumentelor potrivite',
    'Automatizarea proceselor cheie',
    'Măsurarea și optimizarea rezultatelor'
  ];

  const businessBenefits = [
    {
      icon: <FaSearch className="text-3xl text-primary" />,
      title: 'Vizibilitate Online 24/7',
      description: 'Crește vizibilitatea afacerii tale și atrage clienți noi în timp ce dormi. 87% dintre cumpărători încep procesul de căutare online.'
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-600" />,
      title: 'Creștere și Scalabilitate',
      description: 'Automatizează procesele și scalează-ți afacerea mai eficient. Companiile digitalizate cresc de 2x mai rapid decât competiția.'
    },
    {
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: 'Loialitate și Încredere',
      description: 'Construiește o comunitate în jurul brandului tău și crește retention rate-ul cu până la 40% prin strategii digitale.'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-purple-600" />,
      title: 'Conformitate și Securitate',
      description: 'Asigură-te că afacerea ta respectă toate reglementările GDPR și securitatea datelor în mediul online.'
    },
    {
      icon: <FaMobile className="text-3xl text-orange-600" />,
      title: 'Prezență Multi-Device',
      description: 'Ajunge la clienții tăi pe orice dispozitiv. 70% din traficul web vine de pe dispozitive mobile.'
    }
  ];

  const ebookChapters = [
    {
      number: '01',
      title: 'Analiza și Strategie Digitală',
      description: 'Evaluarea completă a prezenței digitale, analiza competitivă și planificarea strategică pentru transformare digitală. Include instrumente de audit și template-uri pentru planificare.',
      benefits: [
        'Audit digital complet',
        'Analiza competitorilor',
        'Identificarea oportunităților de creștere',
        'Plan strategic personalizat'
      ]
    },
    {
      number: '02',
      title: 'Optimizare SEO și Vizibilitate Online',
      description: 'Ghid complet de optimizare pentru motoarele de căutare, strategii de content marketing și tehnici avansate de keyword research pentru maximizarea vizibilității online.',
      benefits: [
        'Strategii SEO dovedite',
        'Tehnici de content marketing',
        'Optimizare pentru voice search',
        'Local SEO și Google Business Profile'
      ]
    },
    {
      number: '03',
      title: 'Marketing Digital și Lead Generation',
      description: 'Strategii moderne de marketing digital, tehnici de generare leaduri și automatizare marketing pentru creșterea constantă a bazei de clienți.',
      benefits: [
        'Campanii PPC optimizate',
        'Email marketing automatizat',
        'Marketing în social media',
        'Strategii de retargeting'
      ]
    },
    {
      number: '04',
      title: 'Conversie și Optimizare CRO',
      description: 'Tehnici avansate de optimizare a ratei de conversie, psihologie persuasivă și implementare de sales funnel pentru maximizarea vânzărilor.',
      benefits: [
        'Optimizare landing page',
        'A/B testing avansat',
        'Strategii de pricing',
        'Psihologie persuasivă'
      ]
    },
    {
      number: '05',
      title: 'Automatizare și Scalare',
      description: 'Implementarea sistemelor de automatizare pentru marketing, vânzări și operațiuni. Strategii de scalare și creștere sustenabilă.',
      benefits: [
        'Automatizare workflow',
        'Integrare CRM',
        'Marketing automation',
        'Scalare operațională'
      ]
    },
    {
      number: '06',
      title: 'Analitică și Optimizare Continuă',
      description: 'Măsurarea și analiza KPI-urilor cheie, interpretarea datelor și optimizarea continuă a strategiilor digitale.',
      benefits: [
        'Implementare Google Analytics 4',
        'Tracking conversii',
        'Raportare avansată',
        'Optimizare bazată pe date'
      ]
    },
    {
      number: '07',
      title: 'Conformitate și Securitate Digitală',
      description: 'Ghid complet pentru conformitate GDPR, securitate cibernetică și protecția datelor în mediul digital.',
      benefits: [
        'Conformitate GDPR',
        'Securitate website',
        'Protecția datelor',
        'Politici de confidențialitate'
      ]
    }
  ];

  const faqItems = [
    {
      question: "Cât timp îmi va lua să implementez strategiile din ghid?",
      answer: "Ghidul este structurat în module care pot fi implementate treptat, în 3-6 luni. Fiecare capitol include un plan de acțiune detaliat și timeline-uri realiste."
    },
    {
      question: "Este potrivit pentru afacerea mea mică?",
      answer: "Da! Ghidul include strategii scalabile pentru afaceri de orice dimensiune, cu bugete și resurse diferite. Oferim alternative pentru fiecare nivel de business."
    },
    {
      question: "Ce instrumente sunt necesare pentru implementare?",
      answer: "Majoritatea strategiilor pot fi implementate cu instrumente gratuite sau accesibile. Ghidul include o listă completă de tool-uri recomandate și alternative pentru diferite bugete."
    },
    {
      question: "Cum mă asigur că implementez corect strategiile?",
      answer: "Fiecare capitol include checklist-uri de verificare și metrics de succes. În plus, oferim template-uri și exemple practice pentru fiecare strategie."
    },
    {
      question: "Voi primi actualizări ale ghidului?",
      answer: "Da! Vei primi gratuit toate actualizările viitoare ale ghidului, plus acces la resurse adiționale pe măsură ce le publicăm."
    }
  ];

  const comparisonTable = {
    headers: ["Aspect", "Înainte de Digitalizare", "După Implementarea Ghidului"],
    rows: [
      ["Procesare Comenzi", "Manual, 2-3 ore/zi", "Automatizat, 15 minute/zi"],
      ["Lead Generation", "5-10 lead-uri/săptămână", "30-40 lead-uri/săptămână"],
      ["Vizibilitate Online", "Prezență minimală", "Top 3 în Google pentru cuvinte cheie"],
      ["Costuri Marketing", "Buget fix, ROI scăzut", "Pay-per-result, ROI 3X"],
      ["Satisfacție Clienți", "Feedback limitat", "Rating 4.8/5 constant"],
      ["Eficiență Operațională", "Procese manuale", "80% procese automatizate"]
    ]
  };

  return (
    <>
      <SEO 
        title="Ghid Complet de Transformare Digitală: 7 Capitole Esențiale pentru Afaceri | Lightning-Revenue"
        description="Descarcă ghidul gratuit de 200+ pagini pentru transformarea digitală a afacerii tale. Strategii SEO, marketing digital, automatizare, CRO și securitate. Template-uri și instrumente incluse."
        keywords="transformare digitală, ghid digitalizare, marketing digital, SEO business, automatizare afacere, CRO, optimizare conversii, analiza competitiva, google analytics 4, securitate GDPR, template-uri marketing, strategii digitale, lead generation B2B, optimizare website"
        canonical="https://www.lightning-revenue.com/ebook-digitalizare"
      />
      <SchemaOrg 
        type="Book"
        name="Ghid Complet de Transformare Digitală pentru Afaceri"
        description="Ghid comprehensiv de 200+ pagini pentru transformarea digitală a afacerii tale, incluzând strategii SEO, marketing digital, automatizare, CRO și conformitate GDPR. Cu template-uri și instrumente practice."
        author="Lightning-Revenue"
        publisher={{
          "@type": "Organization",
          "name": "Lightning-Revenue",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.lightning-revenue.com/logo.png"
          }
        }}
      />
      <Header />
      
      <main className="min-h-screen">
        <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                {/* Left Column - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Cum să-ți Digitalizezi cu Succes Afacerea în
                    <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                      5 Pași Simpli
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-8">
                    Ghid complet pentru antreprenori care vor să-și transforme și să-și scaleze afacerea în era digitală. 
                    Descoperă strategii testate și instrumente practice pentru o transformare digitală de succes.
                  </p>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Ce vei învăța:</h2>
                    <ul className="space-y-3">
                      {ebookFeatures.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <FaCheck className="text-primary flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Right Column - Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-xl p-8"
                >
                  {!isSubmitted ? (
                    <>
                      <div className="text-center mb-8">
                        <FaBook className="text-5xl text-primary mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Descarcă Ghidul Gratuit</h2>
                        <p className="text-gray-600">Completează formularul pentru a primi ghidul direct în inbox</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
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
                            Companie (Opțional)
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300"
                        >
                          <FaDownload />
                          Descarcă Ghidul
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <FaCheck className="text-3xl text-green-500" />
                      </motion.div>
                      <h2 className="text-2xl font-bold mb-4">Mulțumim!</h2>
                      <p className="text-gray-600 mb-6">
                        Ghidul a fost trimis la adresa ta de email. Verifică și folderul Spam dacă nu îl găsești în Inbox.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        Descarcă din nou
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Business Benefits Section */}
              <section className="py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                  De Ce Este Esențială Digitalizarea?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {businessBenefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-lg"
                    >
                      <div className="mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Ebook Chapters Preview */}
              <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-6">
                    Ghid Complet pentru Transformare Digitală
                  </h2>
                  <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Peste 200 de pagini de strategii testate, exemple practice și instrumente verificate pentru 
                    transformarea digitală a afacerii tale.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ebookChapters.map((chapter, index) => (
                      <motion.div
                        key={chapter.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="text-5xl font-bold text-primary/20 mb-4">
                          {chapter.number}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{chapter.title}</h3>
                        <p className="text-gray-600 mb-6">{chapter.description}</p>
                        <ul className="space-y-2">
                          {chapter.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <FaCheck className="text-primary flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Comparison Table Section */}
              <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">
                    Transformarea Digitală în Cifre
                  </h2>
                  <div className="max-w-4xl mx-auto overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          {comparisonTable.headers.map((header, index) => (
                            <th
                              key={index}
                              className="px-6 py-4 bg-gray-800 text-white text-left"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonTable.rows.map((row, index) => (
                          <tr key={index} className="border-b border-gray-200">
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className={`px-6 py-4 ${
                                  cellIndex === 0 ? 'font-medium' : ''
                                } ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">
                    Întrebări Frecvente
                  </h2>
                  <div className="max-w-3xl mx-auto">
                    <div className="grid gap-6">
                      {faqItems.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-50 rounded-xl p-6"
                        >
                          <div className="flex gap-4">
                            <FaQuestionCircle className="text-primary flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                              <p className="text-gray-600">{item.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center mt-16"
              >
                <h2 className="text-3xl font-bold mb-6">Pregătit să Începi Transformarea Digitală?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Descarcă ghidul acum și primește strategii practice, exemple reale și instrumente verificate 
                  pentru digitalizarea afacerii tale.
                </p>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300"
                >
                  <FaDownload />
                  Descarcă Ghidul Gratuit
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EbookDownload;