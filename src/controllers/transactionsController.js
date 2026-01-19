import { getTransactionsService } from "../services/transactionsService.js"

export async function getTransactionsController(req, res){

    const response = await getTransactionsService()
    return res.json(response)
}