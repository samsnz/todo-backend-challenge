const Sequelize = require("sequelize");
const config = require("../utils/config");

const sequelize = new Sequelize(config.POSTGRES_DB_URI, {
  dialect: "postgres",
});

const models = {
  User: require("./user")(sequelize, Sequelize),
  Todo: require("./todo")(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {
  models,
  sequelize,
};
