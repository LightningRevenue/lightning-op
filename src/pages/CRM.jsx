import React, { useState, useEffect } from 'react';
import { FaPlus, FaFileExport, FaFilter, FaEnvelope } from 'react-icons/fa';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import CRMLayout from '../components/crm/common/CRMLayout';

// Import CRM components
import LeadList from '../components/crm/leads/LeadList';
import LeadDetails from '../components/crm/leads/LeadDetails';
import EmailComposer from '../components/crm/email/EmailComposer';
import EmailHistory from '../components/crm/email/EmailHistory';
import EmailMetrics from '../components/crm/email/EmailMetrics';
import AnalyticsDashboard from '../components/crm/analytics/AnalyticsDashboard';
import SearchBar from '../components/crm/common/SearchBar';
import Inbox from '../components/crm/email/Inbox';

const CRM = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [leads, setLeads] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEmailComposer, setShowEmailComposer] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showInbox, setShowInbox] = useState(false);

  const login = async (username, password) => {
    const credentials = btoa(`${username}:${password}`);
    localStorage.setItem('dashboardAuth', credentials);
    setIsAuthenticated(true);
    fetchLeads();
    fetchAnalytics();
  };

  useEffect(() => {
    const auth = localStorage.getItem('dashboardAuth');
    if (auth) {
      setIsAuthenticated(true);
      fetchLeads();
      fetchAnalytics();
    }
  }, []);

  const fetchLeads = async () => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch('http://localhost:5000/api/contact/submissions', {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch leads');
      
      const data = await response.json();
      setLeads(data.submissions || []);
    } catch (err) {
      setError('Error loading leads');
    } finally {
      setLoading(false);
    }
  };

  const fetchAnalytics = async () => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch('http://localhost:5000/api/crm/analytics', {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch analytics');
      
      const data = await response.json();
      setAnalytics(data.analytics);
    } catch (err) {
      console.error('Error fetching analytics:', err);
    }
  };

  const handleSendEmail = async (template) => {
    try {
      if (!selectedLeads || selectedLeads.length === 0) {
        throw new Error('No leads selected');
      }
      
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch('http://localhost:5000/api/crm/send-email', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          leads: selectedLeads,
          subject: template.subject,
          message: template.message
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send emails');
      }

      // Refresh data after sending emails
      fetchLeads();
      fetchAnalytics();
      setSelectedLeads([]);
      setShowEmailComposer(false);
      alert('Emails sent successfully!');
    } catch (err) {
      console.error('Error sending emails:', err);
      alert(err.message || 'Error sending emails');
    }
  };

  const handleAddNote = async (leadId, content) => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch(`http://localhost:5000/api/crm/notes/${leadId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content,
          createdBy: 'Sales Rep'
        })
      });

      if (!response.ok) throw new Error('Failed to add note');
      
      fetchLeads(); // Refresh leads to get updated notes
    } catch (err) {
      setError('Error adding note');
    }
  };

  const handleUpdateStatus = async (leadId, status) => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch(`http://localhost:5000/api/crm/status/${leadId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });

      if (!response.ok) throw new Error('Failed to update status');
      
      fetchLeads(); // Refresh leads to get updated status
    } catch (err) {
      setError('Error updating status');
    }
  };

  const handleQuickAction = (action, lead = null) => {
    switch (action) {
      case 'email':
        setSelectedLeads(lead ? [lead._id] : []);
        setShowEmailComposer(true);
        break;
      case 'view':
        setSelectedLead(lead);
        break;
      default:
        break;
    }
  };

  const handleViewLead = (lead) => {
    setSelectedLead(lead);
    setCurrentPage('leads');
  };

  const handleViewAllLeads = () => {
    setCurrentPage('leads');
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <AnalyticsDashboard 
              analytics={analytics} 
              onViewLead={handleViewLead}
              onViewAllLeads={handleViewAllLeads}
            />
          </div>
        );

      case 'leads':
        return (
          <div className="space-y-6">
            {/* Action Bar */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <SearchBar
                  value={searchTerm}
                  onChange={setSearchTerm}
                  placeholder="Search leads..."
                />
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <FaFilter className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <FaFileExport className="w-4 h-4 mr-2" />
                  Export
                </button>
                <button 
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90"
                  onClick={() => setShowEmailComposer(true)}
                >
                  <FaPlus className="w-4 h-4 mr-2" />
                  New Campaign
                </button>
                <button 
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary/90"
                  onClick={() => setShowInbox(true)}
                >
                  <FaEnvelope className="w-4 h-4 mr-2" />
                  New Email
                </button>
              </div>
            </div>

            {/* Leads Table with Side Panel */}
            <div className="flex gap-6">
              <div className={`flex-1 ${selectedLead ? 'lg:w-2/3' : 'w-full'}`}>
                <LeadList
                  leads={leads}
                  selectedLeads={selectedLeads}
                  onSelectLead={(id) => setSelectedLeads(prev => 
                    prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
                  )}
                  onViewDetails={(lead) => setSelectedLead(lead)}
                  quickActions={[
                    {
                      label: 'Email',
                      icon: FaEnvelope,
                      action: (lead) => handleQuickAction('email', lead)
                    }
                  ]}
                />
              </div>
              {selectedLead && (
                <div className="hidden lg:block lg:w-1/3">
                  <LeadDetails
                    lead={selectedLead}
                    onClose={() => setSelectedLead(null)}
                    onUpdateStatus={handleUpdateStatus}
                    onAddNote={handleAddNote}
                    onSendEmail={(lead) => handleQuickAction('email', lead)}
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 'email':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Email Campaigns</h2>
              <button 
                className="btn-primary"
                onClick={() => setShowEmailComposer(true)}
              >
                <FaPlus className="w-4 h-4 mr-2" />
                New Campaign
              </button>
            </div>
            <EmailMetrics metrics={analytics} />
            <EmailHistory emails={selectedLead?.emailHistory || []} />
          </div>
        );

      case 'analytics':
        return <AnalyticsDashboard analytics={analytics} />;

      default:
        return null;
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 py-32">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-8">CRM Login</h1>
              <button 
                onClick={() => login('admin', 'lightningadmin123')}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90"
              >
                Login to CRM
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <CRMLayout activePage={currentPage} onNavigate={setCurrentPage}>
        {renderPageContent()}
      </CRMLayout>

      {/* Email Composer Modal */}
      {showEmailComposer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <EmailComposer
              selectedLeads={selectedLeads}
              onSendEmail={(template) => {
                handleSendEmail(template);
                setShowEmailComposer(false);
              }}
              onClose={() => setShowEmailComposer(false)}
            />
          </div>
        </div>
      )}

      {/* Inbox Modal */}
      {showInbox && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <Inbox onClose={() => setShowInbox(false)} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CRM;