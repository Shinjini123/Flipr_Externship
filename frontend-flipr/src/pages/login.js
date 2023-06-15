import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/login.module.css';
import Dashboard from '../components/Admin/Dashboard';
import Employee_login from '../pages/Employee_login';

const login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); 

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
  
      if (role === 'admin') {
        window.location.href = '/admin-dashboard';
      } else {
        window.location.href = '/employee-dashboard';
      }
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

      {role === 'admin' && <Dashboard />}
      {role === 'admin' && <Employee_login />}
    </div>
  );
};

export default login;
