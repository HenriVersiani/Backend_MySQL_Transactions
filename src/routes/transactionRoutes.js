import { Router } from "express";
import { createTransactionController, getTransactionsController } from "../controllers/transactionsController.js";

const router = Router()

router.get("/", getTransactionsController)
router.post("/", createTransactionController)
router.delete("/", deleteTransactionController)

export default router