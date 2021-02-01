require("dotenv").config();
const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");

const { models, sequelize } = require("./models");
const routes = require("./routes");

const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

// Middlewares
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(middleware.requestLogger);

app.use(middleware.tokenExtractor);

app.use(async (request, response, next) => {
  request.context = {
    models,
  };
  next();
});

// Routers
app.use("/api/login", routes.loginRoute);
app.use("/api/users", routes.userRoute);
app.use("/api/todos", routes.todoRoute);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

// Start configuration
const eraseDatabaseOnSync = false; // 'true' when we want to reinitialize database entries on every reload

sequelize
  .sync({ force: eraseDatabaseOnSync })
  .then(async () => {
    logger.info("Connected to Postgres");
  })
  .catch((error) => {
    logger.error("Error connecting to Postgres: ", error.message);
  });

module.exports = app;
