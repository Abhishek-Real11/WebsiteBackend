const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class FooterDisclaimer extends Model {}

FooterDisclaimer.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    disclaimer: {
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
     defaultValue:"Footer"
    },
    // slug: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique:true
    // },
  },
  {
    sequelize,
    modelName: "FooterDisclaimer",
    timestamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  }
);

module.exports = FooterDisclaimer;
