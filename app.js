const express = require("express");

const statusRoutes = require("./routes/status");

const app = express();

app.use(express.json());

// Rotas
app.use("/api/v1/status", statusRoutes);

// Middleware de erro genérico (opcional)
app.use((err, req, res, next) => {
  console.error("Erro:", err);
  res.status(500).json({ error: "Erro interno no servidor" });
});

module.exports = app;
