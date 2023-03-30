const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class Image extends Model {}

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
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    subType: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,  
    modelName: "image",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Image;
