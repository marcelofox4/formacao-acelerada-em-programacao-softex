# Resolução do problema

Primeiramente criarei duas interfaces `IPatoCaracteristica` e `IGalinhaCaracteristica`, o código fica assim:

`IPatoCaracteristica`

```tsx
export interface IPatoCaracteristica {

    emitirSom(): void;
}
```

<br>

`IGalinhaCaracteristica`

```tsx
export interface IGalinhaCaracteristica {
    
    emitirSom(): void;
}
```

<br>

As duas interfaces terão o mesmo método `emitirSom()` que serão implementados nas respectivas classes `Pato` e `Galinha`:

`Pato`

```tsx
import { IPatoCaracteristica } from "./IPatoCaracteristica";

export class Pato implements IPatoCaracteristica {

    emitirSom(): void {
        console.log("Quac, Quac!");
    }
}
```

<br>

`Galinha`

```tsx
import { IGalinhaCaracteristica } from "./IGalinhaCaracteristica";

export class Galinha implements IGalinhaCaracteristica {

    emitirSom(): void {
        console.log("Có, Có!");
    }
}
```

Cada classe emite um som diferente de acordo com as suas características.

<br>

Agora vamos a classe `AdaptadorPato`:

```tsx
import { Galinha } from "./Galinha";
import { IPatoCaracteristica } from "./IPatoCaracteristica";

export class AdptadorPato implements IPatoCaracteristica{

    private galinha: Galinha;
    
    constructor(galinha: Galinha){
        this.galinha = galinha;
    }

    emitirSom(): void {
        console.log(this.galinha.emitirSom());
    }
}
```

A classe implementa a interface `IPatoCaracteristica` e tem como atributo uma galinha e no seu construtor a classe recebe como parâmetro uma galinha. Quando implementamos o método `emitirSom()`, passamos o atributo galinha emitindo o som de galinha.

<br>

Para ilustrar o uso vamos ao arquivo `index.ts`:

```tsx
import { AdptadorPato } from "./models/AdaptadorPato";
import { Galinha } from "./models/Galinha";
import { Pato } from "./models/Pato";

let galinha: Galinha = new Galinha();

let pato: Pato = new AdptadorPato(galinha);

console.log("Pato pensando que é galinha:");
pato.emitirSom();
```

Instanciamos um objeto do tipo `Galinha` para passar como parâmetro no construtor da classe `AdptadorPato()`, e logo em seguida instanciamos um objeto do tipo `Pato` e utilizamos o método `emitirSom()`.

<br>

Podemos ver que na saída do console, o objeto `pato` não emite um som característico dele:

```tsx
/*
Saída:
Pato pensando que é galinha:
Có, Có!
*/
```



[padroes-de-projetos-m02-adapter]()
