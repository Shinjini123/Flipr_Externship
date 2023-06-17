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