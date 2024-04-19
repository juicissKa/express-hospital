import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

export const Gynecology = sequelize.define(
  "gynecology",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status_id: {
      type: DataTypes.INTEGER,
    },
    birth_control_pills: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);
