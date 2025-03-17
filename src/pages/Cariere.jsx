import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCheckCircle, 
  FaGraduationCap, 
  FaRocket, 
  FaHandshake, 
  FaUsers,
  FaServer,
  FaCode,
  FaEnvelope
} from 'react-icons/fa';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';

const Cariere = () => {
  const beneficii = [
    {
      icon: <FaRocket />,
      title: "Dezvoltare Profesională",
      description: "Training-uri și mentorat continuu"
    },
    {
      icon: <FaHandshake />,
      title: "Mediu Dinamic",
      description: "Cultură orientată spre rezultate"
    },
    {
      icon: <FaUsers />,
      title: "Echipă Tânără",
      description: "Atmosferă prietenoasă și colaborativă"
    }
  ];

  const positions = [
    {
      id: 'sdr',
      title: 'Sales Development Representative',
      type: 'Full-time • București/Remote',
      icon: <FaBriefcase />,
      responsabilitati: [
        "Identificarea și contactarea potențialilor clienți prin diverse canale (email, telefon, LinkedIn)",
        "Calificarea lead-urilor și programarea întâlnirilor pentru echipa de vânzări",
        "Cercetarea pieței și identificarea oportunităților de business",
        "Menținerea unei baze de date actualizate în CRM",
        "Colaborarea strânsă cu echipele de marketing și vânzări",
        "Atingerea obiectivelor lunare de lead-uri și întâlniri programate"
      ],
      cerinte: [
        "0-2 ani experiență în vânzări sau poziții similare",
        "Excelente abilități de comunicare în română și engleză",
        "Atitudine proactivă și orientare spre rezultate",
        "Capacitate de învățare rapidă și adaptabilitate",
        "Familiaritate cu instrumentele digitale și social media",
        "Studii superioare (în curs sau finalizate)"
      ],
      emailSubject: 'Aplicație SDR'
    },
    {
      id: 'devops',
      title: 'DevOps Engineer',
      type: 'Full-time • București/Remote',
      icon: <FaServer />,
      responsabilitati: [
        "Implementarea și administrarea infrastructurii cloud (AWS, GCP)",
        "Configurare și optimizare CI/CD pipelines",
        "Automatizarea proceselor de dezvoltare și deployment",
        "Monitorizare și optimizare performanță infrastructură",
        "Implementare soluții de securitate și backup",
        "Documentare procese și proceduri tehnice"
      ],
      cerinte: [
        "Minim 3 ani experiență în DevOps/System Administration",
        "Experiență cu AWS sau GCP și serviciile lor principale",
        "Cunoștințe Docker, Kubernetes, și container orchestration",
        "Experiență cu tools precum Jenkins, GitLab CI, sau GitHub Actions",
        "Cunoștințe de scripting (Python, Bash) și IaC (Terraform)",
        "Abilități excelente de problem-solving și documentare",
        "Certificări cloud sunt un plus"
      ],
      emailSubject: 'Aplicație DevOps Engineer'
    },
    {
      id: 'head-dev',
      title: 'Head of Development',
      type: 'Full-time • București',
      icon: <FaCode />,
      responsabilitati: [
        "Coordonarea și mentoratul echipei de dezvoltare",
        "Definirea arhitecturii tehnice pentru proiecte",
        "Implementarea best practices și standarde de cod",
        "Planificarea și supervizarea livrărilor",
        "Evaluarea și adoptarea noilor tehnologii",
        "Colaborarea cu stakeholderii pentru definirea roadmap-ului tehnic",
        "Recrutare și dezvoltarea echipei tehnice"
      ],
      cerinte: [
        "Minim 7 ani experiență în dezvoltare software",
        "Minim 3 ani experiență în poziții de leadership tehnic",
        "Experiență solidă cu arhitecturi moderne (microservices, cloud-native)",
        "Cunoștințe avansate JavaScript/TypeScript și React ecosystem",
        "Experiență în definirea proceselor de development și calitate",
        "Abilități excelente de comunicare și leadership",
        "Background în dezvoltare full-stack este un plus"
      ],
      emailSubject: 'Aplicație Head of Development'
    }
  ];

  return (
    <>
      <SEO 
        title="Cariere | LightningRevenue - Oportunități de Dezvoltare în Tech și Marketing Digital"
        description="Alătură-te echipei LightningRevenue și dezvoltă-ți cariera în development, DevOps sau marketing digital. Descoperă oportunitățile noastre și aplică acum!"
        keywords="cariere it, devops engineer, head of development, development manager, job-uri tech românia, carieră it"
        canonical="https://www.lightningrevenue.ro/cariere"
      />
      <SchemaOrg 
        type="JobPosting"
        name="Oportunități de Carieră LightningRevenue"
        description="Oportunități de dezvoltare în tech și marketing digital"
      />
      <Header />
      
      <main>
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
                  Construiește-ți Cariera
                  <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    În Tech și Marketing Digital
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Caută excelența alături de o echipă pasionată și ambițioasă
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {beneficii.map((beneficiu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 text-center"
                  >
                    <div className="text-4xl text-primary mb-4">{beneficiu.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{beneficiu.title}</h3>
                    <p className="text-gray-600">{beneficiu.description}</p>
                  </motion.div>
                ))}

              </div>

              <div className="space-y-8">
                {positions.map((position, index) => (
                  <motion.div
                    key={position.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-primary/10 rounded-xl p-4">
                        {position.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{position.title}</h2>
                        <p className="text-gray-600">{position.type}</p>
                      </div>
                    </div>

                    <div className="space-y-12">
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <FaCheckCircle className="text-primary" />
                          Responsabilități
                        </h3>
                        <ul className="space-y-3">
                          {position.responsabilitati.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-gray-600">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <FaGraduationCap className="text-primary" />
                          Cerințe
                        </h3>
                        <ul className="space-y-3">
                          {position.cerinte.map((cerinta, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-gray-600">{cerinta}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-8 border-t border-gray-200">
                        <button 
                          onClick={() => window.location.href=`mailto:cariere@lightning-revenue.com?subject=${position.emailSubject}`}
                          className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-xl text-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                        >
                          Aplică Acum
                          <FaEnvelope />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Cariere;