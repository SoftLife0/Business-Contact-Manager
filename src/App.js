import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactList from './pages/ContactList';
import AddContact from './pages/AddContact';
import './App.css'


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
    <div className='ui container'>
      <AddContact 
        addContactHandler={addContactHandler}
        editingContact={editingContact}
        updateContactHandler={updateContactHandler}
      />
      <ContactList
        contacts={contacts}
        removeContact={removeContactHandler}
        editContact={editContactHandler}
      />
    </div>
  );
}

export default App;
