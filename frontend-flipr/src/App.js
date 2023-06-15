import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Employee_dashboard from './components/Employee/Employee_dashboard';
import TaskForm from './components/Employee/Taskform';

const App = () => {
  return (
   <>
   <TaskForm/>
   </>
  );
};

export default App;

