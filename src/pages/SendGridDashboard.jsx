import React, { useState, useEffect } from 'react';
import { 
  FaPaperPlane, FaChartLine, FaHistory, FaSave, 
  FaUpload, FaUserFriends, FaCopy, FaList, FaPlus
} from 'react-icons/fa';

const SendGridDashboard = () => {
  const [activeTab, setActiveTab] = useState('compose'); // compose, lists, campaigns
  const [stats, setStats] = useState(null);
  const [templates, setTemplates] = useState([]);
  const [contactLists, setContactLists] = useState([]);
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    html: '',
    text: '',
    replyTo: '',
    attachments: []
  });
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messageType, setMessageType] = useState('text');
  const [newListName, setNewListName] = useState('');
  const [selectedList, setSelectedList] = useState(null);

  useEffect(() => {
    fetchTemplates();
    fetchStats();
    fetchContactLists();
  }, []);

  const fetchTemplates = async () => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/sendgrid/templates', {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to fetch templates');
      const data = await response.json();
      setTemplates(data.templates);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchStats = async () => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      const response = await fetch(
        `https://backend-logic-lght-849100326888.europe-west1.run.app/api/sendgrid/stats?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            'Authorization': `Basic ${auth}`
          }
        }
      );
      
      if (!response.ok) throw new Error('Failed to fetch stats');
      const data = await response.json();
      setStats(data.stats);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchContactLists = async () => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/sendgrid/lists', {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to fetch contact lists');
      const data = await response.json();
      setContactLists(data.lists || []);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/sendgrid/send', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send email');
      
      const data = await response.json();
      alert('Email sent successfully!');
      setFormData({ to: '', subject: '', html: '', text: '', replyTo: '', attachments: [] });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const saveTemplate = async () => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/sendgrid/templates', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.subject,
          subject: formData.subject,
          html_content: formData.html || formData.text
        })
      });

      if (!response.ok) throw new Error('Failed to save template');
      
      alert('Template saved successfully!');
      fetchTemplates();
    } catch (err) {
      setError(err.message);
    }
  };

  const createContactList = async () => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/sendgrid/lists', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newListName })
      });

      if (!response.ok) throw new Error('Failed to create list');
      
      setNewListName('');
      fetchContactLists();
    } catch (err) {
      setError(err.message);
    }
  };

  const addContactsToList = async (listId, contacts) => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch(`https://backend-logic-lght-849100326888.europe-west1.run.app/api/sendgrid/lists/${listId}/contacts`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ contacts })
      });

      if (!response.ok) throw new Error('Failed to add contacts');
      
      fetchContactLists();
    } catch (err) {
      setError(err.message);
    }
  };

  const createCampaign = async (campaignData) => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/sendgrid/campaigns', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(campaignData)
      });

      if (!response.ok) throw new Error('Failed to create campaign');
      
      alert('Campaign created successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  const renderComposeTab = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To
          </label>
          <input
            type="email"
            required
            value={formData.to}
            onChange={(e) => setFormData(prev => ({ ...prev, to: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="recipient@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reply-To
          </label>
          <input
            type="email"
            value={formData.replyTo}
            onChange={(e) => setFormData(prev => ({ ...prev, replyTo: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter reply-to email"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Email subject"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <div className="flex gap-2 mb-2">
          <button
            type="button"
            className={`text-sm px-3 py-1 rounded ${
              messageType === 'text' 
                ? 'bg-primary text-white' 
                : 'text-primary hover:bg-gray-100'
            }`}
            onClick={() => {
              setMessageType('text');
              const currentContent = formData.html || formData.text;
              setFormData(prev => ({
                ...prev,
                html: '',
                text: currentContent
              }));
            }}
          >
            Plain Text
          </button>
          <button
            type="button"
            className={`text-sm px-3 py-1 rounded ${
              messageType === 'html' 
                ? 'bg-primary text-white' 
                : 'text-primary hover:bg-gray-100'
            }`}
            onClick={() => {
              setMessageType('html');
              const currentContent = formData.html || formData.text;
              setFormData(prev => ({
                ...prev,
                html: currentContent,
                text: ''
              }));
            }}
          >
            HTML
          </button>
        </div>
        <textarea
          required
          value={messageType === 'html' ? formData.html : formData.text}
          onChange={(e) => {
            const value = e.target.value;
            setFormData(prev => ({
              ...prev,
              html: messageType === 'html' ? value : '',
              text: messageType === 'text' ? value : ''
            }));
          }}
          rows={12}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary font-mono text-sm"
          placeholder={messageType === 'html' 
            ? '<p>Write your HTML message here...</p>' 
            : 'Write your message here...'
          }
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
        >
          {loading ? 'Sending...' : (
            <>
              <FaPaperPlane className="mr-2 -ml-1 h-4 w-4" />
              Send Email
            </>
          )}
        </button>
      </div>
    </form>
  );

  const renderListsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          placeholder="Enter list name"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <button
          onClick={createContactList}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90"
        >
          <FaPlus className="mr-2 -ml-1 h-4 w-4" />
          Create List
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactLists.map(list => (
          <div
            key={list.id}
            className="p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors"
          >
            <h3 className="font-medium mb-2">{list.name}</h3>
            <p className="text-sm text-gray-500 mb-4">
              {list.contact_count || 0} contacts
            </p>
            <button
              onClick={() => setSelectedList(list)}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCampaignsTab = () => (
    <div className="space-y-6">
      <button
        onClick={() => {
          const campaignData = {
            name: formData.subject,
            subject: formData.subject,
            html_content: formData.html || formData.text,
            list_ids: selectedList ? [selectedList.id] : []
          };
          createCampaign(campaignData);
        }}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90"
      >
        <FaPlus className="mr-2 -ml-1 h-4 w-4" />
        Create Campaign
      </button>

      {/* Campaign list will go here */}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Email Marketing</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('compose')}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'compose'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FaPaperPlane className="mr-2 -ml-1 h-4 w-4" />
                Compose
              </button>
              <button
                onClick={() => setActiveTab('lists')}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'lists'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FaList className="mr-2 -ml-1 h-4 w-4" />
                Lists
              </button>
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'campaigns'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FaChartLine className="mr-2 -ml-1 h-4 w-4" />
                Campaigns
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 rounded-lg p-4">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === 'compose' && renderComposeTab()}
              {activeTab === 'lists' && renderListsTab()}
              {activeTab === 'campaigns' && renderCampaignsTab()}
            </div>

            {/* Sidebar */}
            <div>
              {/* Templates */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Templates</h3>
                <div className="space-y-3">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template)}
                      className="w-full text-left p-3 rounded-lg hover:bg-white transition-colors"
                    >
                      <h4 className="font-medium text-gray-900">{template.name}</h4>
                      <p className="text-sm text-gray-500 truncate">{template.subject}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              {stats && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">30 Day Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sent</span>
                      <span className="font-medium">{stats.sent || 0}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Delivered</span>
                      <span className="font-medium">{stats.delivered || 0}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Opened</span>
                      <span className="font-medium">{stats.opened || 0}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Clicked</span>
                      <span className="font-medium">{stats.clicked || 0}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendGridDashboard;