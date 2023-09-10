# Resolução do problema

O meu algoritmo no Blockly ficou assim:

<img src=''>

O código em Javascript do **Blockly** ficou assim:

```jsx
var nome_aluno, nota_um, nota_dois, qtd_faltas, soma, media;

nome_aluno = window.prompt('Digite o nome do Aluno: ');
nota_um = Number(window.prompt('Digite a primeira Nota: '));
nota_dois = Number(window.prompt('Digite a segunda Nota: '));
qtd_faltas = Number(window.prompt('Digite a quantidade de faltas: '));

soma = nota_um + nota_dois;
media = soma / 2;

if (qtd_faltas > 3) {
  window.alert(String(nome_aluno) + ' foi REPROVADO por falta!');
} else if (media < 7) {
  window.alert(String(nome_aluno) + ' foi REPROVADO por não atingir a média!');
} else if (media >= 7) {
  window.alert(String(nome_aluno) + ' foi APROVADO por média!');
}
```
