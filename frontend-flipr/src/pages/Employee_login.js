import React, { useState } from "react";
import styles from "../styles/employeelogin.module.css";

function EmployeeLogin() {
  const [showForm, setShowForm] = useState(false);

  const handleAddEmployeeClick = () => {
    setShowForm(true);
  };

  return (
    <div className={styles["employee-login-container"]}>
      <button className={styles["add-employee-button"]} onClick={handleAddEmployeeClick}>Add Employee</button>
      {showForm && (
        <form className={styles["employee-login-form"]}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email ID:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" id="contactNumber" name="contactNumber" />

          <label htmlFor="department">Department:</label>
          <input type="text" id="department" name="department" />

          <label htmlFor="joiningDate">Joining Date:</label>
          <input type="date" id="joiningDate" name="joiningDate" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default EmployeeLogin;
