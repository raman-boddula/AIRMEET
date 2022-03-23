const connect = require("./src/configs/db");

const app = require("./src/index");
const PORT = process.env.PORT || 2345;
app.listen(PORT, async () => {
  await connect();
  console.log(`Listening on port ${PORT}`);
});
