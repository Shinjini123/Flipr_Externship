import React from "react";
import axios from "axios";
import styles from "../../styles/AddEmployee.module.css";

const AddEmployee = (props) => {
  const d = new Date();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [joining, setJoining] = React.useState(d.getTime());
  const [password, setPassword] = React.useState("");

  const sendEmployeeData = async (event) => {
    event.preventDefault();

    const admin = false;
    const data = { name, email, contact, department, joining, password, admin };

    try {
      const response = await axios.post("http://localhost:5000/employee", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);

      if (response.data === "Employee added to database successfully") {
        alert("Employee added to database successfully");
        props.refreshData();
      } else {
        alert("Please try again with valid data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    props.setIsAddEmployeeShown(false);
  };

  return (
    <div className={styles.modal}>
      <button className={styles.cancel} onClick={closeModal}></button>
      <div className={styles.addTask}>
        <span>
          <h3 className={styles.addNew}>Add New Employee</h3>
        </span>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <label htmlFor="date">Joining Date</label>
          <input
            type="date"
            value={joining}
            onChange={(e) => setJoining(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={sendEmployeeData} className={styles.button}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
