const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class Faqs extends Model {
}

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
      type:{
        type: DataTypes.STRING
      },
      subType:{
        type: DataTypes.STRING
      }
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: "faqs", // We need to choose the model name,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Faqs;
