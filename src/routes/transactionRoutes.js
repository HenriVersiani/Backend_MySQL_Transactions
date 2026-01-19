import { Router } from "express";
import { getTransactionsController } from "../controllers/transactionsController.js";

const router = Router()

router.get("/", getTransactionsController)

export default router