# Resolução do problema

Na classe `SistemaSeguranca.ts` irei criar um único acesso para criação de um objeto que será o método estático `acessarBaseSecreta()`. Esse métodos sempre irá verificar as credenciais antes de acessar a única instancia do objeto, vamos a implementação:

```tsx
class SistemaSegurança {

		// Atributo que será utilizado para acessar a nossa única estancia.
    private static instance: SistemaSeguranca;

		// Atributos de credenciais para acesso da instancia.
    private static login: string = "softex";
    private static password: string = "sistemami7";

		private constructor() {
        console.log("Essa mensagem só aparecerá uma única vez, pois só uma instância deste objeto será criada!");
    }

		// Único ponto de acesso para a nossa instancia
    public static acessarBaseSecreta(login: string, password: string) {
        
				// Antes de acessar a nossa instancia verifico as crendenciais
        if (SistemaSeguranca.login == login && SistemaSeguranca.password == password) {
            
						// Verifico se uma instancia já foi criada, se não crio uma, 
						// caso contrário retorno a estancia que já foi criada.
						// Aqui está a lógica que é utilizada no padrão Singleton
						if (!this.instance) {
                this.instance = new SistemaSeguranca();
            }
            console.log("Acessando base de dados super secreta ...");
            return this.instance;
        } else {
            console.log("Não foi possível acessar a base de dados super secreta!")
            return null;
        }
    }

}

export {SistemaSeguranca};
```

<br>

Irei criar um arquivo `index.ts` para manipular a classe criada:

```tsx
import { SistemaSeguranca } from "./SistemaSeguranca";

SistemaSeguranca.acessarBaseSecreta("softex", "sistemami7");

SistemaSeguranca.acessarBaseSecreta("softex", "sistemami");

SistemaSeguranca.acessarBaseSecreta("softex", "sistemami7");

/*
Saídas:
Essa mensagem só aparecerá uma única vez, pois só uma instância deste objeto será criada!
Acessando base de dados super secreta ...
Não foi possível acessar a base de dados super secreta!
Acessando base de dados super secreta ...
*/
```

Com essa implementação, podemos garantir que uma única estância ou objeto da classe `SistemaSeguranca` seja criada e acessada. Pois mesmo que se tente criar um novo objeto com um `new SistemaSeguranca()` já aparecerá um erro á em processo de desenvolvimento, porque o nosso construtor só é acessado pela classe `SistemaSeguranca`.

<br>

Segue o link do projeto completo:

[padroes-de-projetos-m01-singleton](https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/tree/main/03-padroes-de-desenvolvimento-de-software/m1-qual-a-melhor-forma-de-fernando-fazer-bolos-para-que-atenda-todos-os-seus-clientes-diariamente/002-trabalho/singleton-m1/padroes-de-projetos-m01-singleton)
