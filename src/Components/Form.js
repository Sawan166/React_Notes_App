// Form.js
import React, { useState } from 'react';
import Notes from './Notes';

export default function Form({ notes, setNotes, setEditid }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const inputHandler = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setDesc(e.target.value);
    }
  };

  const addNotesHandler = (e) => {
    e.preventDefault();
    if (title !== '' && desc !== '') {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          title: title,
          desc: desc,
          id: new Date().getTime(),
        },
      ]);
      setTitle('');
      setDesc('');
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form className="border rounded p-4 bg-light shadow-sm">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your Title"
                value={title}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <textarea
                id="desc"
                rows="3"
                className="form-control"
                placeholder="Enter your description"
                value={desc}
                onChange={inputHandler}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={addNotesHandler}>
              Add Notes
            </button>
          </form>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="mb-3">Your Notes</h2>
            {notes.length === 0 ? (
              <div className="card mb-3">
                <div className="card-body">
                  <p className="card-text">No notes are available</p>
                </div>
              </div>
            ) : (
              notes.map((element) => (
                <Notes
                  element={element}
                  key={element.id}
                  notes={notes}
                  setNotes={setNotes}
                  setEditid={setEditid}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

