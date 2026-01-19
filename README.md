# Backend_MySQL_Transactions

Banking Transactions API

API backend para gerenciamento de transações bancárias usando Node.js e MySQL.

🚀 Tecnologias

Node.js

Express

MySQL

mysql2

dotenv

📂 Estrutura
src/
├── config/
├── controllers/
├── routes/
├── services/
├── app.js
└── server.js

⚙️ Configuração

Instale as dependências:

npm install


Crie o arquivo .env:

Banco: LOCAL

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=db_transactions
DB_PORT=3000


Execute o projeto:

node src/server.js


Servidor em http://localhost:3000

🗄️ Banco de Dados
CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount DECIMAL(10,2) NOT NULL,
  description VARCHAR(255),
  cpf VARCHAR(11),
  cnpj VARCHAR(14),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

📌 Endpoints

GET /transactions — lista transações

POST /transactions — cria transação

👨‍💻 Autor

Projeto desenvolvido para estudo de backend com Node.js e MySQL.
