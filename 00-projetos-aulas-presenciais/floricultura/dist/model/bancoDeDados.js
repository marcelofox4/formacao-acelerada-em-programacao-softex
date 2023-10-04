"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BancoDeDados {
    constructor() {
        this.bd = [];
    }
    add(object) {
        this.bd.push(object);
    }
    showData() {
        this.bd;
    }
    delete(cpf) {
        this.bd.splice(this.bd.indexOf(cpf), 1);
    }
    search(cpf) {
        this.bd[this.bd.indexOf(cpf)];
    }
}
exports.default = BancoDeDados;
