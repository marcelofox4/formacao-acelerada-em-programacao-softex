import Client from "./Client";
import Product from "./Product";

class Sale {
    private static count: number = 0;
    private id: number;
    private client: Client;
    private product: Product;

    public constructor(client: Client, product: Product) {
        Sale.count++;
        this.id = Sale.count;
        this.client = client;
        this.product = product;
    }

    public getId(): number {
        return this.id;
    }

    public getClient(): Client {
        return this.client;
    }

    public getProduct(): Product {
        return this.product
    }
}

export default Sale;