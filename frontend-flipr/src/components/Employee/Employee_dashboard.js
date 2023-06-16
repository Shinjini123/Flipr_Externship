import React, { useState } from 'react';
import TaskForm from './Taskform';
import styles from '../../styles/Employee_dashboard.module.css';

const EmployeeDashboard = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const currentDate = new Date();
    const taskDate = new Date(newTask.startTime);
    if (taskDate <= currentDate) {
      setTasks([...tasks, newTask]);
    } else {
      alert('Cannot add tasks for future dates.');
    }
  };


  return (
    <div className={styles.employeeDashboard}>
      <TaskForm addTask={addTask} />

      

      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.taskItem}>
            <strong>Description:</strong> {task.description}
            <br />
            <strong>Type:</strong> {task.type}
            <br />
            <strong>Start Time:</strong> {task.startTime}
            <br />
            <strong>Time Taken:</strong> {task.timeTaken} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDashboard;
