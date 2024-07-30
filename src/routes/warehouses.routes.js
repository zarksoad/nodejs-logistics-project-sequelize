import {
  createWareHouse,
  deleteWarehouse,
  getAllWareHouses,
  getWareHousesById,
  updateWarehouse,
} from "../controller/warehouses.controller.js";
import { Router } from "express";

const warehousesRoutes = Router();

// Post
warehousesRoutes.post("/", createWareHouse);
//Get all warehouse
warehousesRoutes.get("/", getAllWareHouses);

warehousesRoutes.get("/:id", getWareHousesById);

warehousesRoutes.put("/:id", updateWarehouse);

warehousesRoutes.delete("/:id", deleteWarehouse);

export default warehousesRoutes;
