const sequelize = require("../config/db.js");

const { DataTypes, Model } = require("sequelize");

class SubAdmin extends Model {}

SubAdmin.init(
    {
        id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          unique:true,
          allowNull: false,
        },
        password: {
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
        accessModule: {
          type: DataTypes.TEXT,
          get: function () {
            if(this.getDataValue("accessModule")!== undefined){
              return JSON.parse(this.getDataValue("accessModule"));
            }
          },
          set: function (val) {
            return this.setDataValue("accessModule", JSON.stringify(val));
          },
        },
        accessRoutes: {
          type: DataTypes.TEXT,
          get: function () {
            if(this.getDataValue("accessRoutes")!== undefined){
            return JSON.parse(this.getDataValue("accessRoutes"));
            }
          },
          set: function (val) {
            return this.setDataValue("accessRoutes", JSON.stringify(val));
          },
        },
        roles: {
          type: DataTypes.STRING,
          defaultValue: "subAdmin",
        },
      
      },
  {
    sequelize,
    modelName: "SubAdmin",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = SubAdmin;
