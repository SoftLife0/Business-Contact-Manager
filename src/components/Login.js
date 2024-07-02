import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const LOCAL_STORAGE_KEY = "user";
  const [user, setUser] = useState({
      email: "",
      password: ""
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if ( user.email === loggedUser.email && user.password === loggedUser.password) 
      {
      console.log("Attempting to Login User");
      localStorage.setItem("logged in", true);
      navigate("/");      
      } else {
          alert("Wrong Credentials Try Again");
      }
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
            <div className="d-flex justify-content-center align-items-center mb-4" style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#6c757d', color: 'white', margin: '0 auto' }}>
                <FaLock />
            </div>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                  name="email"
                  value={user.email}
                  onChange={(e) =>
                      setUser({
                          ...user,
                          [e.target.name]: e.target.value,
                      })
                  }
                  type="email"
                  placeholder="Enter Email Address"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={user.password}
                onChange={(e) =>
                    setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                    })
                }
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 w-100">
                Login
            </Button>
            </form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
