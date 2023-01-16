import { Sequelize } from "sequelize";

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/projectsdb`,
  { logging: false }
);