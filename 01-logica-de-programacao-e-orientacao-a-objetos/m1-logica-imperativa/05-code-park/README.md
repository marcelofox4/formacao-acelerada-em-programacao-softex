# Code-Park

## Instrução do Projeto

Na tabela em anexo, encontramos dados de 4 jogadores de um *game* que contemplam os pontos e moedas obtidos durante as partidas e se conseguiram lutar ou não com o chefe.

| Jogadores | pontos | moedas | enfrentou_chefe |
| --------- | ------ | ------ | --------------- |
| Jogador 1 | 120    | 15     | Sim             |
| Jogador 2 | 99     | 200    | Não             |
| Jogador 3 | 100    | 5      | Sim             |
| Jogador 4 | 101    | 4      | Não             |

<br>

Baseado nos dados desses jogadores, foram construídas algumas expressões. Avalie cada expressão abaixo, observando as condições de cada jogador, descrito na tabela acima. Marque com V( Verdadeiro) ou F(Falso) o resultado de cada expressão.

<br>

**Dica:** Lembre-se de substituir as variáveis "pontos", "moedas" e "enfrentou_chefe" pelos valores correspondentes para cada jogador.

<br>

Expressões:

(  )Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)

(  )Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)

(  ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)

(  ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não)
