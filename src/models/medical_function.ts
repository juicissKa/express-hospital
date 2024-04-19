import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

export const MedicalFunction = sequelize.define(
  "medical_function",
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
