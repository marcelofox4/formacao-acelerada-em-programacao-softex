"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComputerFactory_1 = require("./models/ComputerFactory");
const computerOne = ComputerFactory_1.ComputerFactory.createComputer(32, 500, 3.46, "PC");
const computerTwo = ComputerFactory_1.ComputerFactory.createComputer(8, 1000, 2.4, "Server");
console.log(computerOne.toString());
console.log(computerTwo.toString());
