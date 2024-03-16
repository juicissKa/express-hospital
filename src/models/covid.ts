import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { Visit } from "./visit";

export const Covid = sequelize.define(
  "covid",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    complications_id: {
      type: DataTypes.INTEGER,
    },
    heaviness_id: {
      type: DataTypes.INTEGER,
    },
    ethiological_causes_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
