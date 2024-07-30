import errorHandler from "./handleErrors/handleErrors.js";
import sequelize from "./config/database.js";
import express from "express";
import router from "./Router.js";

const app = express();

app.use(express.json());

// Routes
app.use(router);

// errorHandler

app.use(errorHandler);

const startServer = async () => {
  try {
    sequelize.authenticate();
    console.log("Database connected");
    sequelize.sync();
    console.log("Sync");
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server running at http:localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting database", error);
  }
};

startServer();
