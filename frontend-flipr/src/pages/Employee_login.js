import React, { useState} from 'react';
import axios from 'axios';

const Employee_login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      await axios.post(
        '/api/employees',
        {
          name,
          email,
          contactNumber,
          department,
          joiningDate,
          password,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );


      setName('');
      setEmail('');
      setContactNumber('');
      setDepartment('');
      setJoiningDate('');
      setPassword('');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
        <input type="text" placeholder="Joining Date" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default Employee_login;
