import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";

export const ArterialHypertension = sequelize.define(
  "arterial_hypertension",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    stage: {
      type: DataTypes.INTEGER,
    },
    risk_before_stroke: {
      type: DataTypes.INTEGER,
    },
    therapy_before_id: {
      type: DataTypes.INTEGER,
    },
    therapy_id: {
      type: DataTypes.INTEGER,
    },
    drugs_combination_id: {
      type: DataTypes.INTEGER,
    },
    emergency_help_id: {
      type: DataTypes.INTEGER,
    },
    systolic_blood_pressure_before: {
      type: DataTypes.INTEGER,
    },
    systolic_blood_pressure: {
      type: DataTypes.INTEGER,
    },
    diastolic_blood_pressure_before: {
      type: DataTypes.INTEGER,
    },
    diastolic_blood_pressure: {
      type: DataTypes.INTEGER,
    },
    duration_years: {
      type: DataTypes.INTEGER,
    },
    therapy_duration_years: {
      type: DataTypes.INTEGER,
    },
    catastrophy_relation_id: {
      type: DataTypes.INTEGER,
    },
    catastrophy_id: {
      type: DataTypes.INTEGER,
    },
    catastrophy_years: {
      type: DataTypes.INTEGER,
    },
    target_organs_id: {
      type: DataTypes.INTEGER,
    },
    inheritance_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
