const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class IndianT20League extends Model {}

IndianT20League.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    captain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coach: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titles: {
      type: DataTypes.STRING,
    },
    majorSignings: {
      type: DataTypes.STRING,
    },
    teamlogo: {
      type: DataTypes.STRING,
    },
    playerlogo: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.TEXT,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  color1:{
    type: DataTypes.TEXT,
  },
  color2:{
    type: DataTypes.TEXT,
  },
  color3:{
    type: DataTypes.TEXT,
  }
  },
  {
    sequelize,
    modelName: "IndianT20League",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = IndianT20League;
