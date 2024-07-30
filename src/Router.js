import warehousesRoutes from "./routes/warehouses.routes.js";
import shipmentRouter from "./routes/shipments.routes.js";
import { Router } from "express";
import driversRoutes from "./routes/drivers.routes.js";
import vehicleRoutes from "./routes/vehicles.routes.js";
const router = Router();

router.use("/warehouses", warehousesRoutes);
router.use("/shipments", shipmentRouter);
router.use("/drivers", driversRoutes);
router.use("/vehicles", vehicleRoutes);

export default router;
