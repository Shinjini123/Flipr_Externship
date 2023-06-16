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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
