// Setup
const fastify = require("fastify");
const { itemRoutes } = require("./routes/v1/items");

const build = (options = {}) => {
  const app = fastify(options);
  app.register(itemRoutes);

  return app;
};

module.exports = { build };
