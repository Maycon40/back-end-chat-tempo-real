const { WebSocketServer } = require("ws");
const dotenv = require("dotenv");
const http = require("http");

const app = require("./app");

dotenv.config();

const port = process.env.PORT || 8080;

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log(`Novo usuário conectado`);

  ws.on("error", console.error);

  ws.on("message", (data) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === client.OPEN) {
        client.send(data);
      }
    });
  });
});

server.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
