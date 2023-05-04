const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class FantasyCricketPoints extends Model {}

FantasyCricketPoints.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.TEXT, //cricket
      defaultValue: "Cricket",
    },
    gameType: {
      type: DataTypes.TEXT, //T20
      defaultValue: false,
    },
    actionName: {
      type: DataTypes.TEXT, //Batting
      defaultValue: false,
    },
    actionPoints: {
      type: DataTypes.TEXT, //Points
      get: function () {
        return JSON.parse(this.getDataValue("actionPoints"));
      },
      set: function (val) {
        return this.setDataValue("actionPoints", JSON.stringify(val));
      },
    },
    description: {
      type: DataTypes.TEXT, //Batting
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "FantasyCricketPoints",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = FantasyCricketPoints;
