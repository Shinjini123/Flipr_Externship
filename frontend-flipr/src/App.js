import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Taskform from './components/Taskform'
import Employee_dashboard from './components/Employee_dashboard';

const App = () => {
  return (
   <>
   <Employee_dashboard/>
   </>
  );
};

export default App;

