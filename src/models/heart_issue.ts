import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { Tomography } from "./tomography";

export const HeartIssue = sequelize.define(
  "heart_issue",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cardiac_ischemia_id: {
      type: DataTypes.INTEGER,
    },
    heart_failure_id: {
      type: DataTypes.INTEGER,
    },
    heart_failure_stage: {
      type: DataTypes.INTEGER,
    },
    cardiac_atherosclerosis: {
      type: DataTypes.BOOLEAN,
    },
    cerebral_atherosclerosis_id: {
      type: DataTypes.INTEGER,
    },
    vessel_id: {
      type: DataTypes.INTEGER,
    },
    cvb_atherosclerosis_id: {
      type: DataTypes.INTEGER,
    },
    lower_limbs_atherosclerosis: {
      type: DataTypes.BOOLEAN,
    },
    aorta_atherosclerosis: {
      type: DataTypes.BOOLEAN,
    },
    peripheral_vascular_damage_id: {
      type: DataTypes.INTEGER,
    },
    atherosclerosis_therapy_id: {
      type: DataTypes.INTEGER,
    },
    atherosclerosis_complications: {
      type: DataTypes.INTEGER,
    },
    warfaring: {
      type: DataTypes.BOOLEAN,
    },
    noak_id: {
      type: DataTypes.INTEGER,
    },
    disaggregant_id: {
      type: DataTypes.INTEGER,
    },
    coagulopathies_id: {
      type: DataTypes.INTEGER,
    },
    heart_rhythm_disorder_id: {
      type: DataTypes.INTEGER,
    },
    atrial_fibrillation_id: {
      type: DataTypes.INTEGER,
    },
    artial_fibrillation_type_id: {
      type: DataTypes.INTEGER,
    },
    extrasystole_id: {
      type: DataTypes.INTEGER,
    },
    heart_damage_id: {
      type: DataTypes.INTEGER,
    },
    heart_disease_id: {
      type: DataTypes.INTEGER,
    },
    rheumatic_heart_disease_id: {
      type: DataTypes.INTEGER,
    },
    myocardial_infarction_before: {
      type: DataTypes.BOOLEAN,
    },
    myocardial_dystrophy: {
      type: DataTypes.INTEGER,
    },
    tomography_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
