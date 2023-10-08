"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PcFactory = void 0;
const ComputerFactory_1 = require("./ComputerFactory");
const Pc_1 = require("../Pc");
class PcFactory extends ComputerFactory_1.ComputerFactory {
    getComputer(ram, hdd, cpu) {
        const pc = new Pc_1.Pc(ram, hdd, cpu);
        return pc;
    }
}
exports.PcFactory = PcFactory;
