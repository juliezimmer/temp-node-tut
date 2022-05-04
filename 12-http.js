const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  } // default response if user is asking for a page that doesn't exist
  res.end(`
  <h1>Oops!</h1>
  <p>We can't find the page you want</p>
  <a href="/">back home</a>
  `);
});
server.listen(5000);
