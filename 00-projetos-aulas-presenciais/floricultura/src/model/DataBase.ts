import Client from "./Client";
import Product from "./Product";
import Sale from "./Sale";

class DataBase {
    private clientStorage: Array<Client>;
    private productStorage: Array<Product>;
    private saleStorage: Array<Sale>;

    public constructor() {
        this.clientStorage = [];
        this.productStorage = [];
        this.saleStorage = [];
    }

    public showClients(): Array<Client> {
        return this.clientStorage;
    }

    public showProducts(): Array<Product> {
        return this.productStorage;
    }

    public showSales(): Array<Sale> {
        return this.saleStorage;
    }

    public addClient(client: Client) {
        this.clientStorage.push(client);
    }

    public addProduct(product: Product) {
        this.productStorage.push(product);
    }

    public addSale(sale: Sale) {
        this.saleStorage.push(sale);
    }

    public searchClient(id: number): Client {
        let index = this.clientStorage.findIndex(client => client.getId() == id);
        return this.clientStorage[index];
    }

    public searchProduct(id: number): Product {
        let index = this.productStorage.findIndex(product => product.getId() == id);
        return this.productStorage[index];
    }

    public searchSale(id: number): Sale {
        let index = this.saleStorage.findIndex(sale => sale.getId() == id);
        return this.saleStorage[index];
    }

    public deleteClient(id: number) {
        let client = this.searchClient(id);
        let index = this.clientStorage.indexOf(client);
        this.clientStorage.splice(index, 1);
    }

    public deleteProduct(id: number) {
        let product = this.searchProduct(id);
        let index = this.productStorage.indexOf(product);
        this.productStorage.splice(index, 1);
    }

    public deleteSale(id: number) {
        let sale = this.searchSale(id);
        let index = this.saleStorage.indexOf(sale);
        this.saleStorage.splice(index, 1);
    }
}

export default DataBase;