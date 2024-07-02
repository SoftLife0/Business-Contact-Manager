import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import logo from '../img/call1.png'

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary" sticky='top'>
      <>
        <Navbar.Brand href="#home" style={{ fontSize: '23px', fontWeight: '500'}}>
          {/* <img
              alt=""
              src={logo}
              width="100"
              height="60"
              className="d-inline-block align-center"
            />{' '} */}
            Contact Manager 
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Button style={{ background: '#da181e', fontSize: '18px', border:'none', padding: '10px 22px'}}>
          Login
        </Button>
        </Navbar.Collapse>
      </>
    </Navbar>
  )
}

export default Header;
