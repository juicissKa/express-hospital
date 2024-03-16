import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../instances/sequelize";
import { Visit } from "./visit";

export const NervousSystem = sequelize.define(
  "nervous_system",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    polyneuropathy_id: {
      type: DataTypes.INTEGER,
    },
    mononeuritis: {
      type: DataTypes.INTEGER,
    },
    complication_id: {
      type: DataTypes.INTEGER,
    },
    atherosclerosis_id: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
