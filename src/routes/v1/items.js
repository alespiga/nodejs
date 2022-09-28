let items = require("../../data/itemsData");

const item = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    description: { type: "string" },
  },
};

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: item,
      },
    },
  },
};

const getItemOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: item,
      },
    },
  },
};

const itemRoutes = (fastify, options, done) => {
  fastify.get("/", getItemsOpts, (request, reply) => {
    reply.send(items);
  });

  fastify.get("/:id", getItemOpts, (request, reply) => {
    const { id } = request.params;
    const item = items.find((item) => item.id === id);
    reply.send(item);
  });
  done();
};

module.exports = { itemRoutes };
