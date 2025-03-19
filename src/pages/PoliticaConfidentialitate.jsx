import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import TableOfContents from '../components/regular/TableOfContents';
import CollapsibleSection from '../components/regular/CollapsibleSection';

const PoliticaConfidentialitate = () => {
  const sections = [
    { id: 'summary', title: 'Sumar' },
    { id: 'introduction', title: '1. Introducere' },
    { id: 'definitions', title: '2. Definiții' },
    { id: 'data-collection', title: '3. Date Colectate' },
    { id: 'legal-basis', title: '4. Temei Legal' },
    { id: 'data-processing', title: '5. Procesarea Datelor' },
    { id: 'data-sharing', title: '6. Partajarea Datelor' },
    { id: 'data-security', title: '7. Securitatea Datelor' },
    { id: 'user-rights', title: '8. Drepturile Tale' },
    { id: 'children', title: '9. Protecția Minorilor' },
    { id: 'cookies', title: '10. Cookie-uri' },
    { id: 'transfers', title: '11. Transferuri Internaționale' },
    { id: 'changes', title: '12. Modificări' },
    { id: 'contact', title: '13. Contact' },
  ];

  return (
    <>
      <SEO 
        title="Politica de Confidențialitate"
        description="Află cum protejăm și procesăm datele tale personale în conformitate cu GDPR și legislația în vigoare."
      />
      
      <Header />
      
      <main className="min-h-screen bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_3fr] lg:gap-8">
            <TableOfContents sections={sections} />
            
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Politica de Confidențialitate</h1>
              <p className="text-gray-600 mb-8">
                Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
              </p>

              {/* Summary Section */}
              <section id="summary" className="mb-12 p-6 bg-blue-50 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sumar</h2>
                <div className="prose prose-lg">
                  <p className="text-gray-700">
                    Această Politică de Confidențialitate explică modul în care Lightning-Revenue colectează, utilizează și 
                    protejează datele tale personale. Ne angajăm să respectăm dreptul tău la intimitate și să protejăm 
                    informațiile pe care ni le încredințezi.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-semibold text-gray-900">Date pe care le colectăm</h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>✓ Informații de contact</li>
                        <li>✓ Date despre utilizare</li>
                        <li>✓ Preferințe marketing</li>
                        <li>✓ Informații despre dispozitiv</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-semibold text-gray-900">Drepturile Tale</h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>✓ Acces și rectificare</li>
                        <li>✓ Ștergere și portabilitate</li>
                        <li>✓ Retragerea consimțământului</li>
                        <li>✓ Opoziție la marketing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introducere</h2>
                <div className="prose prose-lg">
                  <p>
                    Lightning-Revenue ("noi", "nouă", "noastră") respectă confidențialitatea vizitatorilor și clienților 
                    noștri. Această politică descrie modul în care colectăm și utilizăm informațiile personale prin 
                    intermediul website-ului nostru și al serviciilor oferite.
                  </p>
                  <p className="mt-4">
                    Procesăm datele personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR), 
                    precum și cu legislația română în vigoare privind protecția datelor.
                  </p>
                </div>
              </section>

              {/* Definitions */}
              <CollapsibleSection id="definitions" title="2. Definiții">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Date Personale</h3>
                    <p>Orice informații referitoare la o persoană fizică identificată sau identificabilă.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Procesare</h3>
                    <p>Orice operațiune efectuată asupra datelor personale, manual sau automat.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Operator de Date</h3>
                    <p>Lightning-Revenue, care determină scopurile și mijloacele de procesare a datelor personale.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Persoană Vizată</h3>
                    <p>Persoana fizică ale cărei date personale sunt procesate.</p>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Data Collection */}
              <section id="data-collection" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Date Colectate</h2>
                <div className="prose prose-lg">
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Date furnizate direct</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Nume și prenume</li>
                        <li>• Adresă de email</li>
                        <li>• Număr de telefon</li>
                        <li>• Adresă de facturare</li>
                        <li>• Informații despre companie</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Date colectate automat</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Adresă IP</li>
                        <li>• Informații despre browser și dispozitiv</li>
                        <li>• Date despre utilizarea site-ului</li>
                        <li>• Cookie-uri și tehnologii similare</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Date din surse terțe</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Rețele sociale (dacă vă conectați prin acestea)</li>
                        <li>• Parteneri de afaceri</li>
                        <li>• Surse publice</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Legal Basis */}
              <CollapsibleSection id="legal-basis" title="4. Temei Legal">
                <div className="space-y-6">
                  <p>Procesăm datele tale personale în baza următoarelor temeiuri legale:</p>

                  <div>
                    <h3 className="text-xl font-semibold">4.1 Consimțământ</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Newsletter și comunicări de marketing</li>
                      <li>Cookie-uri non-esențiale</li>
                      <li>Analiză comportamentală</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">4.2 Executarea unui Contract</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Furnizarea serviciilor solicitate</li>
                      <li>Procesarea plăților</li>
                      <li>Suport clienți</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">4.3 Obligație Legală</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Păstrarea documentelor contabile</li>
                      <li>Răspunsul la solicitările autorităților</li>
                      <li>Conformitatea cu legislația fiscală</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">4.4 Interes Legitim</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Îmbunătățirea serviciilor</li>
                      <li>Securitatea sistemelor</li>
                      <li>Prevenirea fraudelor</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Data Processing */}
              <CollapsibleSection id="data-processing" title="5. Procesarea Datelor">
                <div className="space-y-6">
                  <p>Utilizăm datele tale personale pentru următoarele scopuri:</p>

                  <div>
                    <h3 className="text-xl font-semibold">5.1 Furnizarea Serviciilor</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Crearea și gestionarea contului tău</li>
                      <li>Procesarea comenzilor și plăților</li>
                      <li>Comunicarea privind serviciile</li>
                      <li>Suport tehnic și asistență clienți</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">5.2 Îmbunătățirea Serviciilor</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Analiza comportamentului utilizatorilor</li>
                      <li>Cercetare și dezvoltare</li>
                      <li>Optimizarea site-ului și serviciilor</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">5.3 Marketing și Comunicări</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Trimiterea newsletterului (cu consimțământ)</li>
                      <li>Personalizarea conținutului</li>
                      <li>Analize de marketing</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Data Sharing */}
              <CollapsibleSection id="data-sharing" title="6. Partajarea Datelor">
                <div className="space-y-6">
                  <p>
                    Putem partaja datele tale personale cu următoarele categorii de destinatari:
                  </p>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold">Furnizori de Servicii</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Procesatori de plăți</li>
                      <li>Servicii de hosting</li>
                      <li>Servicii de email marketing</li>
                      <li>Servicii de analiză</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold">Parteneri de Afaceri</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Furnizori de software</li>
                      <li>Agenții de marketing</li>
                      <li>Consultanți profesioniști</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h3 className="font-semibold">Important:</h3>
                    <p className="mt-2">
                      Toți partenerii noștri sunt obligați prin contract să respecte confidențialitatea 
                      datelor și să le proceseze doar conform instrucțiunilor noastre.
                    </p>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Data Security */}
              <section id="data-security" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Securitatea Datelor</h2>
                <div className="prose prose-lg">
                  <p>
                    Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele tale personale:
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Măsuri Tehnice</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Criptare SSL/TLS</li>
                        <li>• Firewalls și sisteme de securitate</li>
                        <li>• Backup regulat al datelor</li>
                        <li>• Monitorizare continuă</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Măsuri Organizatorice</h3>
                      <ul className="mt-2 space-y-2">
                        <li>• Politici și proceduri interne</li>
                        <li>• Training pentru angajați</li>
                        <li>• Acces restricționat la date</li>
                        <li>• Audituri de securitate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* User Rights */}
              <section id="user-rights" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Drepturile Tale</h2>
                <div className="prose prose-lg">
                  <p>
                    Conform GDPR, ai următoarele drepturi în legătură cu datele tale personale:
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Dreptul de Acces</h3>
                      <p className="mt-2 text-sm">
                        Poți solicita o copie a datelor tale personale pe care le deținem.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Dreptul la Rectificare</h3>
                      <p className="mt-2 text-sm">
                        Poți cere corectarea datelor inexacte sau completarea celor incomplete.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Dreptul la Ștergere</h3>
                      <p className="mt-2 text-sm">
                        Poți cere ștergerea datelor tale în anumite circumstanțe.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Dreptul la Portabilitate</h3>
                      <p className="mt-2 text-sm">
                        Poți primi datele tale într-un format structurat și le poți transfera.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Children Protection */}
              <CollapsibleSection id="children" title="9. Protecția Minorilor">
                <div className="space-y-6">
                  <p>
                    Nu colectăm cu bună știință date personale de la persoane sub 16 ani. Dacă ești părinte sau tutore 
                    și crezi că copilul tău ne-a furnizat date personale, te rugăm să ne contactezi.
                  </p>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h3 className="font-semibold">Măsuri de Protecție:</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Verificarea vârstei pentru serviciile relevante</li>
                      <li>Ștergerea imediată a datelor minorilor identificați</li>
                      <li>Solicitarea consimțământului parental când este necesar</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Cookies */}
              <CollapsibleSection id="cookies" title="10. Cookie-uri">
                <div className="space-y-6">
                  <p>
                    Folosim cookie-uri și tehnologii similare pentru a-ți oferi o experiență mai bună pe site-ul nostru. 
                    Pentru detalii complete, consultă <a href="/politica-cookie" className="text-primary hover:underline">Politica noastră de Cookie-uri</a>.
                  </p>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold">Tipuri de Cookie-uri:</h3>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Strict necesare</li>
                      <li>Preferințe</li>
                      <li>Statistici</li>
                      <li>Marketing</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              {/* International Transfers */}
              <CollapsibleSection id="transfers" title="11. Transferuri Internaționale">
                <div className="space-y-6">
                  <p>
                    Datele tale pot fi transferate și procesate în țări din afara Spațiului Economic European (SEE). 
                    În astfel de cazuri, ne asigurăm că:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Transferul se face către țări cu nivel adecvat de protecție</li>
                    <li>Folosim clauze contractuale standard aprobate de UE</li>
                    <li>Implementăm măsuri suplimentare de protecție când este necesar</li>
                  </ul>
                </div>
              </CollapsibleSection>

              {/* Changes */}
              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Modificări</h2>
                <div className="prose prose-lg">
                  <p>
                    Putem actualiza această politică periodic pentru a reflecta modificările în practicile noastre 
                    sau obligațiile legale. Te vom notifica despre orice modificări semnificative prin:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Afișarea unui anunț pe site</li>
                    <li>Trimiterea unui email de notificare</li>
                    <li>Solicitarea unui nou consimțământ când este necesar</li>
                  </ul>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact</h2>
                <div className="prose prose-lg">
                  <p>
                    Pentru orice întrebări sau solicitări legate de datele tale personale, ne poți contacta la:
                  </p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Date de Contact</h3>
                      <ul className="mt-2 space-y-2">
                        <li>Email: gdpr@lightning-revenue.com</li>
                        <li>Telefon: [Număr de telefon]</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">Responsabil Protecția Datelor</h3>
                      <p className="mt-2">
                        Pentru aspecte legate de GDPR și protecția datelor:
                        <br />
                        Email: dpo@lightning-revenue.com
                      </p>
                    </div>
                  </div>
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

export default PoliticaConfidentialitate;