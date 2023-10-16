# Resolução do problema

Para implementar este código começarei com a interface `ISanduiche`:

```tsx
export interface ISanduiche {

    preco(): number;
}
```

Terá como único método `preco()` que terá como retorno o preço total do sanduíche.

<br>

Agora implementaremos a interface `ISanduiche` no `SanduichePadrao` que terá a lista dos ingredientes e fará a soma deles para compor o preço total do sanduíche:

```tsx
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
```

<br>

Na classe abstrata `SanduicheDecorator`, terá um atributo que guarda uma referência para um `ISanduiche` e também será implementada a interface `ISanduiche`:

```tsx
import { ISanduiche } from "./ISanduiche";

export abstract class SanduicheDecorator implements ISanduiche {
    sanduicheProduzido: ISanduiche;

    public constructor(sanduiche: ISanduiche) {
        this.sanduicheProduzido = sanduiche;
    }

    public abstract preco(): number;
}
```

Como guardo essa referência de um Sanduíche posso utilizá-la na classe seguinte.

<br>

A próxima classe a ser implementada é a `FrangoAssado` que implementará a interface `ISanduiche` e será Classe que representará o Sanduíche de Frango:

```tsx
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
```

Na composição de preços eu utilizo um atributo da classe `SanduicheDecorator`, então na hora de compor a precificação, esse atributo já tem como referência um valor que será somado ao Sanduíche de Frango compondo o valor total.

<br>

Então para ilustrar vamos ao código:

```tsx
import { FrangoAssado } from "./model/FrangoAssado";
import { ISanduiche } from "./model/ISanduiche";
import { SanduichePadrao } from "./model/SanduichePadrao";

const ingredientes = new Map<string, number>();

ingredientes.set("Pepperoni", 0.99);
ingredientes.set("Queijo Mussarela Ralado", 2.00);

const sanduichePadrao: ISanduiche = new SanduichePadrao(ingredientes);

const sanduicheFrango: ISanduiche = new FrangoAssado(sanduichePadrao);

console.log(`Sanduiche de Frango:\\n-Pepperoni\\n-Queijo Mussarela Ralado\\n------------------------\\nTotal: ${sanduicheFrango.preco()}`);
```

Então criaremos a lista de `ingredientes` que foi pedida no desafio, e logo em seguida passaremos essa lista para um `SanduichePadrão`  como parâmetro do construtor para composição do preço dos ingredientes. Agora passo essa referência como parâmetro no Sanduíche de Frango, que como ele estende `SanduicheDecorator` que guarda uma referencia de Sanduíche, portanto, é possível somar o valor dos ingredientes com o valor que passei fixo na classe `FrangoAssado` no valor de 4,50.

<br>Dessa forma consigo obter o valor total do sanduíche de frango mais os ingredientes adicionados.

Segue o link do projeto completo:

[padroes-de-projetos-m02-decorator]()
