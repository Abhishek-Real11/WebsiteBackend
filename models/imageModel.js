const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class Image extends Model {
}

Image.init(
  {
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "inactivate",
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: "image", // We need to choose the model name,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Image;
