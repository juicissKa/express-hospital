import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { Visit } from "./visit";

export const Diabete = sequelize.define(
  "diabete",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    treatment_id: {
      type: DataTypes.INTEGER,
    },
    type_id: {
      type: DataTypes.INTEGER,
    },
    sugar_before_eating: {
      type: DataTypes.INTEGER,
    },
    sugar_after_eating: {
      type: DataTypes.INTEGER,
    },
    hemoglobin_level: {
      type: DataTypes.INTEGER,
    },
    genotype: {
      type: DataTypes.BOOLEAN,
    },
    compensation_id: {
      type: DataTypes.INTEGER,
    },
    target_organs_id: {
      type: DataTypes.INTEGER,
    },
    him_stage: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
