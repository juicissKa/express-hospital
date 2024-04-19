import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { values, values_names } from "./models/values/values";
import { Disability, Migration, Occupation, Patient } from "./models";
import { Op } from "sequelize";
import { before } from "node:test";

const pluralize = require("pluralize");

const { sequelize } = require("./instances/sequelize");

require("./models");
require("./instances/associations");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res, next) => {
  res.json("Hello world");
});

[
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
  "past_illnesses",
];

app.get("/patients/create-form-data/", async (req, res, next) => {
  const data = {
    migration: {
      regions: await values.region.findAll(),
    },
    genders: await values.gender.findAll(),
    nationalities: await values.nationality.findAll(),
    somatotypes: await values.somatotype.findAll(),
  };
  res.json(data);
});

app.get("/patients/", async (req, res, next) => {
  const { find } = req.query;

  const data = await Patient.findAll({
    attributes: ["id", "name", "date_birth", "ib"],
    where: find ? { name: { [Op.iLike]: `%${find}%` } } : undefined,
    include: {
      model: values.gender,
    },
  });

  res.json(data);
});

app.get("/patients/:id", async (req, res, next) => {
  const data = await Patient.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: values.gender,
    },
  });

  res.json(data);
});

app.post("/patients/create/", async (req, res, next) => {
  const { occupation, migration, disability, ...patient_data } = req.body;
  const patient = await Patient.create(patient_data);

  const patient_id = patient.toJSON().id;

  await Occupation.create({ ...occupation, patient_id });
  await Disability.create({ ...disability, patient_id });
  await Migration.create({ ...migration, patient_id });

  res.json(patient.toJSON());
});

app.get("/visits/create-form-data/", async (req, res, next) => {
  const data = {
    mainInfo: {
      appearances: await values.appearance.findAll(),
      visit_numbers: await values.visit_number.findAll(),
      health_groups: await values.health_group.findAll(),
      physical_activities: await values.physical_activity.findAll(),
      apneas: await values.apnea.findAll(),
      gynecology: {
        statuses: await values.gynecology_status.findAll(),
      },
      hospitalization: {
        types: await values.hospitalization_type.findAll(),
      },
    },
    illnesses: {
      covid: {
        types: await values.covid_type.findAll(),
        complications: await values.covid_complication.findAll(),
        heavinesses: await values.covid_heaviness.findAll(),
        ethiological_causes: await values.covid_ethiological_causes.findAll(),
      },
      disability: {
        groups: await values.disability_group.findAll(),
      },
      diabete: {
        types: await values.diabete_type.findAll(),
        treatments: await values.diabete_treatment.findAll(),
        compensations: await values.diabete_compensation.findAll(),
        hims: await values.diabete_him.findAll(),
      },
      nervous_system: {
        polyneuropathies: await values.nervous_system_polyneuropathy.findAll(),
        complications: await values.nervous_system_complication.findAll(),
        atherosclerosises:
          await values.nervous_system_atherosclerosis.findAll(),
      },
      heart_issue: {
        cardiac_ischemia_types:
          await values.heart_issue_cardiac_ischemia_type.findAll(),
        vessels: await values.heart_issue_vessel.findAll(),
        peripherial_vascular_damages:
          await values.heart_issue_peripheral_vascular_damage.findAll(),
        noaks: await values.noak.findAll(),
        disaggregants: await values.heart_issue_disaggregants.findAll(),
        coagulopathies: await values.heart_issue_coagulopathies.findAll(),
        heart_failure: {
          type: await values.heart_failure_type.findAll(),
          stage: await values.heart_failure_stage.findAll(),
        },
        atherosclerosis: {
          cerebrals:
            await values.heart_issue_cerebral_atherosclerosis.findAll(),
          cvbs: await values.heart_issue_cvb_atherosclerosis.findAll(),
          lower_limbs:
            await values.heart_issue_lower_limbs_atherosclerosis.findAll(),
          therapies: await values.heart_issue_atherosclerosis_therapy.findAll(),
          complications:
            await values.heart_issue_atherosclerosis_complication.findAll(),
        },
        fibrillation: {
          duration_type:
            await values.heart_issue_atrial_fibrillation_duration_type.findAll(),
          type: await values.heart_issue_atrial_fibrillation_type.findAll(),
          treatments:
            await values.heart_issue_atrial_fibrillation_treatment.findAll(),
        },
        extrasystole: {
          types: await values.heart_issue_extrasystole_type.findAll(),
        },
        additional: {
          heart_damages: await values.heart_issue_heart_damage.findAll(),
          heart_diseases: await values.heart_issue_heart_disease.findAll(),
          rheumatic_heart_diseases:
            await values.heart_issue_rheumatic_heart_disease.findAll(),
        },
      },
      arterial_hypertension: {
        stages: await values.arterial_hypertension_stage.findAll(),
        risks_before_stroke:
          await values.arterial_hypertension_risk_before_stroke.findAll(),
        target_organs:
          await values.arterial_hypertension_target_organs.findAll(),
        inheritance: await values.arterial_hypertension_inheritance.findAll(),
        therapy: {
          before: await values.arterial_hypertension_therapy_before.findAll(),
          types: await values.arterial_hypertension_therapy_type.findAll(),
          drugs_combinations:
            await values.arterial_hypertension_drugs_combination.findAll(),
          emergency_helps:
            await values.arterial_hypertension_emergency_help.findAll(),
        },
        catastrophy: {
          relations:
            await values.arterial_hypertension_catastrophy_relation.findAll(),
          type: await values.arterial_hypertension_catastrophy_type.findAll(),
        },
        pathological: {
          type: await values.pathological_arterial_hypertension_type.findAll(),
          therapies:
            await values.pathological_arterial_hypertension_therapy.findAll(),
        },
      },
    },
    tests: {
      types: await values.test_type.findAll(),
    },
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
