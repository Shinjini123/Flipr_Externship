import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Employee_login from './pages/Employee_login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={<Login/>} />
        <Route path="/add-employee" component={<Employee_login/>} />
      </Routes>
    </Router>
  );
};

export default App;

