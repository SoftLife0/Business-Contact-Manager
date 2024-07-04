import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Verify = ({ secret, onSuccess }) => {
  const [token, setToken] = useState('');
  const [verified, setVerified] = useState(null);

  const verifyToken = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/verify-token', { token, secret });
      if (response.data.verified) {
        setVerified(true);
        onSuccess();
      } else {
        setVerified(false);
      }
    } catch (error) {
      console.error(error);
      setVerified(false);
    }
  };

  return (
    <div>
      <Form onSubmit={verifyToken}>
        <Form.Group>
          <Form.Label>2FA Token</Form.Label>
          <Form.Control
            name="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            type="text"
            placeholder="Enter 2FA Token"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4 w-100">
          Verify Token
        </Button>
      </Form>
      {verified !== null && (
        <p>{verified ? 'Token Verified!' : 'Token Verification Failed'}</p>
      )}
    </div>
  );
};

export default Verify;
