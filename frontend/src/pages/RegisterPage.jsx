// pages/RegisterPage.js
import React, { useState } from 'react';
import auth from '../services/auth';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [uname, setUname] = useState('');
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const handleRegister = async () => {
    const success = await auth.register(uname, username, pwd);

    if (success) {
        navigate('/login');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <div>
        <input
          type="text"
          placeholder="Uname"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
