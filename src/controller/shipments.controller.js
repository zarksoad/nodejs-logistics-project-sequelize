import Shipment from "../model/shipments.model.js";

export const createShipment = async (req, res, next) => {
  try {
    const { warehouseId, item, quantity, vehicleId, driverId } = req.body;
    if (!warehouseId) {
      return res.status(404);
    }
    const shipment = await Shipment.create({
      warehouseId,
      item,
      quantity,
      vehicleId,
      driverId,
    });
    res.status(201).json({ newShipment: shipment });
  } catch (error) {
    next(error);
  }
};

export const getAllShipments = async (req, res, next) => {
  try {
    const shipments = await Shipment.findAll();
    res.json({ shipments: shipments });
  } catch (error) {
    next(error);
  }
};

export const getShipmentByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const shipment = await Shipment.findByPk(id);
    if (!shipment) {
      return res.status(404).json("Shipment not found");
    }
    res.json({ shipment: shipment });
  } catch (error) {
    next(error);
  }
};

export const updateShipment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {warehouseId, item, quantity, vehicleId, driverId } = req.body;
    const shipment = await Shipment.update(
      {warehouseId, item, quantity, vehicleId, driverId},
      { where: { id } }
    );
    if (!shipment) {
      return res.status(404).json("Shipment not found");
    }
    const updateShipment = await Shipment.findByPk(id);
    res.json({ ShipmentUpdated: updateShipment });
  } catch (error) {
    next(error);
  }
};

export const deleteShipment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const shipment = await Shipment.destroy({ where: { id } });
    if (shipment) {
      res.status(203).json("The warehouse has been deleted");
    } else {
      res.status(404).json("Warehouse not found");
    }
  } catch (error) {
    next(error);
  }
};
