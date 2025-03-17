import React from 'react';
import { FaHome, FaUsers, FaEnvelope, FaChartLine, FaCog, FaTasks } from 'react-icons/fa';

const CRMNavigation = ({ activePage, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaHome },
    { id: 'leads', label: 'Leads', icon: FaUsers },
    { id: 'email', label: 'Email Campaigns', icon: FaEnvelope },
    { id: 'analytics', label: 'Analytics', icon: FaChartLine },
    { id: 'tasks', label: 'Tasks', icon: FaTasks },
    { id: 'settings', label: 'Settings', icon: FaCog }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation */}
        <div className="border-b border-gray-200">
          <div className="flex items-center h-16 px-4">
            <div className="flex items-center flex-shrink-0 text-primary font-bold text-xl mr-8">
              Lightning CRM
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-4">
                {navItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className={`
                        inline-flex items-center px-3 py-2 rounded-md text-sm font-medium
                        ${activePage === item.id
                          ? 'bg-primary text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="px-4 py-2 bg-gray-50">
          <div className="text-sm text-gray-600">
            {navItems.find(item => item.id === activePage)?.label || 'Dashboard'}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CRMNavigation;