const { Sequelize } = require("sequelize");

const db = new Sequelize("website_real11", "root", "root@123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = db;
