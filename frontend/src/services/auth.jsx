const API_BASE_URL = 'http://localhost:8000/api/auth';

const auth = {
  login: async (username, pwd) => {
    console.log(username, pwd);
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, pwd }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('authToken', data.token);
      console.log('Login successful. Token:', data.token);
      return true;
    } else {
      console.error('Login failed.');
      return false;
    }
  },

  register: async (uname, username, pwd) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uname, username, pwd }),
    });

    if (response.ok) {
      console.log('Registration successful.');
      return true;
    } else {
      console.error('Registration failed.');
      return false;
    }
  },
};

export default auth;
