# Resolução do problema

Para a resolução do trabalho foi necessário instalar o express.

<img src=''>

<br>

Codifiquei as seguintes rotas:

| GET        | Utilizado para ler dados. Ele faz a leitura e retorna a informação desejada para o usuário. |
| ---------- | ------------------------------------------------------------ |
| **POST**   | **Utilizado para criar ou adicionar um novo item ao URL solicitado. Por exemplo, criar uma nova conta ou postar um comentário novo em um blog.** |
| **PUT**    | **Utilizado para modificar ou substituir os dados atuais pelos dados solicitados. Por exemplo, alterar a senha em um site.** |
| **DELETE** | **Utilizado para excluir todos os dados do local de destino solicitado pelo usuário. É uma operação arriscada, pois não pode ser recuperada depois de excluída.** |

<br>

O código ficou assim:

[rotas-http.js]()

<br>

Para teste das rotas utilizei o Insomnia, segue os “prints” dos testes:

### **GET**

url: `http://localhost:3000/teste-get`

<img src=''>

```jsx
app.get('/teste-get', (request, response) => {
    let string = '[';
    for (let i = 0; i < array.length; i++) {
        string += array[i] + ', '
    }
    string += ']';
    return response.send(string);
});
```

<br>

### **POST**

url: `http://localhost:3000/teste-post/5`

<img src=''>

<br>

url: `http://localhost:3000/teste-post/6`

<img src=''>

```jsx
app.post('/teste-post/:number', (request, response) => {
    let number = request.params.number;
    array.push(number);
    return response.send(number + ' Adicionado!');
});
```

<br>

Ao exibir o array utilizando `http://localhost:3000/teste-get` é possível ver que os números foram adicionados:

<img src=''>

<br>

### **DELETE**

url: `http://localhost:3000/teste-delete/3`

<img src=''>

```jsx
app.delete('/teste-delete/:number', (request, response) => {
    let number = request.params.number;
    array.splice(array.indexOf(Number(number)), 1);
    return response.send(number + ' Deletado!');
});
```

<br>

Ao exibir o array utilizando `http://localhost:3000/teste-get` é possível perceber que o número 3 foi retirado do array.

<img src=''>

<br>

### **PUT**

url: `http://localhost:3000/teste-put/1/700`

<img src=''>

```jsx
app.put('/teste-put/:number/:numberTroca', (request, response) => {
    let number = request.params.number;
    let numberTroca = request.params.numberTroca;
    array.splice(array.indexOf(Number(number)), 1, Number(numberTroca));
    return response.send('Troca realizada!');
})
```

<br>

Ao exibir o array utilizando `http://localhost:3000/teste-get` é possível perceber que o número 1 foi editado para 700.

<img src=''>
