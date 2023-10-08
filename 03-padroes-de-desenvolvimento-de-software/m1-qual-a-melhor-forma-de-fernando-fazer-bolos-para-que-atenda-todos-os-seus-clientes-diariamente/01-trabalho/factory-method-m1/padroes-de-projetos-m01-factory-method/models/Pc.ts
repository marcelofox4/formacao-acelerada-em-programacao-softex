import { IComputer } from "./IComputer";

export class Pc implements IComputer {

    private ram: number;
    private hdd: number;
    private cpu: number;
    private type: string = "PC";

    constructor(ram: number, hdd: number, cpu: number) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    
    public getRam(): number {
        return this.ram;
    }

    public getHdd(): number {
        return this.hdd;
    }

    public getCpu(): number {
        return this.cpu;
    }

    public getType(): string {
        return this.type;
    }
    
    public toString(): string {
        return `RAM: ${this.getRam()}, HDD: ${this.getHdd()}, CPU: ${this.getCpu()}, Type: ${this.getType()}`;
    }
}