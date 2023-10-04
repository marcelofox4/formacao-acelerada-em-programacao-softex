"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(cpf, name, phoneNumber, address) {
        this.cpf = cpf;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
    getCpf() {
        return this.cpf;
    }
    getName() {
        return this.name;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getAddress() {
        return this.address;
    }
    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    setAddress(address) {
        this.address = address;
    }
}
exports.default = Client;
