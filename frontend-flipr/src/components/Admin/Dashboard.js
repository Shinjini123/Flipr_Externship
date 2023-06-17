import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Dashboard.module.css';

const Dashboard = () => {
  const [activeOption, setActiveOption] = useState('');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className={styles['dashboard-container']}>
      <h2 className={styles['dashboard-title']}>Admin Dashboard</h2>
      <div className={styles['dashboard-options']}>
        <h3 className={styles['option-title']}>Options:</h3>
        <ul className={styles['option-list']}>
          <li
            className={`${styles['option-item']} ${activeOption === 'view-employees' && styles.active}`}
            onClick={() => handleOptionClick('view-employees')}
          >
            <Link to="/view-employees">View Employees</Link>
          </li>
          <li
            className={`${styles['option-item']} ${activeOption === 'add-employee' && styles.active}`}
            onClick={() => handleOptionClick('add-employee')}
          >
            <Link to="/add-employee">Add Employee</Link>
          </li>
          <li
            className={`${styles['option-item']} ${activeOption === 'manage-departments' && styles.active}`}
            onClick={() => handleOptionClick('manage-departments')}
          >
            <Link to="/manage-departments">Manage Departments</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
