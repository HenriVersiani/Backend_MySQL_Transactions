import transactionsRepository from "../repositories/transactionsRepositories.js";

//possibilita fazer verifiaçoes especificas no servico.

export async function getTransactionsService() {
    const transactions = await transactionsRepository.getAll();
    return transactions
}

export async function createTransactionService(data) {
    if (data.amount <= 0) {
        throw new Error("O valor da transação deve ser maior que zero")
    }

    const createTransaction = await transactionsRepository.create(data)
    return createTransaction
}

export async function deleteTransactionService(id){
    const transaction = await transactionsRepository.findById(id)

    if (!transaction) {
        throw new Error("Transação não encontrada")
    }

    const deleteTransaction = await transactionsRepository.delete(id)
    return deleteTransaction
}

export async function updateTransactionService(id, data) {
    const updateTransaction = await transactionsRepository.update(id, data)
    return updateTransaction
}

export async function findTransactionByIdService(id) {
    const transactionFound = await transactionsRepository.findById(id)
    return transactionFound
}