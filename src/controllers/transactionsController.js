import TransactionServices from "../services/transactionsService.js"



export async function getTransactionsController(req, res){
    const response = await TransactionServices.getTransactions()
    return res.json(response)
}

export async function createTransactionController(req, res){
    const data = req.body
    const response = await TransactionServices.createTransaction(data)

   return res.json(response)
}

export async function deleteTransactionController(req, res) {
    const { id } = req.params
    const response = await TransactionServices.deleteTransaction(id)

    return res.json(response)
}

export async function updateTransactionController(req, res) {
    const { id } = req.params

    const data = req.body

    const response = await TransactionServices.updateTransaction(id, data)

    return res.json(response)
}

export async function findTransactionByIdController(req, res) {
    const { id } = req.params

    const response = await TransactionServices.findTransactionById(id)

    return res.json(response)
}
