import { Personagem } from "./Personagem";
import { Util } from "./util/Util";

export class Mage extends Personagem {
    private _intelecto: number;
    private _velocidade: number;

    constructor(nome: string) {
        super(nome);

        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(100, 1_000);
        this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
        this._intelecto = Util.randomizar(100, 1_1000);
        this._velocidade = Util.randomizar(1, 2_000);
    }

    public atacar(): string {
        return 'Ataque do Mago'
    }

    // Auto adicionou a assinatura do método da classe abstrata
    public defender(atacante: Personagem): number {
        throw new Error("Method not implemented.");
    }
}