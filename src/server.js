const { build } = require("./app.js");

const app = build(
  { logger: true },
  {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
      info: { title: "Fastify API test", version: "1.0.0" },
    },
  }
);

// Run
app.listen(3000, "0.0.0.0", function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
