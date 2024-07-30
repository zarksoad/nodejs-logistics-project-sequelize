import Driver from "../model/drivers.model.js";

export const createDriver = async (req, res, next) => {
  try {
    const { name, warehouseId } = req.body;
    console.log("this is warehouse", warehouseId);
    const driver = await Driver.create({ name, warehouseId });
    res.status(201).json({ newDriver: driver });
  } catch (error) {
    next(error);
  }
};

export const findAllDrivers = async (req, res, next) => {
  try {
    const drivers = await Driver.findAll();
    res.json({ drivers: drivers });
  } catch (error) {
    next(error);
  }
};

export const getDriverById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findByPk(id);
    if (!driver) {
      return res.status(404).json("Driver not found");
    }
    res.json({ driver: driver });
  } catch (error) {
    next(error);
  }
};

export const updateDriver = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, warehouseId } = req.body;
    const driver = await Driver.update(
      { name, warehouseId },
      { where: { id } }
    );
    if (driver) {
      const driverUpdated = await Driver.findByPk(id);
      res.json({ updatedDriver: driverUpdated });
    } else {
      res.status(404).json("driver not found");
    }
  } catch (error) {
    next(error);
  }
};

export const deleteDriver = async (req, res, next) => {
  try {
    const { id } = req.params;
    const driver = await Driver.destroy({ where: { id } });
    if (driver) {
      res.status(203).json("Driver has been deleted");
    } else {
      res.status(404).json("Driver not found");
    }
  } catch (error) {
    next(error);
  }
};
