const { build } = require("./app.js");

const app = build({ logger: true });

// Run
app.listen(3000, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
