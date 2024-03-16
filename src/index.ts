import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { FamilyHistory, Gender } from "./models";
import { Education, Region } from "./models/values";
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

app.get("/family-histories/", (req, res, next) => {
  FamilyHistory.findAll().then((result) => res.json(result));
});

app.get("/genders/", (req, res, next) => {
  Gender.findAll().then((result) => res.json(result));
});

app.get("/education/", (req, res, next) => {
  Education.findAll().then((result) => res.json(result));
});

app.get("/regions/", (req, res, next) => {
  Region.findAll().then((result) => res.json(result));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
