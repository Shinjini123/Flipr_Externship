import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/employee-list">
          <EmployeeList />
        </Route>
        <Route path="/add-employee">
          <AddEmployee />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
