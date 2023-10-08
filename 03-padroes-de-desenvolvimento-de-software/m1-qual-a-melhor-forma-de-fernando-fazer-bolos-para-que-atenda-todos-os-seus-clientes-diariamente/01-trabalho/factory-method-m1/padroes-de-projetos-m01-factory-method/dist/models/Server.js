"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    constructor(ram, hdd, cpu) {
        this.type = "Server";
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }
    getRam() {
        return this.ram;
    }
    getHdd() {
        return this.hdd;
    }
    getCpu() {
        return this.cpu;
    }
    getType() {
        return this.type;
    }
    toString() {
        return `RAM: ${this.getRam()}, HDD: ${this.getHdd()}, CPU: ${this.getCpu()}, Type: ${this.getType()}`;
    }
}
exports.Server = Server;
