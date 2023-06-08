import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', { username, password });
      const { token } = response.data;

      localStorage.setItem('token', token);

      // Redirect to the desired page
      // Replace '/dashboard' with the appropriate route for your application
      window.location.href = '/add-employee';
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <label>Username</label>
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <label>Password</label>
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
