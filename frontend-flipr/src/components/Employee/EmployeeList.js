import React from 'react';
import styles from '../../styles/EmployeeList.module.css';

const EmployeeList = ({ employees, onEmployeeClick }) => {
  return (
    <div className={styles.employeeList}>
      <h2 className={styles.listTitle}>Employee List</h2>
      <ul className={styles.list}>
        {employees.map((employee) => (
          <li
            key={employee.id}
            className={styles.listItem}
            onClick={() => onEmployeeClick(employee)}
          >
            {employee.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

