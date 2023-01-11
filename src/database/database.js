import { Sequelize } from "sequelize";

const DB_USER = "postgres";
const DB_PASSWORD = "pato123";
const DB_HOST = "localhost:5432";

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/projectsdb`,
  { logging: false }
);