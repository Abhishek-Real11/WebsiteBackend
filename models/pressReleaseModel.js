const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class PressRelease extends Model {}

PressRelease.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content:{
      type: DataTypes.TEXT,
      defaultValue:null
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue:"Press Release"
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "PressRelease",
    timestamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  }
);

module.exports = PressRelease;
