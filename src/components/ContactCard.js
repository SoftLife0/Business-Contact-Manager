import React from 'react'
import defaultUserIcon from "../img/user.png";

const ContactCard = (props) => {
const {id, email, name, image} = props.contact;
  return (
    <div className='item contact-list'>
        <img 
          className='ui avatar image' 
          src={image || defaultUserIcon} 
          alt ="user"
          style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <div className='contact'>
        <div className='header'>{ name}</div>
            <div>{ email}</div>
        </div>

        <i
          className='trash alternate outline icon'
          style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
          onClick={() => props.removeContact(id)}
          aria-label={`Remove contact ${name}`}
          title="Remove Contact">
        </i>

        <i
          className='edit alternate outline icon'
          style={{ color: "blue", marginTop: "7px", cursor: "pointer" }}
          onClick={() => props.editContact(id)}
          aria-label={`Edit contact ${name}`}
          title="Edit Contact">
        </i>
        
    </div>
  );
}

export default ContactCard;