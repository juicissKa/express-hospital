"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const patient_1 = require("./models/patient");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
    next();
});
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/patients", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allPatients = yield patient_1.Patient.find();
        res.status(200).json(allPatients);
    }
    catch (error) {
        next(error);
    }
}));
app.post("/patients", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPatient = new patient_1.Patient(Object.assign({}, req.body));
        const insertedPatient = yield newPatient.save();
        res.status(201).json(insertedPatient);
    }
    catch (error) {
        next(error);
    }
}));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.DATABASE_URL);
        app.listen(process.env.PORT, () => console.log("Server started on port 3001"));
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
});
start();
