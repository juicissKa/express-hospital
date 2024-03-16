import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../instances/sequelize";

export const FamilyHistory = sequelize.define(
  "family_history",
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
