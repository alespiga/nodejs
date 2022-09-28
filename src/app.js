// Setup
const fastify = require("fastify");
const fastifySwagger = require("@fastify/swagger");
const fastifyPostgres = require("@fastify/postgres");
const { itemRoutes } = require("./routes/v1/items");

const build = (options = {}, optionSwagger = {}, optionPostgres = {}) => {
  const app = fastify(options);

  app.register(fastifyPostgres, optionPostgres);

  app.register(fastifySwagger, optionSwagger);

  app.register(itemRoutes);

  return app;
};

module.exports = { build };
