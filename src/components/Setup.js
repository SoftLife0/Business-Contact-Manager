import React, {useState} from 'react'
import axios from 'axios'
import Verify from './Verify';
// import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';


const Setup = () => {

    const navigate = useNavigate()
    const [secret, setSecret] = useState('');
    const [qrCode, setQrCode] = useState('');
    const [authButton, setAuthButton] = useState(false);

    const generateSecret = async () => {
        try {
            const response = await axios.post('http://localhost:3001/generate-secret');
            setSecret(response.data.secret);
            setQrCode(response.data.qrCode);
            console.log('QR code Url', response.data.qrCode);
            setAuthButton(true);
        } catch (error) {
            console.error('There was a problem generating the secret:', error)
        }
    };

    const handleVerificationSuccess = () => {
      localStorage.setItem("loggedin", JSON.stringify(true));
      navigate("/");
    };

  return (
    <div className='text-center'>
      {!authButton && (
        <button
          onClick={generateSecret}
          style={{ padding: '16px 22px', borderRadius: '10px' }}

        >
          Swipe to Set Up 2FA
        </button>
      )}
      {qrCode && (
        <div>
            <img src={qrCode} alt="QR Code" />
            <p>Secret: {secret}</p>
            <Verify secret={secret} onSuccess={handleVerificationSuccess}/>
        </div>
      )

      }
    </div>  
  )
}

export default Setup
