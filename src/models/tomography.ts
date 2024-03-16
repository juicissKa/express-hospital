import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { HeartIssue } from "./heart_issue";

export const Tomography = sequelize.define(
  "tomography",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cyst_count: {
      type: DataTypes.INTEGER,
    },
    hydrocephalus_id: {
      type: DataTypes.INTEGER,
    },
    fibrosis_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
