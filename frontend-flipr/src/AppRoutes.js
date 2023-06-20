import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../src/components/Admin/Admin_dashboard';
import EmployeeDashboard from '../src/components/Employee/Employee_dashboard';
import Login from '../src/components/Login';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin_dashboard" component={Dashboard} />
        <Route path="/employee_dashboard" component={EmployeeDashboard} />
        <Route path="/" component={Login} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
