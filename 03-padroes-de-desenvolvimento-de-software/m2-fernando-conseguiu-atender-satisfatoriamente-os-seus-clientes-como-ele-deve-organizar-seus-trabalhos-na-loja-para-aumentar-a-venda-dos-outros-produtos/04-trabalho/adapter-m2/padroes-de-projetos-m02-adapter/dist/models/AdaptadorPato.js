"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdptadorPato = void 0;
class AdptadorPato {
    constructor(galinha) {
        this.galinha = galinha;
    }
    emitirSom() {
        console.log(this.galinha.emitirSom());
    }
}
exports.AdptadorPato = AdptadorPato;
