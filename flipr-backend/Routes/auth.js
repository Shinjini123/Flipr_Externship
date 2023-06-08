const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const pool = require('../database');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  pool.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (bcryptErr, bcryptResult) => {
      if (bcryptErr) {
        console.error(bcryptErr);
        return res.status(500).json({ message: 'Server error' });
      }

      if (!bcryptResult) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Authentication successful
      res.json({ message: 'Login successful' });
    });
  });
});

module.exports = router;
