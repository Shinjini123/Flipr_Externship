import React from 'react';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles['dashboard-container']}>
      <h2 className={styles['dashboard-title']}>Admin Dashboard</h2>
      <div className={styles['dashboard-options']}>
        <h3 className={styles['option-title']}>Options:</h3>
        <ul className={styles['option-list']}>
          <li className={styles['option-item']}>View Employees</li>
          <li className={styles['option-item']}>Add Employee</li>
          <li className={styles['option-item']}>Manage Departments</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
