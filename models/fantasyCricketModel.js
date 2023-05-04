const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class FantasyCricket extends Model {}

FantasyCricket.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
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
      defaultValue:"Fantasy Cricket"
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    //  defaultValue:"Fantasy Cricket
    },
    subType:{
      type: DataTypes.STRING,
      defaultValue:null
    }
  },
  {
    sequelize,
    modelName: "FantasyCricket",
    timestamps: true,
    createdAt: true, 
    updatedAt: true,
  }
);

module.exports = FantasyCricket;
