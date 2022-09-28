// Setup
const fastify = require("fastify");
const fastifySwagger = require("@fastify/swagger");
const { itemRoutes } = require("./routes/v1/items");

const build = (options = {}, optionSwagger) => {
  const app = fastify(options);
  app.register(fastifySwagger, optionSwagger);
  app.register(itemRoutes);

  return app;
};

module.exports = { build };
