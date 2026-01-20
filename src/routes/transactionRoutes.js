import { Router } from "express";
import { createTransactionController, deleteTransactionController, findTransactionByIdController, getTransactionsController, updateTransactionController } from "../controllers/transactionsController.js";

const router = Router()

router.get("/", getTransactionsController)
router.get("/:id", findTransactionByIdController)

router.post("/", createTransactionController)
router.delete("/:id", deleteTransactionController)
router.put("/:id", updateTransactionController)

export default router