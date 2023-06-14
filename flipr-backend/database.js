const mysql = require('mysql');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'jini@CC184',
  database: 'employee_management',
});

module.exports = pool;

