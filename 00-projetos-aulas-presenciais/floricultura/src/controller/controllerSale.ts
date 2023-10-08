import Client from "../model/Client";
import ClientController from "./controllerClient";
import Product from "../model/Product";
import ProductContoller from "./controllerProduct";
import DataBase from "../model/DataBase";
import Sale from "../model/Sale";

const database: DataBase = DataBase.getInstance();
const clientController: ClientController = new ClientController();
const productController: ProductContoller = new ProductContoller();

class SaleController {

    public buy(idClient: number, idProduct: number) {
        let client: Client = clientController.search(idClient);
        let product: Product = productController.search(idProduct);
        if (client && product) {
            const sale: Sale = new Sale(client, product);
            database.getSaleStorage().push(sale);
            return;
        }
        throw new Error("Dados imcompatíveis");   
    }

    public showAll(): Array<Sale> {
        return database.getSaleStorage();
    }

    public showAllSalesByClient(idClient: number): Array<Product> {
        let allSales: Array<Product> = [];
        let client: Client = clientController.search(idClient);
        for (let i = 0; i < allSales.length; i++) {
            if (client) {
                allSales.push(database.getSaleStorage()[i].getProduct());
            }
        }
        return allSales;
    }

    public showAllSalesByProduct(idProduct: number) {
        let array = [];
        for (let i = 0; i < array.length; i++) {
            if (database.getSaleStorage()[i].getProduct().getId() == idProduct) {
                array.push(database.getSaleStorage()[i].getClient());
            }
        }
        return array;
    }
}

export default SaleController;