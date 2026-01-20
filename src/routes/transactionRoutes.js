import { Router } from "express";
import { createTransactionController, deleteTransactionController, getTransactionsController, updateTransactionController } from "../controllers/transactionsController.js";

const router = Router()

router.get("/", getTransactionsController)
router.post("/", createTransactionController)
router.delete("/:id", deleteTransactionController)
router.put("/:id", updateTransactionController)

export default router