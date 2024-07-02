import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultUserIcon from "../img/user.png";
import Header from '../components/Header';

function AddContact({ addContactHandler, editingContact, updateContactHandler }) {
  const navigate = useNavigate();
  const [contact, setContact] = useState({ image: '', name: '', email: '' });
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    }
  }, [editingContact]);

  const add = (e) => {
    e.preventDefault();
    if (contact.name === '' || contact.email === '' || contact.image === '') {
      alert('All the fields are mandatory!');
      return;
    }

    if (editingContact) {
      updateContactHandler(contact);
    } else {
      addContactHandler(contact);
    }
    setContact({ image: '', name: '', email: '' });
    navigate('/');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContact({ ...contact, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Header />
      <div className="ui container">
        <h2>{editingContact ? 'Edit Contact' : 'Add Contact'}</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Choose a Picture</label>
            <img 
              src={contact.image || defaultUserIcon} 
              alt="Avatar" 
              onClick={triggerFileInput}
              style={{ width: '200px', cursor: 'pointer' }} 
              title='Add Picture '
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </div>
          
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
            />
          </div>
          <button className="ui button blue">{editingContact ? 'Update' : 'Add'}</button>
        </form>
      </div>
    </>
  );
}

export default AddContact;
