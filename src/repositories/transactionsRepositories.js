import { db } from "../config/database.js";

class TransactionsRepository {
    async getAll() {
        const [rows] = await db.query("SELECT * FROM transactions");
        return rows;
    }

    async create(data) {
        const { amount, description, cpf, cnpj } = data

        const [result] = await db.query(`
            INSERT INTO transactions (amount, description, cpf, cnpj)
            VALUES (?, ?, ?, ?)
        `, [
            amount, description, cpf, cnpj
        ])
        return { id: result.insertId, amount, description, cpf, cnpj }
    }

    async delete(id) {
        const [result] = await db.query(`
      DELETE FROM transactions
      WHERE id = ?
    `, [id])
        return result.affectedRows
    }

    async update(id, data) {

        const { amount, description, cpf, cnpj } = data

        const [result] = await db.query(
            `
      UPDATE transactions
      SET
        amount = ?,
        description = ?,
        cpf = ?,
        cnpj = ?
      WHERE id = ?
    `, [
            amount,
            description,
            cpf,
            cnpj,
            id
        ]
        )
        return result.affectedRows
    }

    async findById(id) {
        const [result] = await db.query(
            `
        SELECT *
        FROM transactions
        WHERE id = ?
    `,[id]
        )
        return result
    }
}

export default new TransactionsRepository();