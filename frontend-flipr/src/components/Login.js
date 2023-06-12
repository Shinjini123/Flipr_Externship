import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/login.module.css';
import Dashboard from '../components/Dashboard';
import Employee_dashboard from '../components/Employee_dashboard';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', { username, password });
      const { token, role } = response.data;

      localStorage.setItem('token', token);
      setLoggedIn(true);
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

          <label className={styles['form-label']}>Role</label>
          <select className={styles['form-select']} value={role} onChange={handleRoleChange}>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>

          <button type="submit" className={styles['login-button']}>
            Login
          </button>
        </form>
      </div>

 
  );
};

export default Login;

