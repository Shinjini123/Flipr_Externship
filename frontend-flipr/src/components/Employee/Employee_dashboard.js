import React, { useState } from 'react';
import TaskForm from './Taskform';
import styles from '../styles/EmployeeDashboard.module.css';
import { Pie } from 'react-chartjs-2';

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

      <div className={styles.chartContainer}>
        <Pie data={getTaskData()} />
      </div>

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
