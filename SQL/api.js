const http = require("http");
const port = 8080;

http
  .createServer((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.end();
  })
  .listen(port, () => console.log("Listening on localhost:" + port));
