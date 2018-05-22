exports.register = function(req, res) {
  console.log("req", req.body);
  const today = new Date();
  const users = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "email": req.body.email,
    "password": req.body.password,
    "created": today,
    "modified": today
  };
  connection.query('INSERT INTO users SET ?', users, function(error, results, fields) {
    if(error) {
      console.log("error: ", error);
      res.send({
        "code": 400,
        "failed": "error occured"
      })
    }
    console.log("results register", results);
    res.send({
      "code": 200,
      "success": "user registered successfully"
    });
  })
};

exports.login = function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  connection.query('SELECT * FROM users WHERE email = ?', [email], function(error, results, fields) {
    if(error) {
      console.log("error occured", error)
      res.send({
        "code": 400,
        "failed": "error occured"
      })
    }

    if(results.length > 0) {
      if([0].password === password) {
        res.send({
          "code": 200,
          "success": "login successful"
        });

        res.send({
          "code": 204,
          "success": "email and password does not match"
        })
      }
    }

    res.send({
      "code": 204,
      "success": "Email does not exist"
    })
  })
};