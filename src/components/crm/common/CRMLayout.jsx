import React from 'react';
import CRMNavigation from './CRMNavigation';

const CRMLayout = ({ children, activePage, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <CRMNavigation activePage={activePage} onNavigate={onNavigate} />
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
};

export default CRMLayout;