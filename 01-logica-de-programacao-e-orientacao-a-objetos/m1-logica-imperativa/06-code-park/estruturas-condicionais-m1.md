# Resolução do problema

Utilizarei para a confecção do meu algoritmo a linguagem que está sendo apresenta no curso, Portugol, mas com uma variação que foi apresentada pelo professor em sala de aula, tem uma IDE online, que pode ser verificada no link abaixo:

[Portugol Webstudio](https://portugol-webstudio.dgadelha.xyz/ide)

<br>

O algoritmo ficou da seguinte forma:

```bash
programa {
    
    inclua biblioteca Texto --> tx
    
	funcao inicio() {
		
		cadeia transporte, opcao
		logico e_terrestre = verdadeiro, usa_capacete = verdadeiro, cabe_uma_pessoa = verdadeiro, e_pesado = verdadeiro, tem_pedal = verdadeiro
		
		escreva("\n\nPara a escolha de um meio de transporte, será necessário você responder algumas perguntas\n")
		escreva("VAMOS AS PERGUNTAS!!!\n\n")
		
		escreva("O Transporte é TERRESTRE?\n")
		escreva("+---------+\n")
		escreva("| S = SIM |\n")
		escreva("| N = NÃO |\n")
		escreva("+---------+\n")
		leia(opcao)
		opcao = tx.caixa_alta(opcao)
		limpa()
		
		e_terrestre = opcao == "S"
		se(e_terrestre)
		{
		    escreva("\nNo Trasnporte é necessário o USO de CAPACETE?\n")
		    escreva("+---------+\n")
		    escreva("| S = SIM |\n")
		    escreva("| N = NÃO |\n")
		    escreva("+---------+\n")
		    leia(opcao)
		    opcao = tx.caixa_alta(opcao)
		    limpa()
		    
		    usa_capacete = opcao == "S"
		    se(usa_capacete)
		    {
		        escreva("\nPARABÉNS O SEU TRANSPORTE É A MOTO\n")
		    }
		    senao
		    {
		        escreva("\nO Trasnporte é apenas para UMA PESSOA?\n")
		        escreva("+---------+\n")
		        escreva("| S = SIM |\n")
		        escreva("| N = NÃO |\n")
		        escreva("+---------+\n")
		        leia(opcao)
		        opcao = tx.caixa_alta(opcao)
		        limpa()
		        
		        cabe_uma_pessoa = opcao == "S"
		        se(cabe_uma_pessoa)
		        {
		            escreva("\nO Trasnporte é PESADO?\n")
		            escreva("+---------+\n")
		            escreva("| S = SIM |\n")
		            escreva("| N = NÃO |\n")
		            escreva("+---------+\n")
		            leia(opcao)
		            opcao = tx.caixa_alta(opcao)
		            limpa()
		            
		            e_pesado = opcao == "S"
		            se(e_pesado)
		            {
		                escreva("\nPARABÉNS O SEU TRANSPORTE É UM TRATOR\n")
		            }
		            senao
		            {
		                escreva("\nO Trasnporte TEM PEDAL?\n")
    		            escreva("+---------+\n")
    		            escreva("| S = SIM |\n")
    		            escreva("| N = NÃO |\n")
    		            escreva("+---------+\n")
    		            leia(opcao)
    		            opcao = tx.caixa_alta(opcao)
    		            limpa()
    		            
    		            tem_pedal = opcao == "S"
    		            se(tem_pedal)
    		            {
    		                escreva("\nPARABÉNS O SEU TRANSPORTE É UMA BICICLETA\n")
    		            }
    		            senao
    		            {
    		                escreva("\nAcho que não temos a sua opção de Transporte!\n")
		                    escreva("Obrigado!")
    		            }
		            }
		        }
		        senao
		        {
		            escreva("\nAcho que não temos a sua opção de Transporte!\n")
		            escreva("Obrigado!")
		        }
		    }
		}
		senao
		{
		    escreva("\nNão temos opções de transportes que não sejam terrestres\n")
		    escreva("Obrigado!")
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
