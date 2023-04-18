const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class HowToPlay extends Model {}

HowToPlay.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    order: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.TEXT,
    },
    editor: {
      type: DataTypes.TEXT,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    type: {
      type: DataTypes.TEXT,
    },
    subType: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "HowToPlay",
    timestamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  }
);

module.exports = HowToPlay;
