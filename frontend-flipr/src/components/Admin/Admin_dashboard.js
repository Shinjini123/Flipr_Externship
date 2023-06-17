import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeList from '../Employee/EmployeeList';
import styles from '../../styles/AdminDashboard.module.css';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/employees');
      const { data } = response;
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleBackClick = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className={styles.adminDashboard}>
      {selectedEmployee ? (
        <>
          <button className={styles.backButton} onClick={handleBackClick}>
            Back to Employee List
          </button>
          {/* Display EmployeeDetails component for the selected employee */}
        </>
      ) : (
        <EmployeeList employees={employees} onEmployeeClick={handleEmployeeClick} />
      )}
    </div>
  );
};

export default AdminDashboard;
