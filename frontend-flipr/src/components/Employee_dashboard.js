import React, { useState } from 'react';
import TaskForm from '../components/Taskform';

const Employee_dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <TaskForm addTask={addTask} />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
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

export default Employee_dashboard;
