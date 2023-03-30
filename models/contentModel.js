const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class Content extends Model {}

Content.init(
  {
    title: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Content",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Content;
