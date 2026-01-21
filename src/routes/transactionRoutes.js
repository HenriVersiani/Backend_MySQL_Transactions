import { Router } from "express";
import { createTransactionController, deleteTransactionController, findTransactionByIdController, getTransactionsController, updateTransactionController } from "../controllers/transactionsController.js";

const router = Router()

router.get("/find/:id", findTransactionByIdController)
router.get("/", getTransactionsController)

router.post("/", createTransactionController)
router.delete("/delete/:id", deleteTransactionController)
router.put("/update/:id", updateTransactionController)

export default router