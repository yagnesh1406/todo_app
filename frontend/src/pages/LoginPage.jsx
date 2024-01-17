import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../services/auth';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLogin = async () => {
      const success = await auth.login(username, pwd);
      console.log(1);

    if (success) {
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
      <div class="col-md-4 mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div class="col-md-4 d-flex justify-content-center">
        <input
          class="form-control"
          type="password"
          placeholder="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <div>
        <button class="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>
      </form>
    </div>
  );
};

export default LoginPage;
