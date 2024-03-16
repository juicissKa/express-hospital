import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { Visit } from "./visit";

export const Skill = sequelize.define(
  "skill",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    practical: {
      type: DataTypes.INTEGER,
    },
    stress_coping: {
      type: DataTypes.INTEGER,
    },
    posture_keeping: {
      type: DataTypes.INTEGER,
    },
    carrying: {
      type: DataTypes.INTEGER,
    },
    wrist_usage: {
      type: DataTypes.INTEGER,
    },
    walking: {
      type: DataTypes.INTEGER,
    },
    washing_up: {
      type: DataTypes.INTEGER,
    },
    dressing: {
      type: DataTypes.INTEGER,
    },
    eating: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
