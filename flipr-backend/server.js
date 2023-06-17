const express = require('express');
const app = express();
const authRoutes = require('./Routes/auth');
const employeesRoutes = require('./Routes/employee');
const tasksRoutes = require('./Routes/task'); // Import the new tasks route
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeesRoutes);
app.use('/api/tasks', tasksRoutes); // Add the tasks route
let employees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Michael Johnson' },
];
app.get('/employees', (req, res) => {
  res.json(employees);
});
app.post('/employees', (req, res) => {
  const { id, name } = req.body;
  const newEmployee = { id, name };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
