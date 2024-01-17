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
      <div class="col-md-4 mb-3">
        <input
          type="text"
          placeholder="Uname"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
      </div>
      <div class="col-md-4 mb-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div class="col-md-4 mb-3">
        <input
          type="password"
          placeholder="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <div>
        <button class="btn btn-primary" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
