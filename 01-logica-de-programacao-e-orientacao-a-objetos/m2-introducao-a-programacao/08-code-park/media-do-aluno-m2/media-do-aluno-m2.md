# Resolução do problema

A minha representação do algorítimo de dizer se o Aluno foi APROVADO ou REPROVADO de acordo com a suas notas ficou da seguinte forma:

<br>

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/01-logica-de-programacao-e-orientacao-a-objetos/m2-introducao-a-programacao/08-code-park/img/blockly-media-aluno.png'>

O código em Javascript do **Blockly** ficou assim:

```jsx
var gradeOne, gradeTwo, sum, average;

gradeOne = Number(window.prompt('Digite sua primeira nota: '));
gradeTwo = Number(window.prompt('Digite sua segunda nota: '));
sum = gradeOne + gradeTwo;
average = sum / 2;
if (average >= 7) {
  window.alert(['Sua média foi: ',average,'. Você foi APROVADO!'].join(''));
} else {
  window.alert(['Sua média foi: ',average,'. Você foi REPROVADO!'].join(''));
}
```
