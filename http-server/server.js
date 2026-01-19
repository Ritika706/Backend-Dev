const http = require("http");

const server = http.createServer((req, res) => {

  const myURL = new URL(req.url, `http://${req.headers.host}`);
  const path = myURL.pathname;

  // HOME ROUTE
  if (req.method === "GET" && path === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Node.js HTTP Server");
  }

  // ABOUT ROUTE
  else if (req.method === "GET" && path === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1><p>This is a simple Node.js server.</p>");
  }

  // USER ROUTE WITH QUERY PARAMS
  else if (req.method === "GET" && path === "/user") {
    const name = myURL.searchParams.get("name");
    const age = myURL.searchParams.get("age");

    const userData = {
      name: name,
      age: age
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(userData));
  }

  // INVALID ROUTE
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
  
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
