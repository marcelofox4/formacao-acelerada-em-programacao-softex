import Product from "../model/Product";
import DataBase from "../model/DataBase";

const database: DataBase = DataBase.getInstance();

class ProductContoller {

    public create(name: string, description: string, price: number, quantity: number): Product {
        if (name && description && price && quantity) {
            const product: Product = new Product(name, description, price, quantity);
            return product;
        }
        throw new Error("Dados imcompatíveis");
    }

    public show(): Array<Product> {
        return database.getProductStorage();
    }

    public quantityProducts(): number {
        return database.getProductStorage().length;
    }

    public add(product: Product) {
        database.getProductStorage().push(product);
    }

    public search(id: number): Product {
        let index = database.getProductStorage().findIndex(product => product.getId() == id);
        if (index == -1) {
            throw new Error("Cliente inexistente!");
        }
        return database.getProductStorage()[index];
    }

    public update(id: number, price?: number, quantity?: number) {
        let product: Product = this.search(id);
        if (price && quantity) {
            product.setPrice(price);
            product.setQuantity(quantity);
            return;
        } else if (quantity) {
            product.setQuantity(quantity);;
            return;
        } else if (price) {
            product.setPrice(price);
            return;
        }
        throw new Error("Dados incorretos!");
    }

    public delete(id: number) {
        let product: Product = this.search(id);
        let index: number = database.getProductStorage().indexOf(product);
        database.getProductStorage().splice(index, 1);
    }
}

const controllerProduct: ProductContoller = new ProductContoller();
controllerProduct.add(controllerProduct.create("Buquê", "Buquê 6 rosas vermelhas", 115.99, 20));
controllerProduct.add(controllerProduct.create("Arranjo romântico", "Arranjo de flores & Chocolate", 299.99, 10));
controllerProduct.add(controllerProduct.create("Cesta de Café da Manhã", "Cesta de Café da Manhã Luxury", 249.99, 10));
controllerProduct.add(controllerProduct.create("Box elegance", "Box com rosas e Pelúcia", 129.99, 5));

export default ProductContoller;