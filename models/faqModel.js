const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class Faqs extends Model {}

Faqs.init(
  {
    ques: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "inactivate",
    },
    type: {
      type: DataTypes.STRING,
    },
    subType: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    sequelize,
    modelName: "faqs",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Faqs;
