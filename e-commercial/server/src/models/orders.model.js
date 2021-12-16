import {Sequelize,Model,DataTypes} from "sequelize";
import { config } from "../../database/dbconfig.js";
const sequelize = new Sequelize(config);
  class Orders extends Model {}
  Orders.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false
      // allowNull defaults to true
    },
    isDone : {
        type : DataTypes.BOOLEAN,
    },
    isProgressing : {
        type : DataTypes.BOOLEAN,
    },
    paymentID : {
        type : DataTypes.INTEGER,
        allowNull:false,
    },
    total : {
        type : DataTypes.INTEGER,
    },
    created_at : {
        type : DataTypes.DATE,
    },
    modefied_at : {
        type: DataTypes.DATE,
        allowNull:false,
    },
    deleted_at : {
        type: DataTypes.DATE,
    },
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Orders', // We need to choose the model name
    tableName: "orders",
    timestamps:false,
    createdAt:false,
    updatedAt:false
  });
 
export default Orders;