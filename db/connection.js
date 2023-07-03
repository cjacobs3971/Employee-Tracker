const mysql = require('mysql2/promise');
const { password } = require('./config');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password,
  database: 'employee_db',
});

module.exports = connection;