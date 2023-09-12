const express = require('express');

const app = express();
const port = 3000;

const array = [1, 2, 3, 4];

app.listen(port, () => {
    console.log('Servidor funcionando!');
});

app.get('/teste-get', (request, response) => {
    let string = '[';
    for (let i = 0; i < array.length; i++) {
        string += array[i] + ', '
    }
    string += ']';
    return response.send(string);
});

app.post('/teste-post/:number', (request, response) => {
    let number = request.params.number;
    array.push(number);
    return response.send(number + ' Adicionado!');
});

app.delete('/teste-delete/:number', (request, response) => {
    let number = request.params.number;
    array.splice(array.indexOf(Number(number)), 1);
    return response.send(number + ' Deletado!');
});

app.put('/teste-put/:number/:numberTroca', (request, response) => {
    let number = request.params.number;
    let numberTroca = request.params.numberTroca;
    array.splice(array.indexOf(Number(number)), 1, Number(numberTroca));
    return response.send('Troca realizada!');
})