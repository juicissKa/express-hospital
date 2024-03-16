import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../instances/sequelize";

export const Region = sequelize.define(
  "region",
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
