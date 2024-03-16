import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { Visit } from "./visit";

export const Therapy = sequelize.define(
  "therapy",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    occupational: {
      type: DataTypes.INTEGER,
    },
    exrecise: {
      type: DataTypes.INTEGER,
    },
    massage: {
      type: DataTypes.INTEGER,
    },
    mechanotherapy: {
      type: DataTypes.INTEGER,
    },
    magnetotherapy: {
      type: DataTypes.INTEGER,
    },
    speech_correction: {
      type: DataTypes.INTEGER,
    },
    acupunture: {
      type: DataTypes.INTEGER,
    },
    orthos_1: {
      type: DataTypes.INTEGER,
    },
    darsonval: {
      type: DataTypes.INTEGER,
    },
    patient_school: {
      type: DataTypes.BOOLEAN,
    },
    paraffin: {
      type: DataTypes.INTEGER,
    },
    fine_motor_skills: {
      type: DataTypes.INTEGER,
    },
    electrical_stimulation: {
      type: DataTypes.INTEGER,
    },
    cobs: {
      type: DataTypes.INTEGER,
    },
    psychologist: {
      type: DataTypes.BOOLEAN,
    },
    laser: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
