import Vehicle from "../model/vehicles.model.js";

export const createVehicle = async (req, res, next) => {
  try {
    const { model, warehouseId, driverId } = req.body;
    const vehicle = await Vehicle.create({ model, warehouseId, driverId });
    res.status(201).json({ newVehicle: vehicle });
  } catch (error) {
    next(error);
  }
};

export const findAllVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json({ vehicles: vehicles });
  } catch (error) {
    next(error);
  }
};

export const findVehicleByFK = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByPk(id);
    if (!vehicle) {
      return res.status(404).json("Vehicle not found");
    }
    res.json({ vehicle: vehicle });
  } catch (error) {
    next(error);
  }
};

export const updateVehicle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { model, warehouseId, driverId } = req.body;
    const vehicle = await Vehicle.update(
      { model, warehouseId, driverId },
      { where: { id } }
    );
    if (vehicle) {
      const vehicleUpdated = await Vehicle.findByPk(id);
      res.json({ vehicleUpdated });
    } else {
      res.status(404).json("Vehicle not found");
    }
  } catch (error) {
    next(error);
  }
};

export const deleteVehicle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.destroy({ where: { id } });
    if (vehicle) {
      res.status(203).json("The vehicle has been deleted");
    } else {
      res.status(404).json("Vehicle not found");
    }
  } catch (error) {
    next(error);
  }
};
