const itemRoutes = (fastify, options, done) => {
  fastify.get("/", (request, reply) => {
    return { hello: "world" };
  });

  done();
};

module.exports = { itemRoutes };
