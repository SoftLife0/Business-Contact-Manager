import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactCard from '../components/ContactCard';
import Header from '../components/Header';


const ContactList = ({ contacts, removeContact, editContact }) => {

  const navigate = useNavigate();
  const handleRemoveContact = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this contact?");
    if (isConfirmed) {
      removeContact(id);
    }
  };

  const handleEditContact = (id) => {
    editContact(id);
    navigate(`/edit/${id}`)
  };

  if (contacts.length === 0) {
    return <div>No contacts available.</div>;
  }

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        removeContact={handleRemoveContact}
        editContact={handleEditContact}
      />
    );
  });


  return (
    <>
      <Header />
      <div className='ui container celled list'>
          {renderContactList}
      </div>

      
    </>
  );
};

export default ContactList;
