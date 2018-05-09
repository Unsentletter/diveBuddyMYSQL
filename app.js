const express = require('express');
require('dotenv').config();

const database = require('./Database/database');

const app = express();

database.connection.connect();

require("./models/user");

app.post('/users', (req, res) => {
  console.log('body', req.body)
});

const PORT = 8080;
app.listen(PORT);

console.log(`App running on PORT ${PORT}`);