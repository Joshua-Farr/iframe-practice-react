const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const urlPath = req.url === "/" ? "/index.html" : req.url;

  const filepath = path.join(__dirname, "..", "public", urlPath);

  fs.readFile(filepath, "utf8", (err, content) => {
    if (err) {
      console.error(`Error reading file "${filepath}":`, err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      const contentType =
        path.extname(filepath) === ".js"
          ? "application/javascript"
          : "text/html";

      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
