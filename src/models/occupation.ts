import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

export const Occupation = sequelize.define(
  "occupation",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type_id: {
      type: DataTypes.INTEGER,
    },
    harm_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
