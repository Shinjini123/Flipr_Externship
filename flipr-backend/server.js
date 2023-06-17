const express = require('express');
const app = express();
const authRoutes = require('./Routes/auth');
const employeesRoutes = require('./Routes/employee');
const tasksRoutes = require('./Routes/task'); 
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/employee', employeesRoutes);
app.use('/api/tasks', tasksRoutes); 
let employee = [
  { id: 1, name: 'John Doe',email:'john@gmail.com',contact:9432877103,department:"HR",password:"john" },
  { id: 2, name: 'Jane Smith',email:'jane@gmail.com',contact:945643279,department:"IT",password:"jane" },
  { id: 3, name: 'Michael Johnson',email:'mic@gmail.com',contact:943678542,department:"Marketing",password:"mic"  },
];
app.get('/employee', (req, res) => {
  res.json(employee);
});
app.post('/employee', (req, res) => {
  const { name, email,contact, department, joining, password, admin } = req.body;
  const newEmployee = { name, email,contact, department, joining, password, admin };
  employee.push(newEmployee);
  res.status(201).json(newEmployee);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
