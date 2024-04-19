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
Patient.hasOne(Occupation, {
  foreignKey: "patient_id",
  onDelete: "CASCADE",
});
Patient.hasOne(Disability, {
  foreignKey: "patient_id",
  onDelete: "CASCADE",
});

Migration.belongsTo(values.region, { foreignKey: "region_id" });
Occupation.belongsTo(values.occupation_type, { foreignKey: "type_id" });
Occupation.belongsTo(values.occupation_harm, { foreignKey: "harm_id" });

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

Visit.hasMany(Test, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasMany(Skill, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasMany(Therapy, { foreignKey: "visit_id", onDelete: "CASCADE" });
Visit.hasMany(MedicalFunction, { foreignKey: "visit_id", onDelete: "CASCADE" });

HeartIssue.hasOne(Tomography, {
  foreignKey: "heart_issue_id",
  onDelete: "CASCADE",
});

ArterialHypertension.hasOne(PathologicalArterialHypertension, {
  foreignKey: "arterial_hyperthension_id",
  onDelete: "CASCADE",
});
