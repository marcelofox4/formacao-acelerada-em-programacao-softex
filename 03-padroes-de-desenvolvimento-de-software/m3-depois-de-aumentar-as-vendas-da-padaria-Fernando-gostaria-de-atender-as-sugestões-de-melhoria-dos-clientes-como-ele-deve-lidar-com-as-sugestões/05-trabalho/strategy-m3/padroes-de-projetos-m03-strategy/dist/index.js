"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("./models/Calculator");
const Subtraction_1 = require("./models/Subtraction");
const Addition_1 = require("./models/Addition");
const Multiplication_1 = require("./models/Multiplication");
const Division_1 = require("./models/Division");
const prompt = require('prompt-sync')();
const addition = new Addition_1.Addition();
const subtraction = new Subtraction_1.Subtraction();
const multiplication = new Multiplication_1.Multiplication();
const division = new Division_1.Division();
const calculator = new Calculator_1.Calculator(0, 0, addition);
let start = "1";
while (start == "1") {
    console.clear();
    let numberOne = parseInt(prompt("Digite o Primeiro número: "));
    let numberTwo = parseInt(prompt("Digite o Segundo número: "));
    calculator.setNumberOne(numberOne);
    calculator.setNumberTwo(numberTwo);
    console.log("\nQual operação matemática você deseja utilizar?");
    console.log("[1] Adição\n[2] Subtração\n[3] Multiplicação\n[4] Divisão");
    let option = Number(prompt("--> "));
    switch (option) {
        case 1:
            calculator.twistStrategy(addition);
            console.log(`\n${calculator.getNumberOne()} + ${calculator.getNumberTwo()} = ${calculator.calculate()}`);
            break;
        case 2:
            calculator.twistStrategy(subtraction);
            console.log(`\n${calculator.getNumberOne()} - ${calculator.getNumberTwo()} = ${calculator.calculate()}`);
            break;
        case 3:
            calculator.twistStrategy(multiplication);
            console.log(`\n${calculator.getNumberOne()} x ${calculator.getNumberTwo()} = ${calculator.calculate()}`);
            break;
        case 4:
            calculator.twistStrategy(division);
            try {
                console.log(`\n${calculator.getNumberOne()} x ${calculator.getNumberTwo()} = ${calculator.calculate()}`);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                break;
            }
        default:
            console.log("\nEscolha uma das opções!");
            break;
    }
    console.log("\nDigite:\n[1] Continuar\n[Qualquer tecla] Sair");
    start = prompt("--> ");
}
