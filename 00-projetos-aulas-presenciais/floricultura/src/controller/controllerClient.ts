import Client from "../model/Client";
import DataBase from "../model/DataBase";

const database: DataBase = DataBase.getInstance();

class ClientController {

    public create(cpf:string, name:string, phoneNumber:string, address:string): Client {
        if (cpf && name && phoneNumber && address) {
            const client: Client = new Client(cpf, name, phoneNumber, address);
            return client;
        }
        throw new Error("Dados imconpatíveis");
    }
    
    public show(): Array<Client> {
        return database.getClientStorage();
    }

    public add(client: Client) {
        database.getClientStorage().push(client);
    }

    public search(id: number): Client {
        let index = database.getClientStorage().findIndex(client => client.getId() == id);
        if (index == -1) {
            throw new Error("Cliente inexistente!");
        }
        return database.getClientStorage()[index];
    }

    public delete(id: number) {
        let client: Client = this.search(id);
        let index: number = database.getClientStorage().indexOf(client);
        database.getClientStorage().splice(index, 1);
    }

    public update(id: number, address?: string, phoneNumber?: string) {
        let client: Client = this.search(id);
        if (address && phoneNumber) {
            client.setAddress(address);
            client.setPhoneNumber(phoneNumber);
            return;
        } else if (phoneNumber) {
            client.setPhoneNumber(phoneNumber);
            return;
        } else if (address) {
            client.setAddress(address);
            return;
        }
        throw new Error("Dados incorretos!");
    }

}
const clientController = new ClientController();
const clientOne = new Client('111.222.333-44', 'Marcelo', '81 99988-7766', 'Rua A, 01');
clientController.add(clientOne);
const clientTwo = new Client('222.333.444-55', 'Emílio', '81 98877-6655', 'Rua B, 02');
clientController.add(clientTwo);
const clientThree = new Client('333.444.555-66', 'Richele', '81 97766-5544', 'Rua C, 03');
clientController.add(clientThree);
const clientFour = new Client('444.555.666-77', 'Claúdio', '81 96644-3322', 'Rua D, 04');
clientController.add(clientFour);

export default ClientController;