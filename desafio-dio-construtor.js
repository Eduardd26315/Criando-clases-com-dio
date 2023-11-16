let tiposDeJogador = ["guerreiro", "mago", "ninja", "monge"];

class Jogador {
    constructor(nomeDoJogador, idadeDoJogador, tipoDeJogador) {
        this.nomeDoJogador = nomeDoJogador;
        this.idadeDoJogador = idadeDoJogador;
        this.tipoDeJogador = tipoDeJogador;
    }

    ataque() {
        let ataque;

        if (this.tipoDeJogador === "mago") {
            ataque = " magia";
        } else if (this.tipoDeJogador === "guerreiro") {
            ataque = "espada";
        } else if (this.tipoDeJogador === "monge") {
            ataque = " artes marciais";
        } else if (this.tipoDeJogador === "ninja") {
            ataque = "shuriken";
        } else {
            console.log("Tipo de jogador desconhecido");
            return "Ataque não definido";
        }

        console.log(`O jogador ${this.nomeDoJogador} com ${this.idadeDoJogador} anos   ${this.tipoDeJogador}  usou ${ataque}`);
    }
}


const novoJogador = new Jogador("pablo", 25, tiposDeJogador[0]);
novoJogador.ataque(); 

