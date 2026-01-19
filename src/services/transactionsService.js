import transactionsRepository from "../repositories/transactionsRepositories.js";

export async function getTransactionsService() {
    const transactions = await transactionsRepository.getAll();
    return transactions
}