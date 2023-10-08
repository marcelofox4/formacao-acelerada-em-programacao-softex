class Product {
    private static count: number = 0;
    private id: number;
    private name: string;
    private description: string;
    private price: number;
    private quantity: number;

    public constructor(name: string, description: string, price: number, quantity: number) {
        Product.count++;
        this.id = Product.count;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setPrice(newPrice: number) {
        this.price = newPrice;
    }

    public setQuantity(newQuantity: number) {
        this.quantity = newQuantity;
    }
}

export default Product;