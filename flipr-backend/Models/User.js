const pool = require('../database');

class User {
  static findByUsername(username, callback) {
    pool.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.length === 0) {
        return callback(null, null);
      }
      const user = results[0];
      callback(null, user);
    });
  }
}

module.exports = User;
