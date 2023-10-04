import express from 'express';
import Database from './model/DataBase';
import Client from './model/Client';

const database = new Database();

const clientOne = new Client('111.222.333-44', 'Marcelo', '81 99988-7766', 'Rua A, 01');
database.addClient(clientOne);
const clientTwo = new Client('222.333.444-55', 'Emílio', '81 98877-6655', 'Rua B, 02');
database.addClient(clientTwo);
const clientThree = new Client('333.444.555-66', 'Richele', '81 97766-5544', 'Rua C, 03');
database.addClient(clientThree);
const clientFour = new Client('444.555.666-77', 'Claúdio', '81 96644-3322', 'Rua D, 04');
database.addClient(clientFour);

const server = express();
server.use(express.json());

const port = 3333;

server.get('/clients', (req, res) => {
    res.send(database.showClients());
})

server.listen(port, () => {
    console.log(`Servidor rodando no endereco http://localhost:${port}`);
})
