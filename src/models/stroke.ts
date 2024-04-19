import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

export const Stroke = sequelize.define(
  "stroke",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    stroke_days: {
      type: DataTypes.INTEGER,
    },
    stroke_causes: {
      type: DataTypes.STRING,
    },
    stroke_result_id: {
      type: DataTypes.INTEGER,
    },
    stroke_date: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: false }
);
