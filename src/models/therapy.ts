import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

export const Therapy = sequelize.define(
  "therapy",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type_id: {
      type: DataTypes.INTEGER,
    },
    value: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
