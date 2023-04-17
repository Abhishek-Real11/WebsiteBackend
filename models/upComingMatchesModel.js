const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class UpComingMatches extends Model {}

UpComingMatches.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    team1_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    team2_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    team1_Logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    team2_Logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    league_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Schedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "UpComingMatches",
    timestamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  }
);

module.exports = UpComingMatches;
