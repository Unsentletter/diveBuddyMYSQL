const express = require('express');
const login = require('./Routes/loginRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();

// const database = require('./Database/database');

const app = express();
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const router = express.Router();

// TestRoute
router.get('/', function(req, res) {
  res.json({ message: "Whose a good boy?????"})
});

// Route to handle user registration
router.post('/register', login.register);
router.post('/login', login.login);
app.use('/api', router);

// database.connection.connect();

// require("./Models/user");

const PORT = 8080;
app.listen(PORT);

console.log(`App running on PORT ${PORT}`);