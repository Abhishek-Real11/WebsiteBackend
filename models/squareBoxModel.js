const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class SquareBox extends Model {}

SquareBox.init(
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
    },
    slug: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // url: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // order:{
    //     type:DataTypes.NUMBER,     
    // },
    title:{
        type: DataTypes.STRING,
    //   allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
    //   allowNull: false,
    },
    type:{
      type: DataTypes.STRING,
    }
    
  },
  {
    sequelize,
    modelName: "SquareBox",
    timestamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  }
);

module.exports = SquareBox;
