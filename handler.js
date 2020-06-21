'use strict';

module.exports.getCustomers = async event => {
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: "the endpoint in aws rds",
    user: "admin",
    password: "your password",
    database: "your myqsl schema"
  });

  const p = new Promise((resolve) => {
    connection.query("SELECT * FROM customers", function(err, results) {
      resolve(results);
    })
  })

  const result = await p;

  return {
    statusCode: 200,
    body: JSON.stringify({results: result})
  };
};
