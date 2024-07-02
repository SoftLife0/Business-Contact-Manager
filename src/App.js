import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactList from './pages/ContactList';
import AddContact from './pages/AddContact';
import './App.css'
import Login from './components/Login';
import Register from './components/Register';



function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const retrivaContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivaContacts) setContacts(retrivaContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContactHandler = (id) => {
    const contactToEdit = contacts.find(contact => contact.id === id);
    setEditingContact(contactToEdit);
  };

  const updateContactHandler = (updatedContact) => {
    setContacts(contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    ));
    setEditingContact(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} removeContact={removeContactHandler} editContact={editContactHandler} />} />
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/edit/:id" element={<AddContact editingContact={editingContact} updateContactHandler={updateContactHandler} />} />
        <Route path="/login" element={<Login contacts={contacts} removeContact={removeContactHandler} editContact={editContactHandler} />} />
        <Route path="/register" element={<Register contacts={contacts} removeContact={removeContactHandler} editContact={editContactHandler} />} />
      </Routes>
    </Router>
  );
}

export default App;
