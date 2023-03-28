const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class Testimonial extends Model {}

Testimonial.init(
  {
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "activate",
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
    isActive:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    },
    isDeleted:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
   
  },
  {
    sequelize,
    modelName: "Testimonial",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Testimonial;
