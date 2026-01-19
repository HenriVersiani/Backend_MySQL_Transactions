import { db } from "../config/database.js";

class TransactionsRepository {
    async getAll() {
        const [rows] = await db.query("SELECT * FROM transactions");
        return rows;
    }
}

export default new TransactionsRepository();