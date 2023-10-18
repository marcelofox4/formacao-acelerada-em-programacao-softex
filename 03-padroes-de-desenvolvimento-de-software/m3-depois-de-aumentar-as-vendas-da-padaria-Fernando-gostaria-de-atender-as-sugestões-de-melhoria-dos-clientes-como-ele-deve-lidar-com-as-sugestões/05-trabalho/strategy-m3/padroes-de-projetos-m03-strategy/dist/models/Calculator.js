"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor(n1, n2, strategy) {
        this.numberOne = n1;
        this.numberTwo = n2;
        this.strategy = strategy;
        this.result = 0;
    }
    getNumberOne() {
        return this.numberOne;
    }
    setNumberOne(number) {
        this.numberOne = number;
    }
    getNumberTwo() {
        return this.numberTwo;
    }
    setNumberTwo(number) {
        this.numberTwo = number;
    }
    calculate() {
        return this.result = this.strategy.execute(this.numberOne, this.numberTwo);
    }
    twistStrategy(strategy) {
        this.strategy = strategy;
    }
}
exports.Calculator = Calculator;
