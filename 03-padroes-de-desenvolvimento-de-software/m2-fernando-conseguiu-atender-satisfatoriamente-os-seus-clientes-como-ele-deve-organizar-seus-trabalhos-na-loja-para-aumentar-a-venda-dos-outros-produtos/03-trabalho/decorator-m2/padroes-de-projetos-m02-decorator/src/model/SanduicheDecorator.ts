import { ISanduiche } from "./ISanduiche";

export abstract class SanduicheDecorator implements ISanduiche {
    sanduicheProduzido: ISanduiche;

    public constructor(sanduiche: ISanduiche) {
        this.sanduicheProduzido = sanduiche;
    }

    public abstract preco(): number;
}