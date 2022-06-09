export class ContaBancaria {
    private _saldo: number;
    private _numero: string;
    private _agencia: string;  

    constructor(numero?: string, agencia?: string) {
        this._saldo = 0;
        this.numero = this._validarNumero(numero) ? numero : '00000-0';
        this.agencia = this._validarAgencia(agencia) ? agencia : '0000-0';
    }

    // Getters e Setters
    get numero(): string {
        return this._numero;
    }

    set numero(valor: string) {
        if (this._validarNumero(valor)) {
            this._numero = valor;
        }
    }

    get agencia(): string {
        return this._agencia;
    }

    set agencia(valor: string) {
        if (this._validarAgencia(valor)) {
            this._agencia = valor;
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

    private _validarNumero(numero: string): boolean {
        // REGEX - Expressões Regulares
        const regex = /^\d{5}-\d{1}$/;
        if (regex.test(numero)) {
            this._numero = numero;
            return true;
        } 

        console.log('Formato de "Número" inválido!');
        return false;
    }

    private _validarAgencia(agencia: string): boolean {
        const regex = /^\d{4}-\d{1}$/;
        if (regex.test(agencia)) {
            this._agencia = agencia;
            return true;
        }

        console.log('Formato de "Agência" inválido!');
        return false;
    }
}
