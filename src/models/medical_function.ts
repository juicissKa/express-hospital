import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { Visit } from "./visit";

export const MedicalFunction = sequelize.define(
  "medical_function",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    heart: {
      type: DataTypes.INTEGER,
    },
    temperature_and_other: {
      type: DataTypes.INTEGER,
    },
    exercises_tolerance: {
      type: DataTypes.INTEGER,
    },
    muscle_tone: {
      type: DataTypes.INTEGER,
    },
    muscle_strength: {
      type: DataTypes.INTEGER,
    },
    attention: {
      type: DataTypes.INTEGER,
    },
    memory: {
      type: DataTypes.INTEGER,
    },
    speech: {
      type: DataTypes.INTEGER,
    },
    bone_mobility: {
      type: DataTypes.INTEGER,
    },
    orientation: {
      type: DataTypes.INTEGER,
    },
    emotions: {
      type: DataTypes.INTEGER,
    },
    proprioception: {
      type: DataTypes.INTEGER,
    },
    voice: {
      type: DataTypes.INTEGER,
    },
    breath: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
