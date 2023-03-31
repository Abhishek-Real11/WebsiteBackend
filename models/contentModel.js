const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class Content extends Model {}

Content.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
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
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
  },
  {
    sequelize,
    modelName: "Content",
    timestamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: false,
  }
);

module.exports = Content;
