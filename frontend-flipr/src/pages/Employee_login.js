import React, { useState } from "react";

function Employee_login() {
  const [showForm, setShowForm] = useState(false);

  const handleAddEmployeeClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <button onClick={handleAddEmployeeClick}>Add Employee</button>
      {showForm && (
        <form>  
        <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
      />
          <label htmlFor="email">Email ID:</label>
      <input
        type="email"
        id="email"
        name="email"
      />

      <label htmlFor="contactNumber">Contact Number:</label>
      <input
        type="tel"
        id="contactNumber"
        name="contactNumber"
      />

      <label htmlFor="department">Department:</label>
      <input
        type="text"
        id="department"
        name="department"
       
      />

      <label htmlFor="joiningDate">Joining Date:</label>
      <input
        type="date"
        id="joiningDate"
        name="joiningDate"
        
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
      />
          
  <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Employee_login;
