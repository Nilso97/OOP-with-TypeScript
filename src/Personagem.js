"use strict";
// Encapsulamento
Object.defineProperty(exports, "__esModule", { value: true });
class Personagem {
    constructor(_nome, energia, vida, ataque, defesa) {
        this._nome = _nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    status() {
        return ("Guerreiro: \n" +
            "\nNome: " +
            this.nome +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nAtaque: " + this.ataque.toFixed(1)) +
            ("\nDefesa: " + this.defesa.toFixed(1)));
    }
    treinarAtacar() {
        this.ataque += this.randomizar(7);
        this.energia += this.randomizar(5);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    treinarDefesa() {
        this.defesa += this.randomizar(5);
        this.energia -= this.randomizar(10);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    descansar(hour) {
        this.energia += hour + this.randomizar(10);
        if (this.energia > 100) {
            this.energia = 100;
        }
    }
    batalhar() {
        let desgaste = this.randomizar(10);
        this.energia -= desgaste;
        return desgaste;
    }
    isDead() {
        return this.energia < 0;
    }
    randomizar(fator) {
        return Math.random() * fator;
    }
}
exports.default = Personagem;
