"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerFactory = void 0;
const Pc_1 = require("./Pc");
const Server_1 = require("./Server");
class ComputerFactory {
    static createComputer(ram, hdd, cpu, type) {
        if (type === "PC") {
            return new Pc_1.Pc(ram, hdd, cpu);
        }
        else if (type === "Server") {
            return new Server_1.Server(ram, hdd, cpu);
        }
        else {
            throw new Error("Tipo de computador não suportado");
        }
    }
}
exports.ComputerFactory = ComputerFactory;
