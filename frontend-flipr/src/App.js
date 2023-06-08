import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import AddEmployee from './pages/Employee_login';
import Employee_login from './pages/Employee_login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/add-employee" component={Employee_login} />
      </Switch>
    </Router>
  );
};

export default App;

