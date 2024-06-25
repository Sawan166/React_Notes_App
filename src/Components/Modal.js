// Modal.js
import React, { useState, useEffect } from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

export default function Modal({ editid, notes, setNotes }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (editid !== null) {
      const noteToEdit = notes.find((note) => note.id === editid);
      if (noteToEdit) {
        setTitle(noteToEdit.title);
        setDesc(noteToEdit.desc);
        setShow(true);
      }
    }
  }, [editid, notes]);

  const handleSave = () => {
    setNotes(
      notes.map((note) =>
        note.id === editid ? { ...note, title, desc } : note
      )
    );
    setShow(false);
    setTitle('');
    setDesc('');
  };

  const handleClose = () => {
    setShow(false);
    setTitle('');
    setDesc('');
  };

  return (
    <BootstrapModal show={show} onHide={handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>Edit Note</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save changes
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}
