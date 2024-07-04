import React, {useState} from 'react'
import axios from 'axios'
import Verify from './Verify';


const Setup = () => {

    const [secret, setSecret] = useState('');
    const [qrCode, setQrCode] = useState('');

    const generateSecret = async () => {
        try {
            const response = await axios.post('http://localhost:3001/generate-secret');
            setSecret(response.data.secret);
            setQrCode(response.data.qrCode);
            console.log('QR code Url', response.data.qrCode);
        } catch (error) {
            console.error('There was a problem generating the secret:', error)
        }
    };

  return (
    <div>
      <button onClick={generateSecret} >Generate Secret</button>
      {qrCode && (
        <div>
            <img src={qrCode} alt="QR Code" />
            <p>Secret: {secret}</p>
            <Verify secret={secret} />
        </div>
      )

      }
    </div>
  )
}

export default Setup
