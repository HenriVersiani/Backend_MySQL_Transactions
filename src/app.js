import express from "express";
import "./config/database.js"; // ← só importar já conecta
import transactionsRoutes from "./routes/transactionRoutes.js";

const app = express();

app.use(express.json());
app.use("/transactions", transactionsRoutes)

export default app;