import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { Visit } from "./visit";

export const Test = sequelize.define(
  "test",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    red_blood_cells: {
      type: DataTypes.DECIMAL,
    },
    hemoglobin: {
      type: DataTypes.DECIMAL,
    },
    leukocytes: {
      type: DataTypes.DECIMAL,
    },
    platelets: {
      type: DataTypes.DECIMAL,
    },
    k: {
      type: DataTypes.DECIMAL,
    },
    ha: {
      type: DataTypes.DECIMAL,
    },
    chlorides: {
      type: DataTypes.DECIMAL,
    },
    urea: {
      type: DataTypes.DECIMAL,
    },
    creatinine: {
      type: DataTypes.DECIMAL,
    },
    glomerular_filtration_rate: {
      type: DataTypes.DECIMAL,
    },
    bilirubin: {
      type: DataTypes.DECIMAL,
    },
    alat: {
      type: DataTypes.DECIMAL,
    },
    asat: {
      type: DataTypes.DECIMAL,
    },
    sugar: {
      type: DataTypes.DECIMAL,
    },
    apt: {
      type: DataTypes.DECIMAL,
    },
    inr: {
      type: DataTypes.DECIMAL,
    },
    prothrombine: {
      type: DataTypes.DECIMAL,
    },
    cholesterol: {
      type: DataTypes.DECIMAL,
    },
    hdl: {
      type: DataTypes.DECIMAL,
    },
    ldl: {
      type: DataTypes.DECIMAL,
    },
    tg: {
      type: DataTypes.DECIMAL,
    },
    atherogenic_coefficient: {
      type: DataTypes.INTEGER,
    },
    mmse: {
      type: DataTypes.INTEGER,
    },
    moca: {
      type: DataTypes.INTEGER,
    },
    hads: {
      type: DataTypes.INTEGER,
    },
    mrs: {
      type: DataTypes.INTEGER,
    },
    ashworth_id: {
      type: DataTypes.INTEGER,
    },
    tardieu: {
      type: DataTypes.INTEGER,
    },
    five_words_test: {
      type: DataTypes.INTEGER,
    },
    mfi: {
      type: DataTypes.INTEGER,
    },
    faq: {
      type: DataTypes.INTEGER,
    },
    nihss: {
      type: DataTypes.INTEGER,
    },
    stand_up_and_go: {
      type: DataTypes.INTEGER,
    },
    renkin: {
      type: DataTypes.INTEGER,
    },
    tinetti_balance: {
      type: DataTypes.INTEGER,
    },
    tinetti_walking: {
      type: DataTypes.INTEGER,
    },
    tinetti_sum: {
      type: DataTypes.INTEGER,
    },
    rivermid: {
      type: DataTypes.INTEGER,
    },
    bartel: {
      type: DataTypes.INTEGER,
    },
    clock_drawing_test: {
      type: DataTypes.INTEGER,
    },
    spiegel: {
      type: DataTypes.INTEGER,
    },
    fist_edge_palm: {
      type: DataTypes.INTEGER,
    },
    conciousness_id: {
      type: DataTypes.INTEGER,
    },

    reading_id: {
      type: DataTypes.INTEGER,
    },
    writing_id: {
      type: DataTypes.INTEGER,
    },
    counting_id: {
      type: DataTypes.INTEGER,
    },
    gnosis_id: {
      type: DataTypes.INTEGER,
    },
    praxis_id: {
      type: DataTypes.INTEGER,
    },
    speech_id: {
      type: DataTypes.INTEGER,
    },
    first_pair_cranial_nerves_id: {
      type: DataTypes.INTEGER,
    },
    second_pair_cranial_nerves_id: {
      type: DataTypes.INTEGER,
    },
    pupils_id: {
      type: DataTypes.INTEGER,
    },
    photo_reaction_id: {
      type: DataTypes.INTEGER,
    },
    fifth_pair_cranial_nerves_id: {
      type: DataTypes.INTEGER,
    },
    corneal_reflex_id: {
      type: DataTypes.INTEGER,
    },
    brow_reflex_id: {
      type: DataTypes.INTEGER,
    },
    mandibular_reflex_id: {
      type: DataTypes.INTEGER,
    },
    taste_id: {
      type: DataTypes.INTEGER,
    },
    palpebral_fissures_id: {
      type: DataTypes.INTEGER,
    },
    face_id: {
      type: DataTypes.INTEGER,
    },
    tongue_id: {
      type: DataTypes.INTEGER,
    },
    nystagmus_id: {
      type: DataTypes.INTEGER,
    },
    diplopia: {
      type: DataTypes.INTEGER,
    },
    hearing_id: {
      type: DataTypes.INTEGER,
    },
    palatal_reflex_id: {
      type: DataTypes.INTEGER,
    },
    pharyngeal_reflex_id: {
      type: DataTypes.INTEGER,
    },
    swallowing_id: {
      type: DataTypes.INTEGER,
    },
    phonation_id: {
      type: DataTypes.INTEGER,
    },
    deep_reflexes_id: {
      type: DataTypes.INTEGER,
    },
    reflexes_id: {
      type: DataTypes.INTEGER,
    },
    paresis_id: {
      type: DataTypes.INTEGER,
    },
    muscle_tone_id: {
      type: DataTypes.INTEGER,
    },
    muscles_id: {
      type: DataTypes.INTEGER,
    },
    superficial_reflexes_id: {
      type: DataTypes.INTEGER,
    },
    pathological_reflexes_id: {
      type: DataTypes.INTEGER,
    },
    pain_sensitivity_id: {
      type: DataTypes.INTEGER,
    },
    joint_muscular_sensivity_id: {
      type: DataTypes.INTEGER,
    },
    ataxia: {
      type: DataTypes.INTEGER,
    },
    dynamic_coordination_test_id: {
      type: DataTypes.INTEGER,
    },
    dynamic_coordination_test_issue_id: {
      type: DataTypes.INTEGER,
    },
    pelvic_functions_id: {
      type: DataTypes.INTEGER,
    },
    skin_color_id: {
      type: DataTypes.INTEGER,
    },
    skin_moisture: {
      type: DataTypes.INTEGER,
    },
    gait_id: {
      type: DataTypes.INTEGER,
    },
    vertebral_syndrome: {
      type: DataTypes.INTEGER,
    },
    imt: {
      type: DataTypes.INTEGER,
    },
    waist: {
      type: DataTypes.INTEGER,
    },
    hips: {
      type: DataTypes.INTEGER,
    },
    belly_fold: {
      type: DataTypes.INTEGER,
    },
    scapular_fold: {
      type: DataTypes.INTEGER,
    },
    weight_type_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
