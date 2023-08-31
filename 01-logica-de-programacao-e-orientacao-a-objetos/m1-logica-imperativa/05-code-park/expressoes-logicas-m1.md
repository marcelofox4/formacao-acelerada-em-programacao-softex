# Resolução do problema

Utilizando a dica de “… substituir as variáveis …” dada pelo próprio exercício, a tabela ficara assim:

| Jogadores | Pontuação        | O.L. | Moedas         | O.L.   | Enfrentamento do Chefe | Resultado  |
| --------- | ---------------- | ---- | -------------- | ------ | ---------------------- | ---------- |
| Jogador 1 | 120 >= 100 → (V) | AND  | 15 >= 5 → (V)  | AND    | Sim == Sim → (V)       | Verdadeiro |
| Jogador 2 | 99 >= 100 → (F)  | AND  | 200 >= 5 → (V) | AND    | Não == Não → (V)       | Falso      |
| Jogador 3 | 100 < 100 → (F)  | OR   | 5 < 5 → (F)    | OR     | Sim == Sim → (V)       | Verdadeiro |
| Jogador 4 | 101 != 100 → (V) | OR   | 4 != 5 → (V)   | OR NOT | Não == Não → (V)       | Verdadeiro |
