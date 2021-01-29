require("dotenv").config();

let PORT = process.env.PORT;
let POSTGRES_DB_URI = process.env.POSTGRES_DB_URI;

if (process.env.NODE_ENV === "test") {
  POSTGRES_DB_URI = process.env.TEST_POSTGRES_DB_URI;
}

module.exports = {
  POSTGRES_DB_URI,
  PORT,
};
