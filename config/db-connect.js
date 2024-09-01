const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "emival",
    password: "Arara!*24",
    database: "node_study",
    insecureAuth: false,
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });