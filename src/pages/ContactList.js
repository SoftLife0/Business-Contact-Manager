import React, { useState } from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, removeContact, editContact }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const handleRemoveContact = (id) => {
    setSelectedContactId(id);
    setModalOpen(true);
  };

  const confirmRemoveContact = () => {
    removeContact(selectedContactId);
    setModalOpen(false);
    setSelectedContactId(null);
  };

  const cancelRemoveContact = () => {
    setModalOpen(false);
    setSelectedContactId(null);
  };

  const handleEditContact = (id) => {
    editContact(id);
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
      <div className='ui celled list'>
          {renderContactList}
      </div>

      {/* Modal for Confirming Contact Removal */}
      {modalOpen && (
        <div className="ui basic modal active" aria-hidden={!modalOpen}>
          <div className="ui icon header">
            <i className="trash icon"></i>
            Confirm Deletion
          </div>
          <div className="content">
            <p>Are you sure you want to delete this contact?</p>
          </div>
          <div className="actions">
            <div className="ui red basic cancel inverted button" onClick={cancelRemoveContact}>
              <i className="remove icon"></i>
              No
            </div>
            <div className="ui green ok inverted button" onClick={confirmRemoveContact}>
              <i className="checkmark icon"></i>
              Yes
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactList;
