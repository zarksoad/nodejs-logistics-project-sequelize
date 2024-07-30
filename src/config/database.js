import { Sequelize } from "sequelize";

const sequelize = new Sequelize("logistic", "root", "1234", {
  localhost: "localhost",
  dialect: "mysql",
});

export default sequelize;
