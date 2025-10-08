import { WebSocketServer } from "ws";
import dotenv from "dotenv";

dotenv.config();

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
