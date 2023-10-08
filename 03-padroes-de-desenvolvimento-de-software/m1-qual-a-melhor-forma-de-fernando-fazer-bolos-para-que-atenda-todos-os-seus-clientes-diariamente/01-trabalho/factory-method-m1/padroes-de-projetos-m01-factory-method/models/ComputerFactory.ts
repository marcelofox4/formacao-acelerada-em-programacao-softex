import { IComputer } from "./IComputer";
import { Pc } from "./Pc";
import { Server } from "./Server";

export class ComputerFactory {
    public static createComputer(ram: number, hdd: number, cpu: number, type: string): IComputer {
        if (type === "PC") {
            return new Pc(ram, hdd, cpu);
        } else if (type === "Server") {
            return new Server(ram, hdd, cpu);
        } else {
            throw new Error("Tipo de computador não suportado");
        }
    }
}