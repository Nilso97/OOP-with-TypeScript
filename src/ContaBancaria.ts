export class ContaBancaria {
    private _saldo: number;
    private _numero: string;
    private _agencia: string;  

    constructor() {
        this._saldo = 0;
        this._numero = '00000-0';
        this._agencia = '0000-0';
    }

    // Getters e Setters
    get numero(): string {
        return this._numero;
    }

    set numero(valor: string) {
        // REGEX - Expressões Regulares
        const regex = /^\d{5}-\d{1}$/;
        if (regex.test(valor)) {
            this._numero = valor;
        } else {
            console.log('Formato de número inválido!');
        }
    }

    get agencia(): string {
        return this._agencia;
    }

    set agencia(valor: string) {
        const regex = /^\d{4}-\d{1}$/;
        if (regex.test(valor)) {
            this._agencia = valor;
        } else {
            console.log('Formato de número inválido!');
        }
    }

    consultar(): number {
        return this._saldo;
    }

    depositar(valor: number): boolean {
        if (valor >= 0) {
            this._saldo += valor;
            return true;
        }

        return false;
    }

    sacar(valor: number): boolean {
        if (valor >= 0 && this._saldo >= valor) {
            this._saldo -= valor;
            return true;
        }

        return false;
    }
}