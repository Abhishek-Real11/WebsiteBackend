const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class HTPSteps extends Model {}

HTPSteps.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vrline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // order: {
    //   type: DataTypes.STRING,
    //   // allowNull: false,
    // },
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
    modelName: "HTPSteps",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = HTPSteps;
