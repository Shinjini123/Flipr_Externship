const bcrypt = require('bcrypt');

const encrypt = {
  hashPassword: (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  },
};

module.exports = encrypt;
