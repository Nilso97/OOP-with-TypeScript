"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Personagem_1 = require("./Personagem");
const Util_1 = require("./util/Util");
class Mage extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome);
        this._armadura = Util_1.Util.randomizar(100, 1000);
        this._vidaMaxima = Util_1.Util.randomizar(100, 1000);
        this._vidaAtual = Util_1.Util.randomizar(40, this._vidaMaxima);
        this._intelecto = Util_1.Util.randomizar(100, 11000);
        this._velocidade = Util_1.Util.randomizar(1, 2000);
    }
    atacar() {
        return '*** Ataque do Mago Cornelius ***';
    }
}
exports.Mage = Mage;
