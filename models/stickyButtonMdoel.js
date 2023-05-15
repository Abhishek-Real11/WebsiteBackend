const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class StickyButton extends Model {}

StickyButton.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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

    },
  },
  {
    sequelize,
    modelName: "StickyButton",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = StickyButton;
