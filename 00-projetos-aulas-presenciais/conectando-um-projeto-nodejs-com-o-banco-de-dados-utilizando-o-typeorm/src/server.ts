import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database/data-source";
import { User } from "./entities/User";

const app = express();

app.use(express.json());

const userRepository = AppDataSource.getRepository(User);

async function create(nome: string): Promise<void> {
    const customer = userRepository.create({nome});

    await userRepository.save(customer);
}

app.post("/usuarios", async (request, response) => {
    
    const { name } = request.body;
    await create(name);

    return response.status(201).json({message: "Usuário criado!"});
})


AppDataSource.initialize().then(async () => {
    console.log("Banco de dados Conectado!");
    app.listen(3333, () => console.log("Servidor Funcionado"));
})