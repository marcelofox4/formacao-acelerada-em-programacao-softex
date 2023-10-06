import express from 'express';
import ClientController from './controller/controllerClient';

const server = express();
server.use(express.json());
const port = 3333;

const clientController: ClientController = new ClientController();

server.get('/lista-de-clientes', (req, res) => {
    res.send(clientController.show());
})

server.get('/cliente/:id', (req, res) => {
    let id: number = Number(req.params.id);
    try {
        let client = clientController.search(id);
        res.send(client);
    } catch (error) {
        console.log(error);
        res.send(`Não foi possível encontrar um Cliente com o ID: ${id}`)
    }
})

server.post('/adicionar-cliente', (req, res) => {
    //TODO: validar os parametros.
    let clientCpf = req.body.cpf;
    let clientName = req.body.name;
    let clientPhoneNumber = req.body.phoneNumber;
    let clientAddress = req.body.address;

    try {
        let client = clientController.create(clientCpf, clientName, clientPhoneNumber, clientAddress);
        clientController.add(client);
        res.send(client);
    } catch (error) {
        console.log(error);
        res.send("Não foi possível criar um Cliente, os dados são incompatíveis!")
    }
})

// http://localhost:3333/client/5/Rua das larangeiras, 400/ 81 91111-1111
server.put('/modificar-cliente/:id', (req, res) => {
    let id = Number(req.params.id);
    let address = req.body.address;
    let phoneNumber = req.body.phoneNumber;


    try {
        clientController.update(id, address, phoneNumber);
        res.send(clientController.show());
    } catch (error) {
        console.log(error);
        res.send(`Cliente não encontrado com ID: ${id}<br>
        OU<br> 
        Dados Incorretos, inserir apenas:<br>
        - Endereço<br>
        - Telefone<br>
        Favor verificar os dois!`);
    }

})

// http://localhost:3333/client/3
server.delete('/client/:id', (req, res) => {
    let id = Number(req.params.id);
    clientController.delete(id);

    res.send(clientController.show())
})

server.listen(port, () => {
    console.log(`Servidor rodando no endereco http://localhost:${port}`);
})