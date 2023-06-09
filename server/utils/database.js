const { Sequelize } = require("sequelize");
require("dotenv").config();

const USER_DATA = process.env.USER_DATA;
const NAME_DATA = process.env.NAME_DATA;
const PASSWORD_DATA = process.env.PASSWORD_DATA;

const sequelize = new Sequelize(USER_DATA, NAME_DATA, PASSWORD_DATA, {
  dialect: "mysql",
  host: "localhost",
  charset: "utf8mb4",
});

module.exports = sequelize;
