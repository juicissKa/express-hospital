import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

export const PathologicalArterialHypertension = sequelize.define(
  "pathological_arterial_hypertension",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type_id: {
      type: DataTypes.INTEGER,
    },
    syncopes: {
      type: DataTypes.INTEGER,
    },
    syncopes_periodicity: {
      type: DataTypes.INTEGER,
    },
    therapy_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
