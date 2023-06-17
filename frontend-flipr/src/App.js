import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Employee_dashboard from './components/Employee/Employee_dashboard';
import TaskForm from './components/Employee/Taskform';
import AdminDashboard from './components/Admin/Admin_dashboard';
import AppRoutes from './AppRoutes'
import AddEmployee from './components/Admin/AddEmployee';

const App = () => {
  return (
   <>
  <AddEmployee/>
   </>
  );
};

export default App;

