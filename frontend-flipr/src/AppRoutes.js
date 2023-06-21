import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/Admin/Admin_dashboard';
import EmployeeDashboard from './components/Employee/Employee_dashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/admin_dashboard" element={<AdminDashboard/>} />
        <Route path="/employee_dashboard" element={<EmployeeDashboard/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

