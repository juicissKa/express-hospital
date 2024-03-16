import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../instances/sequelize";

export const Education = sequelize.define(
  "education",
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
