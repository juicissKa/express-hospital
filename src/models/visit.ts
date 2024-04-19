import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { Patient } from "./patient";
import { Test } from "./test";
import { Skill } from "./skill";
import { Onmk } from "./onmk";
import { Diabete } from "./diabete";
import { ArterialHypertension } from "./arterial_hypertension";
import { Therapy } from "./therapy";
import { NervousSystem } from "./nervous_system";
import { Covid } from "./covid";
import { MedicalFunction } from "./medical_function";

export const Visit = sequelize.define(
  "visit",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    patient_id: {
      type: DataTypes.INTEGER,
    },
    date_arrive: {
      type: DataTypes.DATE,
    },
    date_leave: {
      type: DataTypes.DATE,
    },
    date_visit: {
      type: DataTypes.DATE,
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
    bad_habits_id: {
      type: DataTypes.INTEGER,
    },
    past_illnesses_id: {
      type: DataTypes.INTEGER,
    },
    appearance_id: {
      type: DataTypes.INTEGER,
    },
    is_upcoming_dispansery: {
      type: DataTypes.BOOLEAN,
    },
    is_medical_examination: {
      type: DataTypes.BOOLEAN,
    },
    health_group_id: {
      type: DataTypes.INTEGER,
    },
    physical_activity_id: {
      type: DataTypes.INTEGER,
    },
    vn_days: {
      type: DataTypes.INTEGER,
    },
    him: {
      type: DataTypes.INTEGER,
    },
    apnea_id: {
      type: DataTypes.INTEGER,
    },
    botulinum_therapy: {
      type: DataTypes.BOOLEAN,
    },
    visit_number_id: {
      type: DataTypes.INTEGER,
    },
    nutrition_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
