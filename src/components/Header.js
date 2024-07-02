import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
// import logo from '../img/call1.png'

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary" sticky='top'>
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: '23px', fontWeight: '500'}}>
            Contact Manager 
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Button style={{ background: '#da181e', fontSize: '18px', border:'none', padding: '10px 22px'}}>
          Login
        </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
