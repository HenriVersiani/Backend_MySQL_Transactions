import { createTransactionService, getTransactionsService } from "../services/transactionsService.js"

export async function getTransactionsController(req, res){

    const response = await getTransactionsService()
    return res.json(response)
}

export async function createTransactionController(req, res){
    const data = req.body
    const response = await createTransactionService(data)

   return res.json(response)
}

export async function deleteTransactionController(req, res) {
    const { id } = req.params
    const response = await deleteTransactionService(id)

    return res.json(response)
}