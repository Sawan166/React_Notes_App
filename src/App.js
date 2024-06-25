// App.js
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Modal from './Components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes, setNotes] = useState(getNotesFromLs);
  const [editid, setEditid] = useState(null);

  function getNotesFromLs() {
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes ? notes : [];
  }

  // Update local storage whenever notes change
  React.useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Navbar />
      <div className="container my-3">
        <Form notes={notes} setNotes={setNotes} setEditid={setEditid} />
        <Modal editid={editid} notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;


