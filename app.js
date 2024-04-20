const http = require("http");
const path = require("path");
const mainRouteController = require("./controllers/main");
const defaultRouteController = require("./controllers/default");
const gameRouteController = require("./controllers/game");
const voteRouteController = require("./controllers/vote")

const PORT = 3005;

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/":
          mainRouteController(res, "/index.html", ".html");
        break;
      case "/game":
          gameRouteController(res);
        break;
      case "/vote":
          voteRouteController(req, res);
        break;
      default:
          defaultRouteController(res, url);
        break;
    }
  });

  server.listen(PORT);