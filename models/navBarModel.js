const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class NavBar extends Model {}

NavBar.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    listname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order:{
        type:DataTypes.INTEGER, 
        // unique:true   
    },    
    className: {
        type: DataTypes.STRING,
      //   allowNull: false,
      },
  },
  {
    sequelize,
    modelName: "NavBar",
    timestamps: true,
    createdAt: true, // don't add createdAt attribute
    updatedAt: true,
  }
);

module.exports = NavBar;
