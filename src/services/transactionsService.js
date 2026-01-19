import transactionsRepository from "../repositories/transactionsRepositories.js";

//possibilita fazer verifiaçoes especificas no servico.

export async function getTransactionsService() {
    const transactions = await transactionsRepository.getAll();
    return transactions
}

export async function createTransactionService(data) {
    const createTransaction = await transactionsRepository.create(data)
    return createTransaction
}

export async function deleteTransactionService(id){
    const deleteTransaction = await transactionsRepository.delete(id)
    return deleteTransaction
}