import { db } from "../config/database.js";

class TransactionsModels {
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
        console.log(result.affectedRows.length)
        return result.affectedRows > 0 ? result : null
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
        return result.affectedRows > 0 ? result : null
    }

    async findById(id) {
        const [result] = await db.query(
            `
        SELECT *
        FROM transactions
        WHERE id = ?
    `,[id]
        )
        return result.length > 0 ? result[0] : null
    }
}

export default new TransactionsModels();