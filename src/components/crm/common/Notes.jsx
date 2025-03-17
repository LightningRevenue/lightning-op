import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';

const Notes = ({ notes, onAddNote, className }) => {
  const [newNote, setNewNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      onAddNote(newNote);
      setNewNote('');
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Notes</h3>
        
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Add a note..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={!newNote.trim()}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <FaSave />
              Save Note
            </button>
          </div>
        </form>

        <div className="space-y-3">
          {notes?.map((note, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">{note.content}</p>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>{note.createdBy}</span>
                <span>{new Date(note.createdAt).toLocaleString('ro-RO')}</span>
              </div>
            </div>
          )).reverse()}
        </div>
      </div>
    </div>
  );
};

export default Notes;