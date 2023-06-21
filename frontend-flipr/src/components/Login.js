import React, { useState } from 'react';
import styles from '../styles/login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform authentication or other login logic if required

    // Redirect to the selected role's dashboard using history.push
    if (selectedRole === 'admin') {
      window.location.href = '/admin_dashboard';
    } else if (selectedRole === 'employee') {
      window.location.href = '/employee_dashboard';
    }
  };

  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-title']}>Login</h1>
      <form className={styles['login-form']} onSubmit={handleLogin}>
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

        <div className={styles['role-buttons']}>
          <button
            type="button"
            className={styles['role-button']}
            onClick={() => setSelectedRole('admin')}
          >
            Admin
          </button>
          <button
            type="button"
            className={styles['role-button']}
            onClick={() => setSelectedRole('employee')}
          >
            Employee
          </button>
        </div>

        <button type="submit" className={styles['login-button']}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
