class SistemaSeguranca {

    private static instance: SistemaSeguranca;
    private static login: string = "softex";
    private static password: string = "sistemami7";

    private constructor() {
        console.log("Essa mensagem só aparecerá uma única vez, pois só uma instância deste objeto será criada!");
    }

    public static acessarBaseSecreta(login: string, password: string) {
        
        if (SistemaSeguranca.login == login && SistemaSeguranca.password == password) {
            if (!this.instance) {
                this.instance = new SistemaSeguranca();
            }
            console.log("Acessando base de dados super secreta ...");
            return this.instance;
        } else {
            console.log("Não foi possível acessar a base de dados super secreta!")
            return null;
        }
    }

}

export {SistemaSeguranca};