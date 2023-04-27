const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class Logo extends Model {}

Logo.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    slug: {
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
    url: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Logo",
    timestamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  }
);

module.exports = Logo;
