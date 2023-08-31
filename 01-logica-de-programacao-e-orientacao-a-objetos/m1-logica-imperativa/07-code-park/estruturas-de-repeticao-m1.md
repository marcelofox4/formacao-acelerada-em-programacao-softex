# Resolução do problema

Utilizarei para a confecção do meu algoritmo a linguagem que está sendo apresenta no curso, Portugol, mas com uma variação que foi apresentada pelo professor em sala de aula, tem uma IDE online, que pode ser verificada no link abaixo:

[Portugol Webstudio](https://portugol-webstudio.dgadelha.xyz/ide)

<br>

O algoritmo ficou da seguinte forma:

```bash
programa {
	funcao inicio() {
		
		inteiro numero_tabuada
		
		escreva("Digite o número da tabuada que você deseja: ")
		leia(numero_tabuada)
		limpa()
		
		escreva("+----------------------+\n")
		escreva("|     TABUADA DO ", numero_tabuada, "     |\n")
		escreva("+----------------------+\n")
		
		para(inteiro cont = 0; cont<=10; cont++) {
		    escreva("       ", numero_tabuada, " x ", cont, " = ", numero_tabuada * cont, "      ", "\n")
		}
	}
}
```

<br>

Para executar o algoritmo, siga o passo a passo:

1 - Basta clicar no link: [**executar algoritmo**](https://portugol-webstudio.dgadelha.xyz/ide);

2 - Clicar em **Novo Arquivo;**

3 - Copiar o algoritmo no arquivo criado;

4 - Executar o Programa ▶️.
