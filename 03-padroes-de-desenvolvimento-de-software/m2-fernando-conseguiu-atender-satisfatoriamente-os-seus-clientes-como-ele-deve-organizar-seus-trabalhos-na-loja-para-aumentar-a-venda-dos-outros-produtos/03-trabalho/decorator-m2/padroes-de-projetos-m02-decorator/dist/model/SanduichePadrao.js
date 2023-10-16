"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanduichePadrao = void 0;
class SanduichePadrao {
    constructor(ingredientes) {
        this.ingredientes = new Map();
        this.ingredientes = ingredientes;
    }
    preco() {
        let preco = 0;
        for (const [chave, valor] of this.ingredientes) {
            preco += this.ingredientes.get(chave);
        }
        return preco;
    }
}
exports.SanduichePadrao = SanduichePadrao;
