import express from "express";
import "./config/database.js"; // ← só importar já conecta

const app = express();

app.use(express.json());
app.use("/transactions", transactionRoutes)

export default app;