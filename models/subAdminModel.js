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
        accessModule: {
          type: DataTypes.TEXT,
          get: function () {
            return JSON.parse(this.getDataValue("accessModule"));
          },
          set: function (val) {
            console.log("val",JSON.stringify(val))
            return this.setDataValue("accessModule", JSON.stringify(val));
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
