import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

export const Migration = sequelize.define(
  "migration",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    region_id: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: false }
);
