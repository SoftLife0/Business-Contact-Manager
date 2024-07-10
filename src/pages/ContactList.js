import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactCard from '../components/ContactCard';
import Header from '../components/Header';
import { Card } from 'react-bootstrap';


const ContactList = ({ contacts, removeContact, editContact }) => {

  const LOCAL_STORAGE_KEY = "user";
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

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

      <div className='ui container'>
        <Card>
          <Card.Body> Welcome Back {userName.username}👋 <br/> Please login to add new Contact</Card.Body>
        </Card>

        {contacts.length === 0 ? (
          <div className='ui container celled list'>
            No contacts available.
            <a href="/add">Add New contact</a>
          </div>
        ) : (
          <div className='ui container celled list'>
            {renderContactList}
          </div>
        )}
        
      </div>

      
    </>
  );
};

export default ContactList;
