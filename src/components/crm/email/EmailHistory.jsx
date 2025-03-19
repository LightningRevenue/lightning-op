import React from 'react';
import { FaEnvelope, FaEye, FaMousePointer, FaExclamationTriangle } from 'react-icons/fa';

const EmailHistory = ({ emails = [], className = '' }) => {
  const MetricBadge = ({ icon: Icon, label, value, color }) => (
    <div className={`flex items-center gap-1 text-sm ${color}`}>
      <Icon className="w-4 h-4" />
      <span>{label}: {value}</span>
    </div>
  );

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Email History</h2>

      <div className="space-y-6">
        {emails.map((email, index) => (
          <div
            key={index}
            className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{email.subject}</h3>
                <p className="text-sm text-gray-500">
                  Sent: {new Date(email.sentAt).toLocaleString('ro-RO')}
                </p>
              </div>
              <div className="flex gap-4">
                <MetricBadge
                  icon={FaEye}
                  label="Opened"
                  value={email.opened ? 'Yes' : 'No'}
                  color={email.opened ? 'text-green-600' : 'text-gray-400'}
                />
                <MetricBadge
                  icon={FaMousePointer}
                  label="Clicked"
                  value={email.clicked ? 'Yes' : 'No'}
                  color={email.clicked ? 'text-green-600' : 'text-gray-400'}
                />
                {email.bounced && (
                  <MetricBadge
                    icon={FaExclamationTriangle}
                    label="Bounced"
                    value="Yes"
                    color="text-red-600"
                  />
                )}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mt-2">
              <div className="prose prose-sm max-w-none">
                {email.message}
              </div>
            </div>

            {email.opened && (
              <div className="mt-2 text-sm text-gray-500">
                Opened at: {new Date(email.openedAt).toLocaleString('ro-RO')}
              </div>
            )}

            {email.clickedLinks && email.clickedLinks.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Clicked Links:</h4>
                <ul className="space-y-1">
                  {email.clickedLinks.map((link, i) => (
                    <li key={i} className="text-sm">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {link.url}
                      </a>
                      <span className="text-gray-500 ml-2">
                        ({new Date(link.clickedAt).toLocaleString('ro-RO')})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {emails.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <FaEnvelope className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>No emails sent yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailHistory;