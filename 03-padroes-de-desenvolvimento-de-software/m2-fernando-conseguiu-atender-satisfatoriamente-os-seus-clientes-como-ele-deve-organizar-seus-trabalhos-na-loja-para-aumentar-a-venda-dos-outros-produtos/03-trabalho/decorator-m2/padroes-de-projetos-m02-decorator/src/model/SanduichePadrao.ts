import { ISanduiche } from "./ISanduiche";

export class SanduichePadrao implements ISanduiche {
    
    private ingredientes = new Map();

    public constructor(ingredientes: Map<string, number>) {
        this.ingredientes = ingredientes;
    }

    public preco(): number {
        let preco = 0;
        for (const [chave, valor] of this.ingredientes) {
            preco += this.ingredientes.get(chave);
        }
        return preco;
    }
}