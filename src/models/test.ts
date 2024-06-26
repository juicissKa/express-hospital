import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

export const Test = sequelize.define(
  "test",
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
      type: DataTypes.DECIMAL,
    },
    on_arrival: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);
