const { Sequelize } = require("sequelize");

// Option 2: Passing parameters separately (other dialects)
module.exports = new Sequelize("sequelize-db", "postgres", "root", {
  host: "localhost",
  dialect: "postgres", /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  logging: false,
});
