const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class FantasyCricketLeague extends Model {}

FantasyCricketLeague.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
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
      defaultValue:"Fantasy Cricket League"
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"fantasy-cricket-league"
    },
    subType:{
      type: DataTypes.STRING,
      defaultValue:null
    }
  },
  {
    sequelize,
    modelName: "FantasyCricketLeague",
    timestamps: true,
    createdAt: true, 
    updatedAt: true,
  }
);

module.exports = FantasyCricketLeague;
