import React, { useState } from 'react';
import styles from '../styles/Taskform.module.css'; 

const TaskForm = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState('');
  const [taskType, setTaskType] = useState('');
  const [startTime, setStartTime] = useState('');
  const [timeTaken, setTimeTaken] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      description: taskDescription,
      type: taskType,
      startTime,
      timeTaken,
    };
    addTask(newTask);
    setTaskDescription('');
    setTaskType('');
    setStartTime('');
    setTimeTaken(0);
  };

  return (
    <form className={styles['task-form']} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskDescription">Task Description:</label>
        <input
          type="text"
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="taskType">Task Type:</label>
        <select
          id="taskType"
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
        >
          <option value="">Select a type</option>
          <option value="breaks">Breaks</option>
          <option value="meetings">Meetings</option>
          <option value="work">Work</option>
        </select>
      </div>
      <div>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="datetime-local"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="timeTaken">Time Taken (in minutes):</label>
        <input
          type="number"
          id="timeTaken"
          value={timeTaken}
          onChange={(e) => setTimeTaken(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
