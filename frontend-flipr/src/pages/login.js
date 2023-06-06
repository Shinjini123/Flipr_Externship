import React, { useState } from 'react';
import styles from '../styles/login.module.css';

function Login() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isAdminButtonVisible, setIsAdminButtonVisible] = useState(false);
  const [isEmployeeButtonVisible, setIsEmployeeButtonVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginClicked(true);
  };

  const handleAdminClick = () => {
    // Perform actions for admin login
    console.log("Admin login clicked");
  };

  const handleEmployeeClick = () => {
    // Perform actions for employee login
    console.log("Employee login clicked");
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-form']}>
        <form>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" placeholder="Enter Username" />

          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="Enter password" />

          <button onClick={handleLoginClick}>Log in</button>

          {isLoginClicked && (
            <div className={styles['button-container']}>
              {isAdminButtonVisible && <button onClick={handleAdminClick}>Admin</button>}
              {isEmployeeButtonVisible && <button onClick={handleEmployeeClick}>Employee</button>}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
