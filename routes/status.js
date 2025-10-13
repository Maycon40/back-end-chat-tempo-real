const express = require("express");
const WebSocket = require("ws");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 8080;

router.get("/", async (req, res) => {
  const updatedAt = new Date().toISOString();
  const version = process.version;

  let status = "offline";
  let detail = "";

  try {
    await new Promise((resolve, reject) => {
      const ws = new WebSocket(`ws://localhost:${port}`);

      ws.on("open", () => {
        status = "online";
        detail = "Conexão estabelecida com sucesso.";
        ws.close();
        resolve();
      });

      ws.on("error", (err) => {
        detail = `Falha ao conectar: ${err.message}`;
        reject(err);
      });

      // Timeout de segurança
      setTimeout(() => reject(new Error("Timeout ao tentar conectar")), 3000);
    });
  } catch (err) {
    if (err instanceof Error) detail = err.message;
    else detail = String(err);
  }

  const response = {
    updated_at: updatedAt,
    web_socket: {
      status,
      detail,
      version,
    },
  };

  res.json(response);
});

module.exports = router;
