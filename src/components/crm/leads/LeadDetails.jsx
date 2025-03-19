import React from 'react';
import { FaEnvelope, FaPhone, FaBuilding, FaHistory, FaTimes, FaPaperPlane, FaEdit } from 'react-icons/fa';
import StatusBadge from '../common/StatusBadge';
import Notes from '../common/Notes';

const LeadDetails = ({ 
  lead, 
  onClose, 
  onUpdateStatus, 
  onAddNote,
  onSendEmail,
  className = '' 
}) => {
  const statusOptions = ['new', 'contacted', 'interested', 'not-interested', 'converted'];

  const quickActions = [
    {
      label: 'Send Email',
      icon: FaPaperPlane,
      action: () => onSendEmail(lead),
      primary: true
    },
    {
      label: 'Edit Lead',
      icon: FaEdit,
      action: () => {} // To be implemented
    }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {/* Header Section */}
      <div className="border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                {lead.name}
                <StatusBadge status={lead.status} />
              </h2>
              <div className="mt-1 text-sm text-gray-500">{lead.type}</div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="mt-4 flex gap-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  action.primary 
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <action.icon className="w-4 h-4 mr-2" />
                {action.label}
              </button>
            ))}
          </div>
        </div>

        {/* Status Selector */}
        <div className="px-6 py-3 bg-gray-50 flex items-center gap-3">
          <span className="text-sm font-medium text-gray-500">Status:</span>
          <select
            value={lead.status}
            onChange={(e) => onUpdateStatus(lead._id, e.target.value)}
            className="block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Content Sections */}
      <div className="p-6 space-y-6">
        {/* Contact Information */}
        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center text-gray-600">
              <FaEnvelope className="w-4 h-4 mr-2" />
              <a href={`mailto:${lead.email}`} className="hover:text-primary">
                {lead.email}
              </a>
            </div>
            {lead.phone && (
              <div className="flex items-center text-gray-600">
                <FaPhone className="w-4 h-4 mr-2" />
                <a href={`tel:${lead.phone}`} className="hover:text-primary">
                  {lead.phone}
                </a>
              </div>
            )}
            {lead.company && (
              <div className="flex items-center text-gray-600">
                <FaBuilding className="w-4 h-4 mr-2" />
                {lead.company}
              </div>
            )}
          </div>
        </section>

        {/* Email History */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Email History</h3>
            <FaHistory className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {lead.emailHistory?.map((email, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{email.subject}</h4>
                  <time className="text-sm text-gray-500">
                    {new Date(email.sentAt).toLocaleString('ro-RO')}
                  </time>
                </div>
                <p className="text-gray-600 text-sm mb-2">{email.message}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className={email.opened ? 'text-green-600' : 'text-gray-400'}>
                    {email.opened ? 'Opened' : 'Not opened'}
                  </span>
                  {email.opened && email.openedAt && (
                    <span className="text-gray-500">
                      Opened at: {new Date(email.openedAt).toLocaleString('ro-RO')}
                    </span>
                  )}
                </div>
              </div>
            ))}
            {(!lead.emailHistory || lead.emailHistory.length === 0) && (
              <div className="text-center py-4 text-gray-500">
                No emails sent yet
              </div>
            )}
          </div>
        </section>

        {/* Notes Section */}
        <section>
          <Notes 
            notes={lead.notes} 
            onAddNote={(content) => onAddNote(lead._id, content)}
          />
        </section>

        {/* Additional Information */}
        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h3>
          <dl className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 px-4 py-3 rounded-lg">
              <dt className="text-sm font-medium text-gray-500">Created</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(lead.createdAt).toLocaleString('ro-RO')}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-3 rounded-lg">
              <dt className="text-sm font-medium text-gray-500">Last Contact</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {lead.lastContacted 
                  ? new Date(lead.lastContacted).toLocaleString('ro-RO')
                  : 'Never'
                }
              </dd>
            </div>
            {lead.message && (
              <div className="bg-gray-50 px-4 py-3 rounded-lg">
                <dt className="text-sm font-medium text-gray-500">Initial Message</dt>
                <dd className="mt-1 text-sm text-gray-900">{lead.message}</dd>
              </div>
            )}
          </dl>
        </section>
      </div>
    </div>
  );
};

export default LeadDetails;