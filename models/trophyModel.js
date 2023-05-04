const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class Trophy extends Model {}

Trophy.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    verify: {
      type: DataTypes.TEXT,
    //   allowNull: false,
    },
    winTrophy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transfermoney: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    type: {
      type: DataTypes.STRING,
      defaultValue:"How-To-Play"
    },
    subType: {
      type: DataTypes.STRING,
      defaultValue:"How-To-Play"
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    sequelize,
    modelName: "Trophy",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = Trophy;
