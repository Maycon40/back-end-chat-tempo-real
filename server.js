const { WebSocketServer } = require("ws");
const dotenv = require("dotenv");

const app = require("./app");

dotenv.config();

const PORT = process.env.PORT_EXPRESS || 3000;
const port = process.env.PORT || 8080;

const wss = new WebSocketServer({ port });

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

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});