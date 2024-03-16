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
    date_visit: {
      type: DataTypes.DATE,
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
    stroke_days: {
      type: DataTypes.INTEGER,
    },
    stroke_causes: {
      type: DataTypes.INTEGER,
    },
    stroke_result_id: {
      type: DataTypes.INTEGER,
    },
    stroke_date: {
      type: DataTypes.DATE,
    },
    onmk_id: {
      type: DataTypes.INTEGER,
    },
    hospitalization_id: {
      type: DataTypes.INTEGER,
    },
    hospitalization_hours: {
      type: DataTypes.INTEGER,
    },
    nihss_on_arrival: {
      type: DataTypes.INTEGER,
    },
    renkin_on_arrival: {
      type: DataTypes.INTEGER,
    },
    rivermid_on_arrival: {
      type: DataTypes.INTEGER,
    },
    him: {
      type: DataTypes.INTEGER,
    },
    apnea_id: {
      type: DataTypes.INTEGER,
    },
    covid_id: {
      type: DataTypes.INTEGER,
    },
    arterial_hypertension_id: {
      type: DataTypes.INTEGER,
    },
    diabetes_id: {
      type: DataTypes.INTEGER,
    },
    nervous_system_id: {
      type: DataTypes.INTEGER,
    },
    heart_issue_id: {
      type: DataTypes.INTEGER,
    },
    botulinum_therapy: {
      type: DataTypes.BOOLEAN,
    },
    tests_id: {
      type: DataTypes.INTEGER,
    },
    therapies_id: {
      type: DataTypes.INTEGER,
    },
    visit_number_id: {
      type: DataTypes.INTEGER,
    },
    gynecological_status_id: {
      type: DataTypes.INTEGER,
    },
    birth_control_pills: {
      type: DataTypes.BOOLEAN,
    },
    nutrition_id: {
      type: DataTypes.INTEGER,
    },
    medical_functions_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
