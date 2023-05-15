const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class UpcomingMatches extends Model {}

UpcomingMatches.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },  
    type: {
      type: DataTypes.STRING,
      defaultValue:"Upcoming Matches"
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    sequelize,
    modelName: "UpcomingMatches",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = UpcomingMatches;
