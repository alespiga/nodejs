let items = require("../../data/itemsData");

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "integer" },
            name: { type: "string" },
            description: { type: "string" },
          },
        },
      },
    },
  },
};

const itemRoutes = (fastify, options, done) => {
  fastify.get("/", getItemsOpts, (request, reply) => {
    reply.send(items);
  });

  fastify.get("/:id", (request, reply) => {
    const { id } = request.params;
    const item = items.find((item) => item.id === id);
    reply.send(item);
  });
  done();
};

module.exports = { itemRoutes };
