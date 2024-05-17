import React, { useState } from 'react';
import axios from 'axios';

const AddNoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/notes', { title, content })
      .then(response => {
        onAdd(response.data);
        setTitle('');
        setContent('');
      })
      .catch(error => {
        console.error('Error adding note', error);
      });
  };

  return (
    <div>
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNoteForm;
