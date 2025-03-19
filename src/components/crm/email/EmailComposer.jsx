import React, { useState } from 'react';
import { FaPaperPlane, FaTimes, FaRegSave, FaFolderOpen } from 'react-icons/fa';

const EmailComposer = ({ 
  selectedLeads = [], 
  onSendEmail,
  onClose,
  className = '' 
}) => {
  const [template, setTemplate] = useState({
    subject: '',
    message: ''
  });
  const [showTemplates, setShowTemplates] = useState(false);

  const emailTemplates = [
    {
      name: 'Follow Up',
      subject: 'Following up on our conversation',
      message: 'Hi {name},\n\nI hope this email finds you well. I wanted to follow up on our previous conversation...'
    },
    {
      name: 'Introduction',
      subject: 'Nice to meet you',
      message: 'Hi {name},\n\nThank you for your interest in Lightning Revenue. I noticed you...'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (template.subject && template.message) {
      onSendEmail(template);
    }
  };

  const loadTemplate = (templateData) => {
    setTemplate(templateData);
    setShowTemplates(false);
  };

  return (
    <div className={`bg-white rounded-lg shadow-xl ${className}`}>
      {/* Modal Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          New Email Campaign {selectedLeads.length > 0 && `(${selectedLeads.length} recipients)`}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {/* Template Selection */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => setShowTemplates(!showTemplates)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FaFolderOpen className="mr-2 -ml-1 h-5 w-5 text-gray-400" />
            Load Template
          </button>

          {showTemplates && (
            <div className="mt-2 p-3 bg-gray-50 rounded-md">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Email Templates</h3>
              <div className="space-y-2">
                {emailTemplates.map((tmpl, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => loadTemplate(tmpl)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-white transition-colors duration-150"
                  >
                    <div className="font-medium text-gray-900">{tmpl.name}</div>
                    <div className="text-sm text-gray-500 truncate">{tmpl.subject}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Subject Line */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject Line
          </label>
          <input
            type="text"
            id="subject"
            value={template.subject}
            onChange={(e) => setTemplate(prev => ({ ...prev, subject: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            placeholder="Enter email subject"
          />
        </div>

        {/* Message Body */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <div className="mt-1 mb-2 bg-gray-50 rounded-md p-3 text-sm text-gray-600">
            <p className="font-medium mb-1">Available variables:</p>
            <ul className="list-disc list-inside">
              <li>{'{name}'} - Lead's name</li>
              <li>{'{company}'} - Company name (if available)</li>
            </ul>
          </div>
          <textarea
            id="message"
            rows="8"
            value={template.message}
            onChange={(e) => setTemplate(prev => ({ ...prev, message: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              // Save as template functionality would go here
            }}
            className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md shadow-sm text-sm font-medium bg-white hover:bg-primary hover:text-white"
          >
            <FaRegSave className="mr-2 -ml-1 h-4 w-4" />
            Save as Template
          </button>
          <button
            type="submit"
            disabled={!template.subject || !template.message || selectedLeads.length === 0}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaPaperPlane className="mr-2 -ml-1 h-4 w-4" />
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailComposer;