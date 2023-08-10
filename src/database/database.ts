import { Sequelize } from "sequelize";

export const connection = new Sequelize("guiapress", "root", "126433", {
  host: "localhost",
  dialect: "mysql",
});
