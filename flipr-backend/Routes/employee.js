let employee = [
  { id: 1, name: 'John Doe',email:'john@gmail.com',contact:9432877103,department:"HR",password:"john" },
  { id: 2, name: 'Jane Smith',email:'jane@gmail.com',contact:945643279,department:"IT",password:"jane" },
  { id: 3, name: 'Michael Johnson',email:'mic@gmail.com',contact:943678542,department:"Marketing",password:"mic"  },
];
app.get('/employee', (req, res) => {
  res.json(employee);
});
app.post('/employees', (req, res) => {
  const { name, email,contact, department, joining, password, admin } = req.body;
  const newEmployee = { name, email, contact, department, joining, password, admin};
  employee.push(newEmployee);
  res.status(201).json(newEmployee);
});