const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class IndianT20League extends Model {
}

IndianT20League.init(
  {
   captain:{
    type:DataTypes.STRING,
    allowNull:false
   },
   team:{
    type:DataTypes.STRING,
    allowNull:false
   },
   coach:{
    type:DataTypes.STRING,
    allowNull:false
   },
   titles:{
    type:DataTypes.STRING
   },
   majorSignings:{
    type:DataTypes.STRING
   },
   teamlogo:{
    type: DataTypes.STRING,
   },
   playerlogo:{
    type: DataTypes.STRING,
   },
   status:{
    type:DataTypes.BOOLEAN,
    defaultValue: true,
   }
  },
 
  {
    sequelize, // We need to pass the connection instance
    modelName: "IndianT20League", // We need to choose the model name,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = IndianT20League;
