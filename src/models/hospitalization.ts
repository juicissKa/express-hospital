import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

export const Hospitalization = sequelize.define(
  "hospitalization",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type_id: {
      type: DataTypes.INTEGER,
    },
    hours: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
