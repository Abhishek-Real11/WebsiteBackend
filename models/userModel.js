const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    otp: {
      type: DataTypes.STRING,
    },
    roles: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
  },
  {
    sequelize,
    modelName: "user",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = User;
