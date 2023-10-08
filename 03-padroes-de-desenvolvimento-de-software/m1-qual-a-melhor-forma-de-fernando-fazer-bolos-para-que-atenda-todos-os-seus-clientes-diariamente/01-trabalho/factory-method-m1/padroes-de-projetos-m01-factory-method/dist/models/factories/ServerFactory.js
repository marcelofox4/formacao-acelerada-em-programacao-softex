"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerFactory = void 0;
const ComputerFactory_1 = require("./ComputerFactory");
const Server_1 = require("../Server");
class ServerFactory extends ComputerFactory_1.ComputerFactory {
    getComputer(ram, hdd, cpu) {
        const pc = new Server_1.Server(ram, hdd, cpu);
        return pc;
    }
}
exports.ServerFactory = ServerFactory;
