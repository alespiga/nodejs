let items = require("../../data/itemsData");

const itemRoutes = (fastify, options, done) => {
  fastify.get("/", (request, reply) => {
    return { hello: "world" };
  });

  fastify.get("/:id", (request, reply) => {
    const { id } = request.params;
    const item = items.find((item) => item.id === id);
    reply.send(item);
  });
  done();
};

module.exports = { itemRoutes };
