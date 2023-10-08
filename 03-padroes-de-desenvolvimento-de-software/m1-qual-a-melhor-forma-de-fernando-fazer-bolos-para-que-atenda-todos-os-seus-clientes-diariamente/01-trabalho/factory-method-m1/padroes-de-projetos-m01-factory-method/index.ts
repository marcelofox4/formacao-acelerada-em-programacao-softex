import { ComputerFactory } from "./models/ComputerFactory";

const computerOne = ComputerFactory.createComputer(32, 500, 3.46, "PC");
const computerTwo = ComputerFactory.createComputer(8, 1000, 2.4, "Server");

console.log(computerOne.toString());
console.log(computerTwo.toString());