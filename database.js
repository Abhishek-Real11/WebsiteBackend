var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@123",
  database:"website_real11"
});

module.exports=con