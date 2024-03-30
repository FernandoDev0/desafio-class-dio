class Heroi{
    

    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo

    }

    atacar(){
        return `o ${this.tipo} atacou usando ${this.qualpersonagem(this.tipo)}`
    }

    qualpersonagem(tipo){

        if (tipo.toLocaleLowerCase() == "mago".toLocaleLowerCase()) {
            return " magia";
        }if (tipo.toLocaleLowerCase() == "guerreiro".toLocaleLowerCase()) {
            return "espada";
        }if (tipo.toLocaleLowerCase() == "monge".toLocaleLowerCase()) {
            return "artes marciais";
        }if (tipo.toLocaleLowerCase() == "ninja".toLocaleLowerCase()) {
            return " shuriken";
        }

    }

    

}

let mago = new Heroi("Fernando",28,"mago");
console.log(mago.atacar());