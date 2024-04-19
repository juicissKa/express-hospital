import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { Visit } from "./visit";

export const Patient = sequelize.define(
  "patient",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    date_birth: {
      type: DataTypes.DATE,
    },
    ib: {
      type: DataTypes.STRING,
    },
    gender_id: {
      type: DataTypes.INTEGER,
    },
    nationality_id: {
      type: DataTypes.INTEGER,
    },
    somatotype_id: {
      type: DataTypes.INTEGER,
    },
    family_relationships: {
      type: DataTypes.INTEGER,
    },
    products: {
      type: DataTypes.INTEGER,
    },
    family_rules: {
      type: DataTypes.INTEGER,
    },
    transportation_things: {
      type: DataTypes.INTEGER,
    },
    personal_usage_things: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
