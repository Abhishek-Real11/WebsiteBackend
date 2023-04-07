const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class Footer extends Model {}

Footer.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.TEXT,
    },
    subType: {
      type: DataTypes.TEXT,
    },
    address: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
    },
    concatNo: {
      type: DataTypes.TEXT,
    },
    social_media_name: {
      type: DataTypes.TEXT,
    },
    socialMeidaIcons: {
      type: DataTypes.TEXT,
    },
    socialMeidaHyperLinks: {
      type: DataTypes.TEXT,
    },
    paymentPartnerLogo: {
      type: DataTypes.TEXT,
    },
    paymentPartnerHyperLinks: {
      type: DataTypes.TEXT,
    },
    partnerName: {
      type: DataTypes.TEXT,
    },
    disclaimer: {
      type: DataTypes.TEXT,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Footer",
    timestamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  }
);

module.exports = Footer;
