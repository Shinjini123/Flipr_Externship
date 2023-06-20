const express = require('express');
const app = express();
const authRoutes = require('./Routes/auth');
const employeeRoutes = require('./Routes/employee');
const tasksRoutes = require('./Routes/task');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/tasks', tasksRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

