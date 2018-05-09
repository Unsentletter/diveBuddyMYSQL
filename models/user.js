// USER consists of username, email, password, first_name, last_name

const database = require('../Database/database');

const user = 'INSERT INTO users (email, password, username) VALUES ("email@email.com", "password", "SomeName")';

const search = 'SELECT * FROM users';

database.connection.query(search, function (error, results, fields) {
  if (error) throw error;
  console.log('It worked'+ results)
});