import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import { Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Note</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/add" element={<AddNoteForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
