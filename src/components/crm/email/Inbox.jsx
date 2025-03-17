import React, { useState } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';

const Inbox = ({ onClose }) => {
  const [email, setEmail] = useState({
    to: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch('http://localhost:5000/api/crm/send-general-email', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send email');
      }

      alert('Email sent successfully!');
      setEmail({ to: '', subject: '', message: '' });
      onClose();
    } catch (err) {
      console.error('Error sending email:', err);
      alert(err.message || 'Error sending email');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">New Email</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">
              To
            </label>
            <input
              type="email"
              id="to"
              required
              value={email.to}
              onChange={(e) => setEmail(prev => ({ ...prev, to: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="recipient@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              value={email.subject}
              onChange={(e) => setEmail(prev => ({ ...prev, subject: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="Enter email subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="8"
              required
              value={email.message}
              onChange={(e) => setEmail(prev => ({ ...prev, message: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="Write your message here..."
            ></textarea>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <FaPaperPlane className="mr-2 -ml-1 h-4 w-4" />
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default Inbox;