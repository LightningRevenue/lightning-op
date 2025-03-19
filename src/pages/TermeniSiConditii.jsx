import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import TableOfContents from '../components/regular/TableOfContents';
import CollapsibleSection from '../components/regular/CollapsibleSection';

const TermeniSiConditii = () => {
  const sections = [
    { id: 'summary', title: 'Sumar' },
    { id: 'introduction', title: '1. Introducere' },
    { id: 'definitions', title: '2. Definiții' },
    { id: 'services', title: '3. Serviciile Noastre' },
    { id: 'startup-financing', title: '4. Programe de Finanțare Startup' },
    { id: 'obligations', title: '5. Obligațiile Părților' },
    { id: 'pricing', title: '6. Prețuri și Plăți' },
    { id: 'intellectual-property', title: '7. Proprietate Intelectuală' },
    { id: 'liabilities', title: '8. Limitarea Răspunderii' },
    { id: 'confidentiality', title: '9. Confidențialitate' },
    { id: 'data-protection', title: '10. Protecția Datelor' },
    { id: 'termination', title: '11. Încetarea Colaborării' },
    { id: 'disputes', title: '12. Soluționarea Disputelor' },
    { id: 'changes', title: '13. Modificări' },
  ];

  return (
    <>
      <SEO
        title="Termeni și Condiții | LightningRevenue"
        description="Termenii și condițiile LightningRevenue pentru serviciile de marketing digital, dezvoltare web, și programele de finanțare pentru startupuri."
      />
      
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_3fr] lg:gap-8">
            <TableOfContents sections={sections} />
            
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Termeni și Condiții LightningRevenue</h1>
              <p className="text-gray-600 mb-8">
                Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
              </p>

              {/* Summary Section */}
              <section id="summary" className="mb-12 p-6 bg-blue-50 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sumar</h2>
                <div className="prose prose-lg">
                  <p className="text-gray-700">
                    Acest document stabilește termenii și condițiile pentru utilizarea serviciilor LightningRevenue, 
                    inclusiv serviciile de marketing digital, dezvoltare web, și programele de finanțare pentru startupuri. 
                    Vă rugăm să citiți cu atenție acești termeni înainte de a utiliza serviciile noastre.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-semibold text-gray-900">Servicii Oferite</h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>✓ Marketing Digital</li>
                        <li>✓ Dezvoltare Web</li>
                        <li>✓ Optimizare SEO</li>
                        <li>✓ Finanțare Startup</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-semibold text-gray-900">Angajamentul Nostru</h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>✓ Calitate Premium</li>
                        <li>✓ Transparență</li>
                        <li>✓ Confidențialitate</li>
                        <li>✓ Suport Dedicat</li>
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
                    LightningRevenue ("noi", "nouă", "noastră") este o agenție specializată în servicii de marketing digital, 
                    dezvoltare web și programe de finanțare pentru startupuri. Acești termeni și condiții guvernează relația 
                    dintre LightningRevenue și clienții săi ("dumneavoastră", "client").
                  </p>
                  <p className="mt-4">
                    Prin utilizarea serviciilor noastre, confirmați că ați citit, înțeles și sunteți de acord cu acești 
                    termeni și condiții în întregime. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu 
                    utilizați serviciile noastre.
                  </p>
                </div>
              </section>

              {/* Definitions - Collapsible */}
              <CollapsibleSection id="definitions" title="2. Definiții">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Servicii</h3>
                    <p>Toate serviciile oferite de LightningRevenue, incluzând dar nelimitându-se la marketing digital, 
                      dezvoltare web, optimizare SEO și programe de finanțare pentru startupuri.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Contract</h3>
                    <p>Acordul dintre LightningRevenue și client, incluzând acești termeni și condiții și orice alte 
                      documente specifice proiectului.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Livrabile</h3>
                    <p>Orice materiale, documente, cod, design sau alte rezultate create de LightningRevenue pentru client.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Proprietate Intelectuală</h3>
                    <p>Toate drepturile de proprietate intelectuală, incluzând dar nelimitându-se la drepturi de autor, 
                      mărci comerciale, brevete și secrete comerciale.</p>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Services - Always visible */}
              <section id="services" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Serviciile Noastre</h2>
                <div className="prose prose-lg">
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Marketing Digital</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Strategii personalizate de marketing</li>
                        <li>• Campanii de publicitate online</li>
                        <li>• Social media marketing</li>
                        <li>• Email marketing</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Dezvoltare Web</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Creare website-uri personalizate</li>
                        <li>• Dezvoltare aplicații web</li>
                        <li>• Mentenanță și suport tehnic</li>
                        <li>• Optimizare performanță</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Optimizare SEO</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Audit și strategie SEO</li>
                        <li>• Optimizare on-page și off-page</li>
                        <li>• Optimizare conținut</li>
                        <li>• Monitorizare și raportare</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Startup Financing - Always visible */}
              <section id="startup-financing" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Programe de Finanțare Startup</h2>
                <div className="prose prose-lg">
                  <p>
                    Oferim asistență pentru accesarea următoarelor programe de finanțare:
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Startup Nation & Similar</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Consultanță completă pentru aplicare</li>
                        <li>• Asistență în pregătirea documentației</li>
                        <li>• Monitorizarea procesului de evaluare</li>
                        <li>• Suport în implementare</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Programe Tech</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Google for Startups</li>
                        <li>• Microsoft for Startups</li>
                        <li>• AWS Activate</li>
                        <li>• HubSpot for Startups</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h3 className="font-semibold text-gray-900">Important</h3>
                      <p className="mt-2">
                        Serviciile noastre de consultanță nu garantează obținerea finanțării. Succesul depinde de mai mulți 
                        factori, inclusiv eligibilitatea proiectului și disponibilitatea fondurilor.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Obligations - Collapsible */}
              <CollapsibleSection id="obligations" title="5. Obligațiile Părților">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">5.1 Obligațiile LightningRevenue</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Furnizarea serviciilor conform specificațiilor agreate</li>
                      <li>Respectarea termenelor stabilite</li>
                      <li>Păstrarea confidențialității informațiilor</li>
                      <li>Oferirea de suport tehnic conform contractului</li>
                      <li>Actualizări regulate privind progresul proiectelor</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">5.2 Obligațiile Clientului</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Furnizarea informațiilor și materialelor necesare la timp</li>
                      <li>Respectarea termenelor de plată</li>
                      <li>Feedback prompt pentru aprobări și revizuiri</li>
                      <li>Respectarea termenilor de utilizare a serviciilor</li>
                      <li>Păstrarea confidențialității informațiilor sensibile</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Pricing - Collapsible */}
              <CollapsibleSection id="pricing" title="6. Prețuri și Plăți">
                <div className="space-y-6">
                  <p>
                    Prețurile serviciilor noastre sunt stabilite în baza complexității proiectului și sunt comunicate 
                    prin oferte personalizate.
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold">6.1 Modalități de Plată</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Transfer bancar</li>
                      <li>Plată online cu cardul</li>
                      <li>Rate prin parteneri financiari</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">6.2 Termene de Plată</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Avans: 30-50% din valoarea proiectului</li>
                      <li>Plăți intermediare conform graficului stabilit</li>
                      <li>Plata finală la livrarea proiectului</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold">Notă Important:</h4>
                    <p className="mt-2">
                      Întârzierile la plată pot duce la suspendarea serviciilor și aplicarea de penalități 
                      conform contractului.
                    </p>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Intellectual Property - Collapsible */}
              <CollapsibleSection id="intellectual-property" title="7. Proprietate Intelectuală">
                <div className="space-y-6">
                  <p>
                    Toate drepturile de proprietate intelectuală create în timpul prestării serviciilor sunt 
                    transferate clientului doar după efectuarea plății integrale.
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold">7.1 Drepturi de Autor</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Codul sursă personalizat</li>
                      <li>Design-ul grafic</li>
                      <li>Conținut creat specific pentru client</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">7.2 Limitări</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Tehnologii și framework-uri open source</li>
                      <li>Plugin-uri și teme licențiate</li>
                      <li>Biblioteci și instrumente third-party</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Liabilities - Collapsible */}
              <CollapsibleSection id="liabilities" title="8. Limitarea Răspunderii">
                <div className="space-y-6">
                  <p>
                    LightningRevenue își limitează răspunderea la valoarea totală plătită de client pentru serviciile 
                    în cauză. Nu suntem răspunzători pentru:
                  </p>

                  <ul className="list-disc pl-6">
                    <li>Daune indirecte sau consecvente</li>
                    <li>Pierderi de profit sau oportunități de afaceri</li>
                    <li>Întreruperi ale activității comerciale</li>
                    <li>Probleme cauzate de furnizori terți</li>
                  </ul>

                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold">Excluderi Specifice:</h4>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Modificări făcute de client sau terți la livrabilele noastre</li>
                      <li>Utilizarea serviciilor în mod necorespunzător</li>
                      <li>Force majeure sau evenimente în afara controlului nostru</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Confidentiality - Collapsible */}
              <CollapsibleSection id="confidentiality" title="9. Confidențialitate">
                <div className="space-y-6">
                  <p>
                    Ne angajăm să păstrăm confidențialitatea tuturor informațiilor primite de la clienți în timpul 
                    colaborării noastre.
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold">9.1 Informații Confidențiale</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Strategii de afaceri</li>
                      <li>Date financiare</li>
                      <li>Informații despre clienți</li>
                      <li>Proprietate intelectuală</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">9.2 Excepții</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Informații publice</li>
                      <li>Informații cerute de lege</li>
                      <li>Informații aprobate pentru divulgare</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Data Protection - Always visible */}
              <section id="data-protection" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Protecția Datelor</h2>
                <div className="prose prose-lg">
                  <p>
                    Procesăm datele personale în conformitate cu GDPR și legislația română în vigoare.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Drepturile Dumneavoastră</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Acces la datele personale</li>
                        <li>• Rectificarea datelor incorecte</li>
                        <li>• Ștergerea datelor ("dreptul de a fi uitat")</li>
                        <li>• Restricționarea procesării</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Măsuri de Securitate</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Criptare date sensibile</li>
                        <li>• Backup regulat</li>
                        <li>• Acces restricționat</li>
                        <li>• Monitorizare continuă</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Termination - Collapsible */}
              <CollapsibleSection id="termination" title="11. Încetarea Colaborării">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">11.1 Motive de Încetare</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Finalizarea proiectului</li>
                      <li>Acord mutual</li>
                      <li>Încălcarea termenilor contractuali</li>
                      <li>Neplata serviciilor</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">11.2 Consecințe</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Plata serviciilor prestate până la data încetării</li>
                      <li>Returnarea materialelor confidențiale</li>
                      <li>Încetarea accesului la servicii</li>
                      <li>Transfer al livrabilelor finalizate și plătite</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Disputes - Collapsible */}
              <CollapsibleSection id="disputes" title="12. Soluționarea Disputelor">
                <div className="space-y-6">
                  <p>
                    În cazul apariției unor dispute, vom încerca mai întâi să le rezolvăm pe cale amiabilă prin 
                    negociere directă.
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold">12.1 Pași de Urmat</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Notificare scrisă a problemei</li>
                      <li>Negociere directă (30 zile)</li>
                      <li>Mediere (dacă este necesar)</li>
                      <li>Instanțele judecătorești din România</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">Jurisdicție:</h4>
                    <p className="mt-2">
                      Acești termeni sunt guvernați de legile din România, iar orice dispută va fi soluționată 
                      de instanțele competente din București.
                    </p>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Changes - Always visible */}
              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Modificări</h2>
                <div className="prose prose-lg">
                  <p>
                    Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. Modificările vor fi 
                    comunicate prin:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Notificări email către clienții activi</li>
                    <li>Anunțuri pe site-ul nostru</li>
                    <li>Actualizarea acestei pagini</li>
                  </ul>
                  <p className="mt-4">
                    Continuarea utilizării serviciilor noastre după publicarea modificărilor constituie acceptarea 
                    noilor termeni.
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

export default TermeniSiConditii;