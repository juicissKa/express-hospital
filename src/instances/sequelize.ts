import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME || "hospital",
  process.env.USER || "postgres",
  process.env.PASSWORD || "1234",
  {
    host: process.env.HOST || "localhost",
    dialect: "postgres",
    dialectOptions: {},
  }
);

sequelize.authenticate();

sequelize
  .sync({ alter: true })
  .then(() => console.log("synced"))
  .catch((err) => console.log(err));
