import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaLightbulb, FaClock, FaRocket, FaQuestionCircle } from 'react-icons/fa';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import StartupFinanceForm from '../components/regular/StartupFinanceForm';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';

const StartupFinantareForm = () => {
  const applicationSteps = [
    {
      icon: <FaCheck />,
      title: "Completare Formular",
      description: "Completează formularul cu toate detaliile relevante despre startup-ul tău"
    },
    {
      icon: <FaLightbulb />,
      title: "Evaluare",
      description: "Echipa noastră evaluează aplicația și identifică cele mai potrivite programe"
    },
    {
      icon: <FaClock />,
      title: "Feedback Rapid",
      description: "Primești răspuns în maxim 48 de ore cu următorii pași"
    },
    {
      icon: <FaRocket />,
      title: "Implementare",
      description: "Te ajutăm să implementezi și să optimizezi soluțiile activate"
    }
  ];

  const faqs = [
    {
      question: "Cât durează procesul de aplicare?",
      answer: "Procesul complet, de la aplicare până la activarea beneficiilor, durează în medie 1-2 săptămâni, în funcție de programele selectate și complexitatea implementării."
    },
    {
      question: "Ce documente sunt necesare?",
      answer: "Este recomandat să ai pregătite: pitch deck, proiecții financiare, acte de înființare a companiei și un plan de utilizare a resurselor. Documentele specifice vor fi solicitate după evaluarea inițială."
    },
    {
      question: "Există costuri de aplicare?",
      answer: "Aplicația și evaluarea sunt gratuite. În cazul aprobării, se pot aplica comisioane de succes între 10-15% din valoarea beneficiilor obținute, plătibile în rate pe parcursul primelor 3-6 luni."
    },
    {
      question: "Ce se întâmplă după trimiterea formularului?",
      answer: "Vei primi o confirmare pe email, iar în maxim 48 de ore un consultant te va contacta pentru a discuta detaliile aplicației și a stabili următorii pași."
    }
  ];

  return (
    <>
      <SEO 
        title="Formular Finanțare Startup | Lightning Revenue"
        description="Aplică pentru programul nostru de finanțare startup. Obține acces la credite cloud, tool-uri enterprise și suport tehnic pentru accelerarea afacerii tale."
        keywords="aplicatie finantare startup, formular startup, finantare tech startup, credite cloud startup"
        canonical="https://www.lightning-revenue.ro/startup-finantare-form"
      />
      <SchemaOrg 
        type="WebPage"
        name="Formular Aplicație Finanțare Startup"
        description="Formular de aplicare pentru programul de finanțare și suport pentru startup-uri tech"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Aplică pentru Finanțare Startup
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Completează formularul de mai jos pentru a aplica la programul nostru de finanțare.
                Oferim suport complet pentru startup-uri tech, de la credite cloud până la consultanță specializată.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div 
                className="p-6 rounded-xl bg-gray-50 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-primary text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Credite Cloud</h3>
                <p className="text-gray-600">
                  Acces la credite în valoare de până la $400,000 pentru servicii cloud de la partenerii noștri.
                </p>
              </motion.div>

              <motion.div 
                className="p-6 rounded-xl bg-gray-50 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-primary text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3">Consultanță Tech</h3>
                <p className="text-gray-600">
                  Suport tehnic specializat și consultanță pentru dezvoltarea și scalarea produsului tău.
                </p>
              </motion.div>

              <motion.div 
                className="p-6 rounded-xl bg-gray-50 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-primary text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-3">Tool-uri Enterprise</h3>
                <p className="text-gray-600">
                  Acces la tool-uri și servicii enterprise pentru accelerarea dezvoltării startup-ului tău.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">Procesul de Aplicare</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {applicationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-primary text-3xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Completează Formularul</h2>
                  <p className="text-gray-600">
                    Completează toate câmpurile necesare cu informații despre startup-ul tău.
                    Te vom contacta în cel mai scurt timp pentru următorii pași.
                  </p>
                </div>
                <StartupFinanceForm />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Întrebări Frecvente</h2>
                <p className="text-gray-600">
                  Află mai multe despre procesul de aplicare și beneficiile programului
                </p>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <FaQuestionCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default StartupFinantareForm;