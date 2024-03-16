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
    date_arrive: {
      type: DataTypes.DATE,
    },
    date_leave: {
      type: DataTypes.DATE,
    },
    ib: {
      type: DataTypes.STRING,
    },
    gender_id: {
      type: DataTypes.INTEGER,
    },
    family_history_id: {
      type: DataTypes.INTEGER,
    },
    children: {
      type: DataTypes.INTEGER,
    },
    education_id: {
      type: DataTypes.INTEGER,
    },
    nationality_id: {
      type: DataTypes.INTEGER,
    },
    is_newcomer: {
      type: DataTypes.BOOLEAN,
    },
    migration_id: {
      type: DataTypes.INTEGER,
    },
    is_disabled_person: {
      type: DataTypes.BOOLEAN,
    },
    disability_group_id: {
      type: DataTypes.INTEGER,
    },
    disabilty_date: {
      type: DataTypes.DATE,
    },
    occupation_id: {
      type: DataTypes.INTEGER,
    },
    occupation_harm_id: {
      type: DataTypes.INTEGER,
    },
    bad_habits_id: {
      type: DataTypes.INTEGER,
    },
    somatotype_id: {
      type: DataTypes.INTEGER,
    },
    past_illnesses_id: {
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
