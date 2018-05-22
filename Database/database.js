const mysql = require('mysql');

// Connects to the DB
const connection = mysql.createConnection({
  host: 'localhost',
  // DB Username
  user: 'root',
  // DB password saved in .env
  password: process.env.DB_PASSWORD,
  // DB name
  database: 'dive_buddy'
});

module.exports.connection = connection;