import React from 'react';
import { 
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube,
  FaUsers, FaChartLine, FaCamera, FaBullhorn, FaComments, FaHashtag,
  FaRegCalendarAlt, FaRegChartBar, FaRegHandshake, FaStar
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import Contact from '../components/home/Contact';

const SocialMedia = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: "Social Media Management",
      description: "Administrare profesională a conturilor sociale și crearea unei comunități active în jurul brandului tău."
    },
    {
      icon: <FaBullhorn />,
      title: "Social Media Advertising",
      description: "Campanii de publicitate targetate pentru creșterea vizibilității și a conversiilor."
    },
    {
      icon: <FaCamera />,
      title: "Content Creation",
      description: "Creație de conținut vizual și textual adaptat fiecărei platforme sociale."
    },
    {
      icon: <FaComments />,
      title: "Community Management",
      description: "Interacțiune cu audiența și gestionarea reputației online a brandului."
    },
    {
      icon: <FaChartLine />,
      title: "Social Media Strategy",
      description: "Strategii personalizate pentru creșterea prezenței și engagement-ului în social media."
    },
    {
      icon: <FaHashtag />,
      title: "Influencer Marketing",
      description: "Parteneriate strategice cu influenceri și creatori de conținut relevanți."
    }
  ];

  const platforms = [
    {
      icon: <FaFacebookF />,
      name: "Facebook",
      description: "Engagement & Brand Awareness"
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      description: "Visual Storytelling & Reels"
    },
    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      description: "B2B & Professional Growth"
    },
    {
      icon: <FaTiktok />,
      name: "TikTok",
      description: "Viral Content & Gen Z"
    },
    {
      icon: <FaYoutube />,
      name: "YouTube",
      description: "Video Marketing & Branding"
    }
  ];

  const services = [
    {
      icon: <FaRegCalendarAlt />,
      title: "Content Management",
      description: "Gestionare completă a prezenței în social media",
      features: [
        "Planificare și creare conținut",
        "Design grafic personalizat",
        "Copywriting adaptat",
        "Calendar editorial"
      ]
    },
    {
      icon: <FaBullhorn />,
      title: "Advertising & Promovare",
      description: "Strategii de advertising pentru rezultate măsurabile",
      features: [
        "Campanii targetate",
        "Optimizare buget",
        "A/B testing",
        "Remarketing"
      ]
    },
    {
      icon: <FaRegChartBar />,
      title: "Analytics & Raportare",
      description: "Monitorizare și analiză performanță",
      features: [
        "KPI tracking",
        "Rapoarte lunare",
        "Analiză competiție",
        "Recomandări optimizare"
      ]
    }
  ];

  const metrics = [
    {
      icon: <FaUsers />,
      title: "Creștere Followeri",
      value: "+250%",
      description: "Creștere organică în 6 luni"
    },
    {
      icon: <FaChartLine />,
      title: "Engagement Rate",
      value: "12.5%",
      description: "Rată medie de engagement"
    },
    {
      icon: <FaRegHandshake />,
      title: "Lead Generation",
      value: "+175%",
      description: "Creștere lead-uri sociale"
    }
  ];

  const faq = [
    {
      question: "Pe ce platforme sociale ar trebui să fie prezent businessul meu?",
      answer: "Alegerea platformelor depinde de industrie, audiență țintă și obiective. Analizăm acești factori și recomandăm platformele cu cel mai mare potențial pentru afacerea ta."
    },
    {
      question: "Cât de des trebuie să postez pe social media?",
      answer: "Frecvența postărilor variază în funcție de platformă și audiență. În general, recomandăm 4-5 postări/săptămână pe Facebook/Instagram, 2-3 pe LinkedIn și 1-2 videoclipuri/săptămână pe TikTok."
    },
    {
      question: "Care este bugetul minim pentru advertising?",
      answer: "Recomandăm un buget minim de 500€/lună pentru campanii de social media advertising, pentru a obține rezultate relevante și a testa diverse formate și audiențe."
    }
  ];

  return (
    <>
      <SEO 
        title="Servicii Social Media Marketing | Management & Advertising"
        description="Servicii complete de social media marketing pentru creșterea prezenței online. Expertiză în management conturi sociale, advertising și creație de conținut."
        keywords="social media marketing, facebook marketing, instagram marketing, tiktok marketing, linkedin marketing, social media management, advertising social media, content creation, community management"
        canonical="https://www.lightningoperational.ro/social-media"
      />
      <SchemaOrg 
        type="Service"
        name="Servicii Social Media Marketing"
        description="Servicii profesionale de social media marketing și management pentru prezență online puternică"
        provider="Lightning Revenue"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="font-heading text-5xl font-bold mb-8 leading-tight text-gray-900">
                  Social Media Marketing
                  <span className="block bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
                    pentru Brand-ul Tău
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transformăm prezența ta în social media într-o sursă constantă de creștere și engagement pentru afacerea ta.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300"
                  >
                    <div className="text-primary text-3xl mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Platforme Social Media
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {platforms.map((platform, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-md transition-all">
                    <div className="text-4xl text-primary mb-4">{platform.icon}</div>
                    <h3 className="font-bold mb-2">{platform.name}</h3>
                    <p className="text-gray-600 text-sm">{platform.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Procesul Nostru
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Audit & Strategie</h3>
                    <p className="text-gray-600">Analizăm situația actuală și dezvoltăm strategia personalizată pentru obiectivele tale.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Planificare & Creație</h3>
                    <p className="text-gray-600">Dezvoltăm calendarul editorial și creăm conținut adaptat fiecărei platforme.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Management & Advertising</h3>
                    <p className="text-gray-600">Gestionăm activ conturile și implementăm campaniile de advertising.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Monitorizare & Optimizare</h3>
                    <p className="text-gray-600">Analizăm performanța și optimizăm continuu pentru rezultate mai bune.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Servicii Specializate
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="text-3xl text-primary mb-6">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-primary shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Rezultate Măsurabile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl">
                    <div className="text-3xl text-primary mb-4">{metric.icon}</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                    <h3 className="font-bold text-lg mb-2">{metric.title}</h3>
                    <p className="text-gray-600">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Întrebări Frecvente
              </h2>
              <div className="space-y-6">
                {faq.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      
      <Footer />
    </>
  );
};

export default SocialMedia;