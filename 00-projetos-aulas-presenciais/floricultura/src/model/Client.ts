class Client {
    private static count: number = 0;
    private id: number;
    private cpf : string;
    private name : string;
    private phoneNumber : string;
    private address : string;

    public constructor(cpf:string, name:string, phoneNumber:string, address:string) {
        Client.count++;
        this.id = Client.count;
        this.cpf = cpf;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    public getId(): number {
        return this.id
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getName(): string {
        return this.name;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public getAddress(): string {
        return this.address;
    }

    public setPhoneNumber(phoneNumber:string) {
        this.phoneNumber = phoneNumber;
    }

    public setAddress(address: string) {
        this.address = address;
    }
}

export default Client;