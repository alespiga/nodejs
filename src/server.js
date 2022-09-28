//setup
const fastify = require("fastify")({
  logger: true,
});

// Routes
fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

// Run
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
