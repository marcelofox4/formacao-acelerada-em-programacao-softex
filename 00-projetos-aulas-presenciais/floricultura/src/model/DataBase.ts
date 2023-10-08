import Client from "./Client";
import Product from "./Product";
import Sale from "./Sale";

// Aplicando Padrão de Projeto Singleton
class DataBase {
    private static instance: DataBase;
    private clientStorage: Array<Client>;
    private productStorage: Array<Product>;
    private saleStorage: Array<Sale>;

    public constructor() {
        this.clientStorage = [];
        this.productStorage = [];
        this.saleStorage = [];
    }

    public static getInstance(): DataBase {
        if (!this.instance) {
            this.instance = new DataBase();
        }
        return this.instance;
    }

    public getClientStorage(): Array<Client> {
        return this.clientStorage;
    }

    public getProductStorage(): Array<Product> {
        return this.productStorage;
    }

    public getSaleStorage(): Array<Sale> {
        return this.saleStorage;
    }
}

export default DataBase;