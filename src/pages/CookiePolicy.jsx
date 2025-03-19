import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import TableOfContents from '../components/regular/TableOfContents';
import CollapsibleSection from '../components/regular/CollapsibleSection';

const CookiePolicy = () => {
  const sections = [
    { id: 'summary', title: 'Sumar' },
    { id: 'introduction', title: '1. Introducere' },
    { id: 'rights', title: '2. Drepturile Tale' },
    { id: 'what-are-cookies', title: '3. Despre Cookie-uri' },
    { id: 'types-of-cookies', title: '4. Tipuri de Cookie-uri' },
    { id: 'data-collection', title: '5. Date Colectate' },
    { id: 'data-sharing', title: '6. Partajarea Datelor' },
    { id: 'storage-duration', title: '7. Durata de Stocare' },
    { id: 'cookie-control', title: '8. Controlul Cookie-urilor' },
    { id: 'legal-notice', title: '9. Aspecte Legale' },
    { id: 'international', title: '10. Transfer Internațional' },
    { id: 'children', title: '11. Protecția Minorilor' },
    { id: 'contact', title: '12. Contact' },
    { id: 'changes', title: '13. Modificări' },
  ];

  return (
    <>
      <SEO
        title="Politica Cookie | LightningRevenue"
        description="Află mai multe despre modul în care folosim cookie-urile pentru a-ți oferi cea mai bună experiență pe site-ul nostru și cum protejăm datele tale."
      />
      
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_3fr] lg:gap-8">
            <TableOfContents sections={sections} />
            
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Politica Cookie LightningRevenue</h1>
              <p className="text-gray-600 mb-8">
                Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
              </p>

              {/* Summary Section - Always visible */}
              <section id="summary" className="mb-12 p-6 bg-blue-50 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sumar</h2>
                <div className="prose prose-lg">
                  <p className="text-gray-700">
                    Acest document explică modul în care LightningRevenue folosește cookie-urile și tehnologiile similare pentru a-ți 
                    îmbunătăți experiența pe site-ul nostru. Respectăm dreptul tău la intimitate și îți oferim control deplin asupra 
                    preferințelor tale privind cookie-urile.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-semibold text-gray-900">Ce colectăm</h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>✓ Preferințele tale</li>
                        <li>✓ Date de utilizare anonime</li>
                        <li>✓ Informații tehnice de bază</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-semibold text-gray-900">Controlul Tău</h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>✓ Setări personalizabile</li>
                        <li>✓ Drept de retragere</li>
                        <li>✓ Transparență totală</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Introduction - Always visible */}
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introducere</h2>
                <div className="prose prose-lg">
                  <p>
                    LightningRevenue se angajează să protejeze intimitatea vizitatorilor săi. Această politică detaliată privind 
                    cookie-urile explică cum și de ce folosim aceste tehnologii pe site-ul nostru.
                  </p>
                  <p className="mt-4">
                    Prin utilizarea site-ului nostru, ești de acord cu folosirea cookie-urilor în conformitate cu această politică. 
                    Poți să îți retragi consimțământul în orice moment prin modificarea setărilor browserului tău sau prin panoul 
                    nostru de preferințe pentru cookie-uri.
                  </p>
                </div>
              </section>

              {/* Your Rights - Always visible */}
              <section id="rights" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Drepturile Tale</h2>
                <div className="prose prose-lg">
                  <p>Ai următoarele drepturi în ceea ce privește cookie-urile noastre:</p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Dreptul la Informare</h3>
                      <p className="mt-2 text-sm">
                        Primești informații clare despre cookie-urile pe care le folosim și scopul lor.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Dreptul la Alegere</h3>
                      <p className="mt-2 text-sm">
                        Poți alege ce tipuri de cookie-uri accepti, cu excepția celor esențiale.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Dreptul la Retragere</h3>
                      <p className="mt-2 text-sm">
                        Îți poți retrage consimțământul în orice moment pentru cookie-urile non-esențiale.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Dreptul la Asistență</h3>
                      <p className="mt-2 text-sm">
                        Îți oferim suport pentru gestionarea preferințelor tale privind cookie-urile.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* About Cookies - Collapsible */}
              <CollapsibleSection id="what-are-cookies" title="3. Despre Cookie-uri">
                <p>
                  Cookie-urile sunt fișiere text mici care sunt descărcate și stocate pe dispozitivul tău când vizitezi un site web. 
                  Acestea servesc mai multor scopuri și pot îmbunătăți semnificativ experiența ta online.
                </p>
                <h3 className="text-xl font-semibold mt-6">Cum Funcționează Cookie-urile?</h3>
                <p className="mt-2">
                  Când vizitezi site-ul nostru pentru prima dată, un cookie este descărcat pe dispozitivul tău. Data viitoare când 
                  vizitezi site-ul de pe același dispozitiv, browserul verifică dacă există un cookie relevant și îl trimite înapoi 
                  la site. Acest lucru permite site-ului să recunoască dispozitivul tău și să-ți ofere o experiență personalizată.
                </p>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold">Important de știut:</h4>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Cookie-urile nu pot accesa alte informații de pe dispozitivul tău</li>
                    <li>Nu pot transmite viruși sau malware</li>
                    <li>Au o dimensiune foarte mică și nu afectează performanța dispozitivului</li>
                  </ul>
                </div>
              </CollapsibleSection>

              {/* Types of Cookies - Collapsible with detailed info */}
              <CollapsibleSection id="types-of-cookies" title="4. Tipuri de Cookie-uri">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">4.1 Cookie-uri Strict Necesare</h3>
                    <p className="mt-2">
                      Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate.
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Autentificare și securitate</li>
                      <li>Sesiune de utilizator</li>
                      <li>Preferințe de bază ale site-ului</li>
                      <li>Echilibrare încărcare server</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">4.2 Cookie-uri de Performanță</h3>
                    <p className="mt-2">
                      Ne ajută să înțelegem cum este utilizat site-ul nostru și să îmbunătățim experiența utilizatorilor.
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Statistici de utilizare</li>
                      <li>Analiza comportamentului utilizatorilor</li>
                      <li>Identificarea problemelor tehnice</li>
                      <li>Optimizarea performanței</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">4.3 Cookie-uri de Funcționalitate</h3>
                    <p className="mt-2">
                      Permit site-ului să își amintească alegerile tale și să-ți ofere funcții personalizate.
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Preferințe de limbă</li>
                      <li>Setări regionale</li>
                      <li>Personalizare interfață</li>
                      <li>Istoric de navigare</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">4.4 Cookie-uri de Marketing</h3>
                    <p className="mt-2">
                      Folosite pentru a-ți arăta reclame relevante și a măsura eficiența campaniilor noastre.
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Remarketing</li>
                      <li>Măsurarea conversiilor</li>
                      <li>Personalizarea reclamelor</li>
                      <li>Analiza campaniilor</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Data Collection - Always visible */}
              <section id="data-collection" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Date Colectate</h2>
                <div className="prose prose-lg">
                  <p>
                    Prin intermediul cookie-urilor, colectăm următoarele tipuri de informații:
                  </p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Date Tehnice</h3>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li>• Adresă IP (anonimizată)</li>
                        <li>• Tip browser și versiune</li>
                        <li>• Sistem de operare</li>
                        <li>• Timp petrecut pe site</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Date de Utilizare</h3>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li>• Pagini vizitate</li>
                        <li>• Acțiuni efectuate</li>
                        <li>• Preferințe de navigare</li>
                        <li>• Interacțiuni cu conținutul</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rest of the sections as CollapsibleSection */}
              <CollapsibleSection id="data-sharing" title="6. Partajarea Datelor">
                <p>
                  Datele colectate prin intermediul cookie-urilor pot fi partajate cu următoarele categorii de parteneri:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <strong>Parteneri de Analytics:</strong> Folosim Google Analytics pentru analiza traficului și comportamentului utilizatorilor
                  </li>
                  <li>
                    <strong>Platforme de Marketing:</strong> Colaborăm cu platforme precum Google Ads și Facebook Ads pentru optimizarea campaniilor publicitare
                  </li>
                  <li>
                    <strong>Furnizori de Servicii:</strong> Colaborăm cu furnizori de servicii care ne ajută să îmbunătățim și să securizăm site-ul
                  </li>
                </ul>
                <p className="mt-4">
                  Nu vindem datele dumneavoastră personale către terțe părți. Datele sunt folosite exclusiv în scopurile menționate în această politică.
                </p>
              </CollapsibleSection>

              <CollapsibleSection id="storage-duration" title="7. Durata de Stocare">
                <ul className="list-disc pl-6">
                  <li>Cookie-uri de sesiune: Se șterg automat când închideți browserul</li>
                  <li>Cookie-uri persistente: Pot rămâne stocate până la 2 ani, în funcție de scopul lor</li>
                  <li>Cookie-uri de marketing: De obicei expiră după 30 de zile</li>
                </ul>
              </CollapsibleSection>

              {/* Cookie Control - Always visible as it's important */}
              <section id="cookie-control" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Controlul Cookie-urilor</h2>
                <div className="prose prose-lg">
                  <p>
                    Îți oferim multiple opțiuni pentru a controla modul în care cookie-urile sunt utilizate când vizitezi site-ul nostru:
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Panoul de Preferințe</h3>
                      <p className="mt-2">
                        Folosește panoul nostru de preferințe pentru cookie-uri pentru a personaliza setările tale. 
                        Poți accesa acest panou oricând prin linkul din footer-ul site-ului.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Setările Browserului</h3>
                      <p className="mt-2">
                        Poți configura browserul tău să blocheze sau să șteargă cookie-urile. Accesează setările browserului tău:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li>• Chrome: Setări → Confidențialitate și securitate → Cookie-uri</li>
                        <li>• Firefox: Meniu → Opțiuni → Confidențialitate & Securitate</li>
                        <li>• Safari: Preferințe → Confidențialitate</li>
                        <li>• Edge: Setări → Confidențialitate și servicii</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Platforme de Publicitate</h3>
                      <p className="mt-2">
                        Pentru cookie-urile de publicitate, poți gestiona preferințele tale prin:
                      </p>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" 
                             className="text-primary hover:underline">Your Online Choices</a>
                        </li>
                        <li>
                          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer"
                             className="text-primary hover:underline">Google Ads Settings</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <CollapsibleSection id="legal-notice" title="9. Aspecte Legale">
                <p>
                  În conformitate cu legislația în vigoare, inclusiv GDPR și legile locale privind protecția datelor, colectăm și procesăm 
                  date prin intermediul cookie-urilor doar cu consimțământul dumneavoastră explicit, cu excepția cookie-urilor strict necesare.
                </p>
                <p className="mt-4">
                  Consimțământul dumneavoastră este obținut prin:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Acceptarea banner-ului de cookie-uri la prima vizită</li>
                  <li>Setările personalizate din panoul de preferințe pentru cookie-uri</li>
                  <li>Continuarea utilizării site-ului după citirea acestei politici</li>
                </ul>
              </CollapsibleSection>

              <CollapsibleSection id="international" title="10. Transfer Internațional">
                <p>
                  Cookie-urile noastre pot transfera date în afara Spațiului Economic European (SEE). În astfel de cazuri, 
                  ne asigurăm că transferurile sunt efectuate în conformitate cu GDPR și alte legi aplicabile.
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold">Măsuri de Protecție:</h3>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Clauze contractuale standard aprobate de UE</li>
                    <li>Evaluări ale nivelului de protecție a datelor în țările destinatare</li>
                    <li>Măsuri tehnice și organizatorice suplimentare de securitate</li>
                  </ul>
                </div>
              </CollapsibleSection>

              <CollapsibleSection id="children" title="11. Protecția Minorilor">
                <p>
                  Site-ul nostru nu este destinat utilizării de către minori sub 16 ani. Nu colectăm intenționat date 
                  prin intermediul cookie-urilor de la minori fără consimțământul părinților sau tutorilor legali.
                </p>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold">Pentru Părinți și Tutori:</h3>
                  <p className="mt-2">
                    Dacă credeți că am colectat date de la un minor fără consimțământul corespunzător, vă rugăm să ne 
                    contactați, și vom lua măsurile necesare pentru a șterge aceste informații.
                  </p>
                </div>
              </CollapsibleSection>

              {/* Contact - Always visible */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
                <div className="prose prose-lg">
                  <p>
                    Pentru orice întrebări sau clarificări despre politica noastră privind cookie-urile, ne poți contacta prin:
                  </p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Email și Telefon</h3>
                      <ul className="mt-2 space-y-2">
                        <li>Email: dpo@lightning-revenue.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Changes - Always visible */}
              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Modificări ale Politicii</h2>
                <div className="prose prose-lg">
                  <p>
                    Ne rezervăm dreptul de a modifica această politică în orice moment pentru a reflecta:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Schimbări în legislație</li>
                    <li>Actualizări ale practicilor noastre</li>
                    <li>Noi funcționalități ale site-ului</li>
                    <li>Feedback de la utilizatori</li>
                  </ul>
                  <p className="mt-4">
                    Modificările vor fi publicate pe această pagină, iar data ultimei actualizări va fi modificată corespunzător. 
                    Continuarea utilizării site-ului nostru după publicarea modificărilor constituie acceptarea acestora.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CookiePolicy;