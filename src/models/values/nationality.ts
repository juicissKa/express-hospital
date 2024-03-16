import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../instances/sequelize";

export const Nationality = sequelize.define(
  "nationality",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    value: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);
