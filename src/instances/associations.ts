import {
  ArterialHypertension,
  Covid,
  Diabete,
  Disability,
  HeartIssue,
  MedicalFunction,
  NervousSystem,
  Occupation,
  Onmk,
  Patient,
  Skill,
  Test,
  Therapy,
  Tomography,
  Visit,
} from "../models";
import { Migration } from "../models";
import { Gynecology } from "../models/gynecology";
import { Hospitalization } from "../models/hospitalization";
import { PathologicalArterialHypertension } from "../models/pathological_arterial_hypertensions";
import { Stroke } from "../models/stroke";

import { values } from "../models/values/values";

Patient.hasMany(Visit, { foreignKey: "patient_id" });

Patient.hasOne(Migration, {
  foreignKey: "patient_id",
  onDelete: "CASCADE",
});
Patient.belongsTo(values.gender, { foreignKey: "gender_id" });
Patient.belongsTo(values.nationality, { foreignKey: "nationality_id" });
Patient.belongsTo(values.somatotype, { foreignKey: "somatotype_id" });

Migration.belongsTo(values.region, { foreignKey: "region_id" });
Occupation.belongsTo(values.occupation_type, { foreignKey: "type_id" });
Occupation.belongsTo(values.occupation_harm, { foreignKey: "harm_id" });

Visit.belongsTo(values.health_group, { foreignKey: "health_group_id" });
Visit.belongsTo(values.family_history, { foreignKey: "family_history_id" });
Visit.belongsTo(values.education, { foreignKey: "education_id" });
Visit.belongsTo(values.bad_habits, { foreignKey: "bad_habits_id" });
Visit.belongsTo(values.physical_activity, {
  foreignKey: "physical_activity_id",
});
Visit.belongsTo(values.visit_number, {
  foreignKey: "visit_number_id",
});
Visit.belongsTo(values.apnea, {
  foreignKey: "apnea_id",
});
Visit.belongsTo(values.appearance, {
  foreignKey: "appearance_id",
});

Visit.hasOne(ArterialHypertension, {
  foreignKey: "visit_id",
  onDelete: "CASCADE",
});
Visit.hasOne(Diabete, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasOne(NervousSystem, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasOne(Covid, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasOne(HeartIssue, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasOne(Stroke, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasOne(Onmk, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasOne(Hospitalization, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasOne(Gynecology, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasOne(Disability, { foreignKey: "visit_id", onDelete: "CASCADE" });

Visit.hasMany(Test, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasMany(Skill, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasMany(Therapy, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasMany(MedicalFunction, { foreignKey: "visit_id", onDelete: "CASCADE" });

Hospitalization.belongsTo(values.hospitalization_type, {
  foreignKey: "type_id",
});

Covid.belongsTo(values.covid_type, { foreignKey: "type_id" });
Covid.belongsTo(values.covid_ethiological_causes, {
  foreignKey: "ethiological_causes_id",
});
Covid.belongsTo(values.covid_heaviness, { foreignKey: "heaviness_id" });
Covid.belongsTo(values.covid_complication, { foreignKey: "complication_id" });

Disability.belongsTo(values.disability_group, { foreignKey: "group_id" });

Diabete.belongsTo(values.diabete_treatment, { foreignKey: "treatment_id" });
Diabete.belongsTo(values.diabete_type, { foreignKey: "type_id" });
Diabete.belongsTo(values.diabete_compensation, {
  foreignKey: "compensation_id",
});

NervousSystem.belongsTo(values.nervous_system_polyneuropathy, {
  foreignKey: "polyneuropathy_id",
});
NervousSystem.belongsTo(values.nervous_system_complication, {
  foreignKey: "complication_id",
});
NervousSystem.belongsTo(values.nervous_system_atherosclerosis, {
  foreignKey: "atherosclerosis_id",
});

HeartIssue.hasOne(Tomography, {
  foreignKey: "heart_issue_id",
  onDelete: "CASCADE",
});

HeartIssue.belongsTo(values.heart_issue_peripheral_vascular_damage, {
  foreignKey: "peripheral_vascular_damage_id",
});
HeartIssue.belongsTo(values.heart_issue_vessel, {
  foreignKey: "vessel_id",
});
HeartIssue.belongsTo(values.heart_issue_cardiac_ischemia_type, {
  foreignKey: "cardiac_ischemia_type_id",
});
HeartIssue.belongsTo(values.noak, {
  foreignKey: "noak_id",
});
HeartIssue.belongsTo(values.heart_issue_disaggregants, {
  foreignKey: "disaggregants_id",
});
HeartIssue.belongsTo(values.heart_issue_coagulopathies, {
  foreignKey: "coagulopathies_id",
});
HeartIssue.belongsTo(values.heart_failure_type, {
  foreignKey: "heart_failure_type_id",
});
HeartIssue.belongsTo(values.heart_issue_cerebral_atherosclerosis, {
  foreignKey: "cerebral_atherosclerosis_id",
});
HeartIssue.belongsTo(values.heart_issue_cvb_atherosclerosis, {
  foreignKey: "cvb_atherosclerosis_id",
});
HeartIssue.belongsTo(values.heart_issue_lower_limbs_atherosclerosis, {
  foreignKey: "lower_limbs_atherosclerosis_id",
});
HeartIssue.belongsTo(values.heart_issue_atherosclerosis_therapy, {
  foreignKey: "atherosclerosis_therapy_id",
});
HeartIssue.belongsTo(values.heart_issue_atherosclerosis_complication, {
  foreignKey: "atherosclerosis_complication_id",
});
HeartIssue.belongsTo(values.heart_issue_atrial_fibrillation_duration_type, {
  foreignKey: "atrial_fibrillation_duration_type_id",
});
HeartIssue.belongsTo(values.heart_issue_atrial_fibrillation_type, {
  foreignKey: "atrial_fibrillation_type_id",
});
HeartIssue.belongsTo(values.heart_issue_atrial_fibrillation_treatment, {
  foreignKey: "atrial_fibrillation_treatment_id",
});
HeartIssue.belongsTo(values.heart_issue_heart_damage, {
  foreignKey: "heart_damage_id",
});
HeartIssue.belongsTo(values.heart_issue_heart_disease, {
  foreignKey: "heart_disease_id",
});
HeartIssue.belongsTo(values.heart_issue_rheumatic_heart_disease, {
  foreignKey: "rheumatic_heart_disease_id",
});
HeartIssue.belongsTo(values.heart_issue_extrasystole_type, {
  foreignKey: "extrasystole_id",
});

ArterialHypertension.hasOne(PathologicalArterialHypertension, {
  foreignKey: "arterial_hyperthension_id",
  onDelete: "CASCADE",
});

ArterialHypertension.belongsTo(values.arterial_hypertension_stage, {
  foreignKey: "stage_id",
});
ArterialHypertension.belongsTo(
  values.arterial_hypertension_risk_before_stroke,
  {
    foreignKey: "risk_before_stroke_id",
  }
);
ArterialHypertension.belongsTo(values.arterial_hypertension_target_organs, {
  foreignKey: "target_organs_id",
});
ArterialHypertension.belongsTo(values.arterial_hypertension_inheritance, {
  foreignKey: "inheritance_id",
});
ArterialHypertension.belongsTo(values.arterial_hypertension_therapy_before, {
  foreignKey: "therapy_before_id",
});
ArterialHypertension.belongsTo(values.arterial_hypertension_therapy_type, {
  foreignKey: "therapy_type_id",
});
ArterialHypertension.belongsTo(values.arterial_hypertension_drugs_combination, {
  foreignKey: "drugs_combination_id",
});
ArterialHypertension.belongsTo(values.arterial_hypertension_emergency_help, {
  foreignKey: "emergency_help_id",
});
ArterialHypertension.belongsTo(
  values.arterial_hypertension_catastrophy_relation,
  {
    foreignKey: "catastrophy_relation_id",
  }
);
ArterialHypertension.belongsTo(values.arterial_hypertension_catastrophy_type, {
  foreignKey: "catastrophy_type_id",
});
PathologicalArterialHypertension.belongsTo(
  values.pathological_arterial_hypertension_type,
  {
    foreignKey: "type_id",
  }
);
PathologicalArterialHypertension.belongsTo(
  values.pathological_arterial_hypertension_therapy,
  {
    foreignKey: "therapy_id",
  }
);

Test.belongsTo(values.test_type, { foreignKey: "type_id" });
