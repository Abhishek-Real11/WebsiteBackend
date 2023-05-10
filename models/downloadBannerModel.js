const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class DownloadBanner extends Model {}

DownloadBanner.init(
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
    subType: {
      type: DataTypes.STRING,
    },  
  },
  {
    sequelize,
    modelName: "DownloadBanner",
    timestamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  }
);

module.exports = DownloadBanner;
