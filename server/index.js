const server = require("./src/app");
const PORT = process.env.PORT || 3001 ;
const { conn } = require("./src/db");

server.listen(PORT, () => {
  conn.sync();
  console.log("Server raised in port: " + PORT);
});
module.exports = server;
