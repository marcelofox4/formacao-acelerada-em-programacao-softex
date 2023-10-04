"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Client_1 = __importDefault(require("./model/Client"));
const app = (0, express_1.default)();
const port = 3333;
const clienteMarcelo = new Client_1.default("99988877766", "Marcelo Sodré", "819889334", "Rua 1");
const clientePriscilla = new Client_1.default("11122233344", "Priscilla Aquilla", "81999054593", "Rua 2");
const bd = [];
bd.push(clienteMarcelo);
bd.push(clientePriscilla);
app.get('/', (req, res) => {
    console.log(bd);
    return res.json(bd);
});
app.post('/cliente/:cpf/:name/:phoneNumber/:address', (req, res) => {
    let cpf = req.params.cpf;
    let name = req.params.name;
    let phoneNumber = req.params.phoneNumber;
    let address = req.params.address;
    const client = new Client_1.default(cpf, name, phoneNumber, address);
    bd.push(client);
    return res.send('Cliente Adicionado!');
});
app.listen(port);
