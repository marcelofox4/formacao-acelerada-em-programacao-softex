# Resolução do problema

Começarei implementando uma classe abstrata `Editor` que funcionará como Observer e vai monitorá o estado to atributo `edit` e `text` :

```tsx
export abstract class Editor {

    text: String[];
    edit: boolean = false;

    constructor() {
        this.text = [];
    }

    open(): void {
        this.edit = true;
    }

    closed(): void {
        this.edit = false;
    }
}
```

<br>

A Classe `TextEditor` estenderá a classe `Editor` e terá os métodos `insertLine()`, `removeLine()` e `save()`:

```tsx
import { Editor } from "./Editor";

export class TextEditor extends Editor {

    constructor() {
        super();
    }

    insertLine(lineNumber: number, text: string): void {
        if (this.edit) {
            if (text === "EOF") {
                this.save();
                return;
            } else {
                this.text[(lineNumber - 1)] = text;
                return;
            }
        }
        throw new Error("É necessário abrir o editor");
    }

    removeLine(lineNumber: number): void {
        if (this.edit) {
            this.text.splice((lineNumber - 1), 1);
            return
        }
        throw new Error("É necessário abrir o editor");
    }

    save(): void {
        for (let i = 0; i < this.text.length; i++) {
            if (this.text[i] == undefined) {
                this.text[i] = "";
            }
            console.log(`${i+1} - ${this.text[i]}`)
        }
        this.closed();
    }
}
```

<br>

Agora vamos para a implementação da aplicação:

```tsx
import { TextEditor } from "./models/TextEditor";

const textEditor = new TextEditor();

console.log("+------------------------------+");
console.log("| Bem-vindo ao Editor de Texto |");
console.log("+------------------------------+")

textEditor.open();

textEditor.insertLine(1, "Titulo: To-do List");
textEditor.insertLine(3, "Fazer compras;");
textEditor.insertLine(4, "Estudar Programação;");
textEditor.insertLine(5, "Lavar o carro;");
textEditor.insertLine(6, "Passar um tempo com a família");

textEditor.removeLine(5);

textEditor.insertLine(2, "EOF");
```

Podemos perceber que o objeto do `TextEditor`  utiliza o método `open()` da classe abstrata, mas quem guarda o estado da edição é o Observer `Editor`.

<br>

Aqui estão as saídas no console:

```tsx
/*
Saidas:
+------------------------------+
| Bem-vindo ao Editor de Texto |
+------------------------------+
1 - Titulo: To-do List
2 - 
3 - Fazer compras;
4 - Estudar Programação;
5 - Passar um tempo com a família
*/
```



[padroes-de-projetos-m03-observer]()
