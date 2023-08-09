const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yash_123',
  password: 'sql_123',
  database: 'Work'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server!');
});

module.exports = connection;