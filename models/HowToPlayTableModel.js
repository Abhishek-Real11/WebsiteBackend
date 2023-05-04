const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class HowToPlayTable extends Model {}

HowToPlayTable.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    playerType: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    min: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    max: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
    subType: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    sequelize,
    modelName: "HowToPlayTable",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = HowToPlayTable;
