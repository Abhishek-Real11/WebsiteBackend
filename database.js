var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port:'3306',
    database: 'website_real11',
    user: 'root',
    password: 'root@123'
});

module.exports = connection;