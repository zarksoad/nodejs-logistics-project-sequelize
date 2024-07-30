import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Warehouse from "./warehouses.model.js";

const Driver = sequelize.define(
  "Driver",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    warehouseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Warehouse,
        key: "id",
        allowNull: false,
      },
    },
  },
  {
    timestamps: false,
    tableName: "drivers",
  }
);

export default Driver;
