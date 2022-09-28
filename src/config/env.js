require("dotenv").config;

const envalid = require("envalid");

module.exports = envalid.cleanEnv(process.env, {
  POSTGRES_DB_CONNECTION_STRING: envalid.str({}),
  WEB_APP_PORT: envalid.num({ default: 8080 }),
});
