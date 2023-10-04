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

// http://localhost:3333/clients
server.get('/clients', (req, res) => {
    res.send(database.showClients());
})

// http://localhost:3333/client/888.777.888-77/João/81 96655-4422/Rua E, 05
server.post('/client/:cpf/:name/:phoneNumber/:address', (req, res) => {
    //TODO: validar os parametros.
    let clientCpf = req.params.cpf;
    let clientName = req.params.name;
    let clientPhoneNumber = req.params.phoneNumber;
    let clientAddress = req.params.address;

    let client = new Client(clientCpf, clientName, clientPhoneNumber, clientAddress);
    database.addClient(client);

    res.send(`Cliente ${clientName} cadastrado com Sucesso!`);
})

// http://localhost:3333/client/5/Rua das larangeiras, 400/ 81 91111-1111
server.put('/client/:id/:Address/:phoneNumber', (req, res) => {
    let id = Number(req.params.id);
    let address = req.params.Address;
    let phoneNumber = req.params.phoneNumber;
    let client = database.searchClient(id);

    client.setAddress(address);
    client.setPhoneNumber(phoneNumber);
    res.send("Atualização realizada com sucesso!")
})

// http://localhost:3333/client/3
server.delete('/client/:id', (req, res) => {
    let id = Number(req.params.id);
    database.deleteClient(id);

    res.send(`Cliente com ID: ${id} foi removido com sucesso!`)
})

server.listen(port, () => {
    console.log(`Servidor rodando no endereco http://localhost:${port}`);
})