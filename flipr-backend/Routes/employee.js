const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const pool = require('../database');
const encrypt = require('../Utils/encrypt');

router.post('/', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'shinjini123');

    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const { name, email, contactNumber, department, joiningDate, password } = req.body;

    const hashedPassword = encrypt.hashPassword(password);

    pool.query(
      'INSERT INTO employees (name, email, contact_number, department, joining_date, password) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, contactNumber, department, joiningDate, hashedPassword],
      (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Server error' });
        }

        res.json({ message: 'Employee added successfully' });
      }
    );
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
});

module.exports = router;
