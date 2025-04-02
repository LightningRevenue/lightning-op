import React, { useEffect } from 'react';
import FAQItem from '../components/faq/CollapsibleFAQ';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import CookieConsent from '../components/regular/CookieConsent';
import Contact from '../components/home/Contact';

const LimitedOffer = () => {
  // Track page view when component mounts
  useEffect(() => {
    trackEvent('page_view', 'limited-offer');
  }, []);

  // Function to track user interactions
  const trackEvent = async (event, section, additionalData = {}) => {
    try {
      const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event,
          page: 'limited-offer',
          section,
          additionalData
        })
      });
      
      if (!response.ok) {
        console.error('Error tracking event');
      }
    } catch (error) {
      console.error('Tracking error:', error);
    }
  };

  const renderCTA = () => (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="https://wa.me/40743959914" 
         className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
        <i className="fab fa-whatsapp mr-2 text-xl"></i>
        Discută pe WhatsApp
      </a>
      <a href="mailto:contact@lightning-revenue.com" 
         className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        <i className="fas fa-envelope mr-2"></i>
        Trimite Email
      </a>
    </div>
  );

  return (
    <>
      <CookieConsent />
      <SEO 
        title="Website Gratuit - Ofertă Limitată | Lightning Revenue"
        description="Profitați de oferta noastră limitată pentru a obține un website gratuit pentru afacerea dumneavoastră. Design modern, optimizare SEO de bază și 6 luni de găzduire gratuită!"
        keywords="website gratuit, ofertă limitată, design website, creare site, website afacere, site web gratuit, web design, dezvoltare web, website promoțional"
        canonical="https://www.lightning-revenue.com/oferta-limitata"
      />
      <SchemaOrg 
        type="Offer"
        name="Website Gratuit - Ofertă Limitată"
        description="Ofertă limitată pentru un website gratuit cu design modern, optimizare SEO și 6 luni de găzduire gratuită"
      />
      
      {/* Schema.org Offer markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Offer",
          "name": "Website Gratuit - Ofertă Limitată",
          "description": "Ofertă limitată pentru un website gratuit cu design modern, optimizare SEO și 6 luni de găzduire gratuită",
          "price": "0",
          "priceCurrency": "RON",
          "validFrom": "2025-04-01",
          "validThrough": "2025-04-30",
          "availability": "https://schema.org/LimitedAvailability",
          "url": "https://www.lightning-revenue.com/oferta-limitata",
          "offeredBy": {
            "@type": "Organization",
            "name": "Lightning Revenue",
            "url": "https://www.lightning-revenue.com/"
          }
        })}
      </script>

      <Header />
      
      <main className="min-h-screen bg-white pt-20">
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 space-y-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full font-medium animate-pulse">
                  Ofertă disponibilă până pe 31 Aprilie
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Fă-ți Afacerea Remarcată Online - Fără Cost Inițial
                </h1>
                <p className="text-xl text-gray-600">
                  Nu mai pierde clienți pentru că nu te găsesc online. Obține un website profesional gratuit și începe să atragi mai mulți clienți chiar azi!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/40743959914" 
                     className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                    <i className="fab fa-whatsapp mr-2 text-xl"></i>
                    Discută pe WhatsApp
                  </a>
                  <a href="mailto:contact@lightning-revenue.com" 
                     className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    <i className="fas fa-envelope mr-2"></i>
                    Trimite Email
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="/images-offer/Oferta-Website.jpg" 
                  alt="Website gratuit ofertă" 
                  className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Updated Statistics Section with white background */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">De Ce Ai Nevoie de Website?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl font-bold text-blue-600">80%</span>
                  <i className="fas fa-search text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Clienți Online</h3>
                <p className="text-gray-600">8 din 10 clienți caută pe Google înainte să cumpere. Fără website, pierzi acești clienți potențiali.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl font-bold text-blue-600">300%</span>
                  <i className="fas fa-chart-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Mai Multă Încredere</h3>
                <p className="text-gray-600">Clienții au de 3 ori mai multă încredere în afacerile cu prezență online profesională.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl font-bold text-blue-600">24/7</span>
                  <i className="fas fa-clock text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Mereu Disponibil</h3>
                <p className="text-gray-600">Website-ul tău lucrează non-stop, aducând clienți chiar și când dormi.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Cum te ajută un website să câștigi mai mulți clienți?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔍 Te găsesc mai ușor clienții</h3>
                <p className="text-gray-600">Când cineva caută servicii sau produse ca ale tale pe Google, website-ul tău va apărea în rezultate. Fără website, clienții ajung la concurență.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">💼 Arăți profesionist</h3>
                <p className="text-gray-600">Un website bine făcut îți face afacerea să pară mai mare și mai de încredere. Clienții preferă firmele cu prezență online profesională.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">📱 Disponibil mereu</h3>
                <p className="text-gray-600">Website-ul tău este deschis 24/7, prezentând serviciile și produsele tale chiar și când tu nu ești disponibil.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">💰 Economisești timp și bani</h3>
                <p className="text-gray-600">Nu mai pierzi timp explicând aceleași lucruri. Clienții găsesc singuri informațiile pe site, iar tu te ocupi doar de cei really interesați.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ce primești în oferta gratuită?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-3xl text-blue-600 mb-4">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Website Modern</h3>
                <p className="text-gray-600">Un site web adaptat pentru toate dispozitivele (telefon, tabletă, laptop) cu un design profesional și atractiv.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-3xl text-blue-600 mb-4">
                  <i className="fas fa-search"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Optimizare SEO de Bază</h3>
                <p className="text-gray-600">Configurare corectă pentru a ajuta clienții să vă găsească mai ușor pe Google.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-3xl text-blue-600 mb-4">
                  <i className="fas fa-server"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Găzduire 6 Luni</h3>
                <p className="text-gray-600">6 luni de găzduire gratuită pentru website-ul dumneavoastră, fără costuri ascunse.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-3xl text-blue-600 mb-4">
                  <i className="fas fa-headset"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Suport Tehnic</h3>
                <p className="text-gray-600">Asistență tehnică gratuită în primele 30 de zile pentru orice întrebare sau problemă.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cum Funcționează?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Contactează-ne</h3>
                <p className="text-gray-600">Prin WhatsApp sau email</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Discutăm Detaliile</h3>
                <p className="text-gray-600">Înțelegem nevoile tale</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Creăm Website-ul</h3>
                <p className="text-gray-600">În max. 3 săptămâni</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">4</span>
                </div>
                <h3 className="font-semibold mb-2">Lansare</h3>
                <p className="text-gray-600">Website-ul tău e live!</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              {renderCTA()}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Întrebări Frecvente</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
              <FAQItem 
                question="Nu mă pricep la tehnologie. Cum voi gestiona website-ul?"
                answer="Nu-ți face griji! Îți oferim un panou de control simplu și instruire gratuită. Plus suport tehnic 30 de zile pentru orice întrebare ai avea."
              />
              <FAQItem 
                question="Cât durează să fie gata website-ul?"
                answer="În 2-3 săptămâni website-ul tău va fi gata și online. Tu doar ne dai informațiile și pozele, noi ne ocupăm de tot restul."
              />
              <FAQItem 
                question="Ce se întâmplă după cele 6 luni gratuite?"
                answer="Ai două opțiuni simple: fie continui cu noi la doar 15€/lună (include găzduire, mentenanță și actualizări), fie îți muți site-ul la alt furnizor - fără obligații sau costuri ascunse."
              />
              <FAQItem 
                question="Ce informații trebuie să-ți dau pentru website?"
                answer="Lucruri simple pe care deja le ai: o scurtă descriere a afacerii tale, ce servicii/produse oferi, câteva poze bune, datele de contact. Te ghidăm noi pas cu pas."
              />
              <FAQItem 
                question="De ce este gratuită această ofertă?"
                answer="Pentru că suntem convinși că vei fi atât de mulțumit(ă) de rezultate încât vei dori să continui colaborarea cu noi și după perioada gratuită. Plus, un client mulțumit ne recomandă și altora."
              />
              <FAQItem 
                question="Pot să văd exemple de alte website-uri făcute de voi?"
                answer="Desigur! Contactează-ne pe WhatsApp sau email și îți trimitem imediat un portofoliu cu exemple relevante pentru domeniul tău."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Începe Acum - Este Gratuit!</h2>
            <p className="text-xl mb-8">Oferta expiră pe 31 Aprilie. Nu rata șansa de a-ți transforma afacerea!</p>
            {renderCTA()}
            <p className="mt-6 text-sm opacity-75">* Ofertă limitată la primele 20 de afaceri</p>
          </div>
        </section>

        {/* Add Legal Panel before footer */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">Informații Legale</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <p className="bg-white p-4 rounded-lg shadow-sm">
                  <strong className="text-gray-900">Eligibilitate:</strong> Ne rezervăm dreptul de a selecta clienții cu care colaborăm în baza unor criterii interne de eligibilitate și compatibilitate cu serviciile noastre.
                </p>
                
                <p className="bg-white p-4 rounded-lg shadow-sm">
                  <strong className="text-gray-900">Drept de Refuz:</strong> Lightning Revenue își rezervă dreptul de a refuza sau întrerupe serviciile în orice moment, fără obligația de a furniza justificări detaliate.
                </p>
                
                <p className="bg-white p-4 rounded-lg shadow-sm">
                  <strong className="text-gray-900">Terțe Părți:</strong> Pentru livrarea serviciilor noastre, putem colabora cu furnizori terți de încredere pentru diverse aspecte tehnice (hosting, securitate, etc).
                </p>
                
                <p className="bg-white p-4 rounded-lg shadow-sm">
                  <strong className="text-gray-900">Încetare:</strong> În cazul încetării colaborării, vă vom oferi un preaviz de 30 de zile și asistență pentru migrarea datelor, acolo unde este posibil.
                </p>
                
                <p className="bg-white p-4 rounded-lg shadow-sm">
                  <strong className="text-gray-900">Proprietate:</strong> După perioada gratuită, conținutul și designul website-ului rămân în proprietatea dumneavoastră, cu excepția elementelor licențiate de la terți.
                </p>

                <div className="text-xs text-center mt-6 text-gray-500">
                  * Aceste informații reprezintă un sumar și nu constituie întregul set de termeni și condiții.
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default LimitedOffer;