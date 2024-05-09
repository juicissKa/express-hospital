import { Sequelize, DataTypes, Model, ModelStatic } from "sequelize";
import { sequelize } from "../../instances/sequelize";

export const values_names: string[] = [
  "gender",
  "education",
  "family_history",
  "nationality",
  "region",
  "occupation_harm",
  "occupation_type",
  "disability_group",
  "bad_habits",
  "somatotype",
  "somatotype",
  "hospitalization_type",
  "appearance",
  "visit_number",
  "health_group",
  "physical_activity",
  "apnea",
  "gynecology_status",
  "hospitalization_type",
  "covid_type",
  "covid_complication",
  "covid_heaviness",
  "covid_ethiological_causes",
  "disability_group",
  "diabete_type",
  "diabete_treatment",
  "nervous_system_polyneuropathy",
  "nervous_system_complication",
  "nervous_system_atherosclerosis",
  "heart_issue_cardiac_ischemia_type",
  "heart_issue_vessel",
  "heart_issue_peripheral_vascular_damage",
  "noak",
  "heart_issue_disaggregants",
  "heart_issue_coagulopathies",
  "heart_failure_type",
  "heart_issue_cerebral_atherosclerosis",
  "heart_issue_cvb_atherosclerosis",
  "heart_issue_lower_limbs_atherosclerosis",
  "heart_issue_atherosclerosis_therapy",
  "heart_issue_atherosclerosis_complication",
  "heart_issue_atrial_fibrillation_duration_type",
  "heart_issue_atrial_fibrillation_type",
  "heart_issue_atrial_fibrillation_treatment",
  "heart_issue_heart_damage",
  "heart_issue_heart_disease",
  "heart_issue_rheumatic_heart_disease",
  "arterial_hypertension_stage",
  "arterial_hypertension_risk_before_stroke",
  "arterial_hypertension_target_organs",
  "arterial_hypertension_inheritance",
  "arterial_hypertension_therapy_before",
  "arterial_hypertension_therapy_type",
  "arterial_hypertension_drugs_combination",
  "arterial_hypertension_emergency_help",
  "arterial_hypertension_catastrophy_relation",
  "arterial_hypertension_catastrophy_type",
  "pathological_arterial_hypertension_type",
  "pathological_arterial_hypertension_therapy",
  "heart_issue_extrasystole_type",
  "diabete_compensation",
  "test_type",
];
const values: Record<string, ModelStatic<Model<any, any>>> = {};

values_names.forEach((value) => {
  values[value] = sequelize.define(
    value,
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      value: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
});

export { values };
