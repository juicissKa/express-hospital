import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  patientNumber: {
    type: Number,
    required: true,
  },
  visitNumber: {
    type: Number,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dateArrive: {
    type: Date,
  },
  dateLeave: {
    type: Date,
  },
  ibNumber: {
    type: String,
  },
  dateExamination: {
    type: Date,
    required: true,
  },
  arrivals: {
    type: Number,
    required: true,
  },
  healthGroup: {
    type: Number,
    required: true,
  },
  gender: {
    type: Number,
    required: true,
  },
  dispansery: {
    type: Boolean,
    required: true,
  },
  medicalExamination: {
    type: Boolean,
    required: true,
  },
  physicalActivity: {
    type: Number,
    required: true,
  },
  familyStory: {
    type: Number,
    required: true,
  },
  isDisabledPerson: {
    type: Boolean,
    required: true,
  },
  disabledPersonGroup: {
    type: Number,
  },
  disabledPersonTime: {
    type: Number,
  },
});

export const Patient = mongoose.model("Patient", PatientSchema);
