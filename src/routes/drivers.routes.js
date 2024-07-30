import { Router } from "express";
import {
  createDriver,
  deleteDriver,
  findAllDrivers,
  getDriverById,
  updateDriver,
} from "../controller/drivers.controller.js";

const driversRoutes = Router();

driversRoutes.get("/", findAllDrivers);
driversRoutes.get("/:id", getDriverById);
driversRoutes.post("/", createDriver);
driversRoutes.put("/:id", updateDriver);
driversRoutes.delete("/:id", deleteDriver);

export default driversRoutes;
