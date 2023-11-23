"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaSeguranca = void 0;
class SistemaSeguranca {
    constructor() {
        console.log("Essa mensagem só aparecerá uma única vez, pois só uma instância deste objeto será criada!");
    }
    static acessarBaseSecreta(login, password) {
        if (SistemaSeguranca.login == login && SistemaSeguranca.password == password) {
            if (!this.instance) {
                this.instance = new SistemaSeguranca();
            }
            console.log("Acessando base de dados super secreta ...");
            return this.instance;
        }
        else {
            console.log("Não foi possível acessar a base de dados super secreta!");
            return null;
        }
    }
}
exports.SistemaSeguranca = SistemaSeguranca;
SistemaSeguranca.login = "softex";
SistemaSeguranca.password = "sistemami7";
