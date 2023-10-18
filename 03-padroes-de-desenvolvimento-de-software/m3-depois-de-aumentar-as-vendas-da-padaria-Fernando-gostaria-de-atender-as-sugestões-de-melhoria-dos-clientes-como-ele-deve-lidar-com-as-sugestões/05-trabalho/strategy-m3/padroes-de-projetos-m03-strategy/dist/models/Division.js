"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Division = void 0;
class Division {
    execute(n1, n2) {
        if (n2 != 0) {
            return n1 / n2;
        }
        throw new Error("Não é possível dividir por zero!");
    }
}
exports.Division = Division;
