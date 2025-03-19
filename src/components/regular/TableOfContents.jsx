import React, { useState, useEffect } from 'react';

const TableOfContents = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden lg:block sticky top-24 w-64 max-h-[calc(100vh-6rem)] overflow-y-auto p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">Cuprins</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`text-left w-full px-2 py-1.5 rounded transition-colors ${
                activeSection === section.id
                  ? 'text-primary bg-primary/10 font-medium'
                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;