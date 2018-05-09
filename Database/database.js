const mysql = require('mysql');
//require('dotenv').config();

console.log(process.env.DB_PASSWORD)

const connection = mysql.createConnection({
  host: 'localhost',
  // dbUsername
  user: 'root',
  password: process.env.DB_PASSWORD,
  // database name
  database: 'dive_buddy'
});

module.exports.connection = connection;