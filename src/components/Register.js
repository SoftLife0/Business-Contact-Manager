import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FaLock } from 'react-icons/fa';
import axios from 'axios';
import Verify from './Verify';

const Register = () => {

    const LOCAL_STORAGE_KEY = "user";
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [secret, setSecret] = useState('');
    const [qrCode, setQrCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/generate-secret');
            setSecret(response.data.secret);
            setQrCode(response.data.qrCode);
            const userWithSecret = { ...user, secret: response.data.secret };
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userWithSecret));
            alert("Registered successfully! Please configure your 2FA.");
            navigate("/login");

        } catch (error) {
            console.error('There was a problem generating the secret keys', error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', }}>
            <Row>
                <Col>
                    <div className="d-flex justify-content-center align-items-center mb-4" style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#6c757d', color: 'white', margin: '0 auto' }}>
                        <FaLock />
                    </div>
                    <h2 className="text-center mb-4">Register</h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                name="username"
                                value={user.username}
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                type="name"
                                placeholder="Enter Username"
                            />
                        </Form.Group>

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

                        <Form.Group className="mt-3">
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
                            Register
                        </Button>
                    </Form>

                    {qrCode && (
                        <div>
                            <img src={qrCode} alt="QR Code" />
                            <p>Secret: {secret}</p>
                            <Verify secret={secret} />
                        </div>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default Register;
