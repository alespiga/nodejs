let items = require("../../data/itemsData");

const item = {
  type: "object",
  properties: {
    id: { type: "string" },
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

const postItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name", "description"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
      },
    },
    response: {
      201: item,
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

  fastify.post("/", postItemOpts, (request, reply) => {
    const { name, description } = request.body;
    const item = { id: String(items.lenght + 1), name, description };
    items.push(item);
    reply.code(201).send(item);
  });

  done();
};

module.exports = { itemRoutes };
