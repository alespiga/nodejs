const healthcheck = (fastify, options, done) => {
  fastify.get("/", (request, reply) => {
    reply.code(200).send("I'm okay:-)");
  });
  done();
};

module.exports = { healthcheck };
