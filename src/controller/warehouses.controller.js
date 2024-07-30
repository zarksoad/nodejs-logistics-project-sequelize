import Warehouse from "../model/warehouses.model.js";

export const createWareHouse = async (req, res, next) => {
  try {
    const { name, location } = req.body;
    if (!name) {
      res.status(400).json({ Error: "Name is required" });
    }
    const wareHouse = await Warehouse.create({ name, location });
    res.status(201).json(wareHouse);
  } catch (error) {
    next(error);
  }
};

// Get
export const getAllWareHouses = async (req, res, next) => {
  try {
    const warehouses = await Warehouse.findAll();
    res.json(warehouses);
  } catch (error) {
    next(error);
  }
};

// Update warehouse

export const updateWarehouse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;
    const [update] = await Warehouse.update(
      { name, location },
      { where: { id } }
    );
    if (update === 0) {
      return res.status(404).json({ error: "Warehouse not found" });
    }
    const updateWarehouse = await Warehouse.findByPk(id);
    res.json(updateWarehouse);
  } catch (error) {
    next(error);
  }
};

export const getWareHousesById = async (req, res, next) => {
  try {
    const wareHouse = await Warehouse.findByPk(req.params.id);
    if (!wareHouse) {
      return res.status(404).json({ wareHouse: "Not found" });
    }
    res.json(wareHouse);
  } catch (error) {
    next(error);
  }
};

export const deleteWarehouse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const wareHouse = await Warehouse.destroy({ where: { id } });
    if (wareHouse) {
      res.status(203).json("The warehouse has been deleted");
    } else {
      res.status(404).json("Warehouse not found");
    }
  } catch (error) {
    next(error);
  }
};
