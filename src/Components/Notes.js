// Notes.js
import React from 'react';

export default function Notes({ element, notes, setNotes, setEditid }) {
  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEdit = (id) => {
    setEditid(id);
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{element.title}</h5>
        <p className="card-text">{element.desc}</p>
        <button className="btn btn-danger me-2" onClick={() => handleDelete(element.id)}>Delete</button>
        <button className="btn btn-primary" onClick={() => handleEdit(element.id)}>Edit</button>
      </div>
    </div>
  );
}

