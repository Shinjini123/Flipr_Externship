import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/login.module.css';

const login = () => {
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
      window.location.href = '/add-employee';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-title']}>Login</h1>
      <form className={styles['login-form']} onSubmit={handleSubmit}>
        <label className={styles['form-label']}>Username</label>
        <input
          className={styles['form-input']}
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <label className={styles['form-label']}>Password</label>
        <input
          className={styles['form-input']}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className={styles['login-button']}>Login</button>
      </form>
    </div>
  );
};

export default login;
