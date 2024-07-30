import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Warehouse from "./warehouses.model.js";
import Vehicle from "./vehicles.model.js";
import Driver from "./drivers.model.js";

const Shipment = sequelize.define(
  "Shipment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    warehouseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Warehouse,
        key: "id",
      },
      allowNull: true,
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      references: {
        model: Vehicle,
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
    item: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Shipment;
