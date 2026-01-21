import TransactionsModels from "../models/transactionModels.js";

//possibilita fazer verifiaçoes especificas no servico.

class TransactionServices {
    async getTransactions() {
        const transactions = await TransactionsModels.getAll();
        return transactions
    }

    async createTransaction(data) {
        if (data.amount <= 0) {
            throw new Error("O valor da transação deve ser maior que zero")
        }

        const createTransaction = await TransactionsModels.create(data)
        return createTransaction
    }

    async deleteTransaction(id) {
        const transaction = await TransactionsModels.findById(id)

        await this.verifyTransaction(transaction)

        const deleteTransaction = await TransactionsModels.delete(id)
        return deleteTransaction
    }

    async updateTransaction(id, data) {
        const currentTransaction = await TransactionsModels.findById(id)

        if (!currentTransaction) {
            throw new Error("Transação não encontrada")
        }

        const updatedData = {
            amount: data.amount ?? currentTransaction.amount,
            description: data.description ?? currentTransaction.description,
            cpf: data.cpf ?? currentTransaction.cpf,
            cnpj: data.cnpj ?? currentTransaction.cnpj,
        }

        const updateTransaction = await TransactionsModels.update(id, updatedData)

        await this.verifyTransaction(updateTransaction)

        return updateTransaction
    }

    async findTransactionById(id) {
        const transactionFound = await TransactionsModels.findById(id)

        await this.verifyTransaction(transactionFound)

        return transactionFound
    }

    async verifyTransaction(transaction) {
        if (!transaction || transaction == null) {
            throw new Error("Transação não encontrada!")
        }
    }
}

export default new TransactionServices()


