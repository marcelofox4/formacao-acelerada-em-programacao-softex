import express from 'express';
import ClientController from './controller/controllerClient';
import ProductContoller from './controller/controllerProduct';
import SaleController from './controller/controllerSale';

const server = express();
server.use(express.json());
const port = 3333;

// Rotas - Clientes
const clientController: ClientController = new ClientController();

server.get('/lista-de-clientes', (req, res) => {
    res.send(clientController.show());
})

server.get('/quantidade-de-clientes', (req, res) => {
    res.send(`Quantidade de clientes cadastrados: ${clientController.quantityClients()}`);
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

server.put('/modificar-cliente/:id', (req, res) => {
    let id = Number(req.params.id);
    let address = req.body.address;
    let phoneNumber = req.body.phoneNumber;

    try {
        clientController.update(id, address, phoneNumber);
        res.send(clientController.show());
    } catch (error) {
        console.log(error);
        res.send(`Não foi possível atualizar o cliente.<br>
        Favor verificar os dados!`);
    }
})

server.delete('/excluir-cliente/:id', (req, res) => {
    let id = Number(req.params.id);
    try {
        clientController.delete(id);
        res.send(clientController.show())
    } catch (error) {
        console.log(error);
        res.send(`Não foi possível encontrar um Cliente com o ID: ${id}`)
    }
})

// Rotas - Produtos
const productController: ProductContoller = new ProductContoller();

server.get('/lista-de-produtos', (req, res) => {
    res.send(productController.show());
})

server.get('/quantidade-de-produtos-cadastrados', (req, res) => {
    res.send(`Quantidade de produtos cadastrados: ${productController.quantityProducts()}`);
})

server.get('/produto/:id', (req, res) => {
    let id: number = Number(req.params.id);
    try {
        let product = productController.search(id);
        res.send(product);
    } catch (error) {
        console.log(error);
        res.send(`Não foi possível encontrar um Produto com o ID: ${id}`);
    }
})

server.post('/adicionar-produto', (req, res) => {
    let productName = req.body.name;
    let productDescription = req.body.description;
    let productPrice = Number(req.body.price);
    let productQuantity = Number(req.body.quantity);

    try {
        let product = productController.create(productName, productDescription, productPrice, productQuantity);
        productController.add(product);
        res.send(product);
    } catch (error) {
        console.log(error);
        res.send(`Não foi possível criar um produto.<br>
        Favor verificar os dados!`);
    }
})

server.put('/modificar-produto/:id', (req, res) => {
    let id = Number(req.params.id);
    let price = Number(req.body.price);
    let quantity = Number(req.body.quantity);

    try {
        productController.update(id, price, quantity);
        res.send(productController.show());
    } catch (error) {
        console.log(error);
        res.send(`Não foi possível atualizar o produto.<br>
        Favor verificar os dados!`);
    }
})

server.delete('/excluir-produto/:id', (req, res) => {
    let id = Number(req.params.id);
    try {
        productController.delete(id);
        res.send(productController.show())
    } catch (error) {
        console.log(error);
        res.send(`Não foi possível encontrar o Produto com o ID: ${id}`)
    }
})

// Rotas - Vendas
const saleController: SaleController = new SaleController();

server.get('/lista-de-vendas', (req, res) => {
    res.send(saleController.showAll());
})

server.get('/compras-por-cliente/:id', (req, res) => {
    let id = Number(req.params.id);
    let array = saleController.showAllSalesByClient(id);
    res.send(array);
})

server.post('/compra/:idClient/:idProduct', (req, res) => {
    let idClient: number = Number(req.params.idClient);
    let idProduct: number = Number(req.params.idProduct);
    let buy = [];

    try {
        saleController.buy(idClient, idProduct);
        let client = clientController.search(idClient);
        let product = productController.search(idProduct);
        buy.push(client, product);
        res.send(buy);
    } catch (error) {
        console.log(error);
        res.send('Compra não efetuada, favor avaliar os dados!')
    }
})
server.listen(port, () => {
    console.log(`Servidor rodando no endereco http://localhost:${port}`);
})