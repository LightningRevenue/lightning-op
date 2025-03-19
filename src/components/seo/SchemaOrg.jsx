import { useEffect } from 'react';

const SchemaOrg = ({ type, name, description }) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': type,
      name: name,
      description: description,
    };

    // Add additional fields for AboutPage
    if (type === 'AboutPage') {
      schema.mainEntity = {
        '@type': 'Organization',
        name: 'LightningRevenue',
        description: description,
        foundingDate: '2024',
        url: 'https://www.lightningrevenue.ro',
        sameAs: [
          'https://facebook.com/lightningrevenue',
          'https://instagram.com/lightningrevenue',
          'https://linkedin.com/company/lightningrevenue',
          'https://twitter.com/lightningrevenue'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+40722123456',
          contactType: 'customer service',
          areaServed: 'RO',
          availableLanguage: ['Romanian', 'English']
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Str. Libertății nr. 10',
          addressLocality: 'București',
          addressCountry: 'RO'
        },
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: '44.4268',
            longitude: '26.1025'
          },
          geoRadius: '50000'
        }
      };
    }

    // Add fields for JobPosting
    if (type === 'JobPosting') {
      schema['@type'] = 'JobPosting';
      schema.datePosted = new Date().toISOString();
      schema.validThrough = new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString();
      schema.employmentType = 'FULL_TIME';
      schema.hiringOrganization = {
        '@type': 'Organization',
        name: 'LightningRevenue',
        sameAs: 'https://www.lightningrevenue.ro'
      };
      schema.jobLocation = {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Str. Libertății nr. 10',
          addressLocality: 'București',
          addressRegion: 'București',
          postalCode: '000000',
          addressCountry: 'RO'
        }
      };
      schema.title = 'Sales Development Representative';
      schema.workHours = 'Luni-Vineri, 09:00-18:00';
      schema.skills = 'Vânzări, Marketing Digital, Comunicare, CRM';
      schema.qualifications = 'Studii superioare, 0-2 ani experiență';
      schema.jobBenefits = 'Training continuu, Dezvoltare profesională, Mediu dinamic';
    }

    // Add the schema to the head
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, name, description]);

  return null;
};

export default SchemaOrg;