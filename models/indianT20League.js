const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class IndianT20League extends Model {}

IndianT20League.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
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
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },

  {
    sequelize,
    modelName: "IndianT20League",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = IndianT20League;
