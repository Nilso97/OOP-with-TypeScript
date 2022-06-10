import { Personagem } from "./Personagem";
import { Util } from "./util/Util";

export class Priest extends Personagem {
    private _espirito: number;
    private _versatilidade: number;

    constructor(nome: string) {
        super(nome);
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(100, 1_000);
        this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
        this._espirito = Util.randomizar(100, 1_1000);
        this._versatilidade = Util.randomizar(100, 1_1000);
    }

    public atacar(): string {
        return '*** Ataque do Padre Samuel Jacob ***'
    }

    // Auto adicionou a assinatura do método da classe abstrata
    public defender(atacante: Personagem): number {
        throw new Error("Method not implemented.");
    }
}
