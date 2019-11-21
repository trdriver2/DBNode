const http = require("http");
const port = 8080;

http
  .createServer((req, res) => {
    res.end();
  })
  .listen(port, () => console.log("Listening on localhost:" + port));
