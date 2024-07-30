import { Router } from "express";
import {
  createVehicle,
  deleteVehicle,
  findAllVehicles,
  findVehicleByFK,
  updateVehicle,
} from "../controller/vehicles.controller.js";

const vehicleRoutes = Router();

vehicleRoutes.get("/", findAllVehicles);
vehicleRoutes.post("/", createVehicle);
vehicleRoutes.get("/:id", findVehicleByFK);
vehicleRoutes.put("/:id", updateVehicle);
vehicleRoutes.delete("/:id", deleteVehicle);

export default vehicleRoutes;
