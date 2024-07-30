import {
  createShipment,
  deleteShipment,
  getAllShipments,
  getShipmentByID,
  updateShipment,
} from "../controller/shipments.controller.js";
import { Router } from "express";

const shipmentRouter = Router();

shipmentRouter.post("/", createShipment);
shipmentRouter.get("/", getAllShipments);
shipmentRouter.get("/:id", getShipmentByID);
shipmentRouter.put("/:id", updateShipment);
shipmentRouter.delete("/:id",deleteShipment)

export default shipmentRouter;
