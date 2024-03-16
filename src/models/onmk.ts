import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { Visit } from "./visit";

export const Onmk = sequelize.define(
  "onmk",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    months: {
      type: DataTypes.INTEGER,
    },
    type_id: {
      type: DataTypes.INTEGER,
    },
    days: {
      type: DataTypes.INTEGER,
    },
    causes: {
      type: DataTypes.STRING,
    },
    result_id: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
    hospitalization_id: {
      type: DataTypes.INTEGER,
    },
    hospitalization_hours: {
      type: DataTypes.INTEGER,
    },
    hemorragic_type_id: {
      type: DataTypes.INTEGER,
    },
    ischemic_type_id: {
      type: DataTypes.INTEGER,
    },
    territory_side_id: {
      type: DataTypes.INTEGER,
    },
    territory_id: {
      type: DataTypes.INTEGER,
    },
    vessels_id: {
      type: DataTypes.INTEGER,
    },
    thrombolysis_local_id: {
      type: DataTypes.INTEGER,
    },
    thrombolysis_system_id: {
      type: DataTypes.INTEGER,
    },
    thrombus_extraction: {
      type: DataTypes.BOOLEAN,
    },
    early_reabilitation: {
      type: DataTypes.INTEGER,
    },
    thrombolysis_hours: {
      type: DataTypes.INTEGER,
    },
    thrombolysis_nihss: {
      type: DataTypes.INTEGER,
    },
    thrombolysis_renkin: {
      type: DataTypes.INTEGER,
    },
    thrombolysis_rivermid: {
      type: DataTypes.INTEGER,
    },
    tia: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
