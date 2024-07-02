import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Register = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', background: 'red' }}>
      <Row>
        <Col>
            <h2 className="text-center mb-4">Register</h2>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 w-100">
                Login
            </Button>
            </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
