import {
  ArterialHypertension,
  Covid,
  Diabete,
  Gender,
  HeartIssue,
  MedicalFunction,
  NervousSystem,
  Onmk,
  PathologicalArterialHyperthension,
  Patient,
  Skill,
  Test,
  Therapy,
  Tomography,
  Visit,
} from "../models";
import { Migration } from "../models";
import {
  Education,
  FamilyHistory,
  Nationality,
  Region,
} from "../models/values";

Patient.hasMany(Visit, { foreignKey: "patient_id" });

Patient.belongsTo(Migration, { foreignKey: "migration_id" });
Patient.belongsTo(Gender, { foreignKey: "gender_id" });
Patient.belongsTo(Education, { foreignKey: "education_id" });
Patient.belongsTo(Nationality, { foreignKey: "nationality_id" });
Patient.belongsTo(FamilyHistory, { foreignKey: "family_history_id" });

Migration.belongsTo(Region, { foreignKey: "region_id" });

Visit.belongsTo(ArterialHypertension, {
  foreignKey: "arterial_hypertension_id",
});
Visit.belongsTo(Diabete, { foreignKey: "diabetes_id" });
Visit.belongsTo(Test, { foreignKey: "tests_id" });
Visit.belongsTo(Skill, { foreignKey: "skills_id" });
Visit.belongsTo(Onmk, { foreignKey: "onmk_id" });
Visit.belongsTo(Therapy, { foreignKey: "therapies_id" });
Visit.belongsTo(NervousSystem, { foreignKey: "nervous_system_id" });
Visit.belongsTo(Covid, { foreignKey: "covid_id" });
Visit.belongsTo(MedicalFunction, { foreignKey: "medical_functions_id" });
Visit.belongsTo(HeartIssue, { foreignKey: "heart_issue_id" });

HeartIssue.belongsTo(Tomography, { foreignKey: "tomography_id" });

ArterialHypertension.belongsTo(PathologicalArterialHyperthension, {
  foreignKey: "pathological_type_id",
});
