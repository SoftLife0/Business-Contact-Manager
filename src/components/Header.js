import React, { useState, useEffect } from 'react'
import { Container, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedin');
    setIsLoggedIn(!!loggedIn);
  }, []);

  const handleLogin = () => {
    // Simulate login logic (replace with actual login logic)
    const loggedin = true; // Replace with your actual login check
    if (loggedin) {
      localStorage.setItem('loggedin', 'true');
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedin');
    setIsLoggedIn(false);
    navigate("/login")
  };

  return (
    <Navbar sticky='top' style={{background:'#fff'}}>
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: '23px', fontWeight: '500'}}>
            Contact Manager 
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        {isLoggedIn ? (
            <Button
              type='button'
              onClick={handleLogout}
              style={{ background: '#da181e', fontSize: '18px', border: 'none', padding: '10px 22px' }}
            >
              Logout
            </Button>
          ) : (
            <Button
              type='button'
              onClick={handleLogin}
              style={{ background: '#da181e', fontSize: '18px', border: 'none', padding: '10px 22px' }}
            >
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
