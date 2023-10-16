import { ISanduiche } from "./ISanduiche";
import { SanduicheDecorator } from "./SanduicheDecorator";

export class FrangoAssado extends SanduicheDecorator {

    public constructor(sanduiche: ISanduiche) {
        super(sanduiche);
    }

    public preco(): number {
        return this.sanduicheProduzido.preco() + 4.5;
    }
}