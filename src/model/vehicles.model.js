import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Warehouse from "./warehouses.model.js";
import Driver from "./drivers.model.js";

const Vehicle = sequelize.define(
  "Vehicle",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    model: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    warehouseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Warehouse,
        key: "id",
      },
    },
    driverId: {
      type: DataTypes.INTEGER,
      references: {
        model: Driver,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "vehicles",
  }
);

export default Vehicle;
