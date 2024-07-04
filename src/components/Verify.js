import React, {useState} from 'react'
import axios from 'axios'

const Verify = ({secret}) => {

    const [token, setToken] = useState('');
    const [verified, setVerified] = useState(null);

    const verifyToken = async(e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post   ('http://localhost:3001/verify-token', { token, secret });
            setVerified(response.data.verified);
        } catch (error) {
            console.error('There was an error verifying the token:', error);
        }
    }

  return (
    <div>
      <form onSubmit={verifyToken}>
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter your token"
        />
        <button type="submit">Verify Token</button>
      </form>
      {verified !== null && (
        <p>{verified ? 'Token Verified!' : 'Token Verification Failed'}</p>
      )}
    </div>
  )
}

export default Verify
