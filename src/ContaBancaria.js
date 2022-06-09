"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(numero, agencia) {
        this._saldo = 0;
        this.numero = this._validarNumero(numero) ? numero : '00000-0';
        this.agencia = this._validarAgencia(agencia) ? agencia : '0000-0';
    }
    // Getters e Setters
    get numero() {
        return this._numero;
    }
    set numero(valor) {
        if (this._validarNumero(valor)) {
            this._numero = valor;
        }
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(valor) {
        if (this._validarAgencia(valor)) {
            this._agencia = valor;
        }
    }
    consultar() {
        return this._saldo;
    }
    depositar(valor) {
        if (valor >= 0) {
            this._saldo += valor;
            return true;
        }
        return false;
    }
    sacar(valor) {
        if (valor >= 0 && this._saldo >= valor) {
            this._saldo -= valor;
            return true;
        }
        return false;
    }
    _validarNumero(numero) {
        // REGEX - Expressões Regulares
        const regex = /^\d{5}-\d{1}$/;
        if (regex.test(numero)) {
            this._numero = numero;
            return true;
        }
        console.log('Formato de "Número" inválido!');
        return false;
    }
    _validarAgencia(agencia) {
        const regex = /^\d{4}-\d{1}$/;
        if (regex.test(agencia)) {
            this._agencia = agencia;
            return true;
        }
        console.log('Formato de "Agência" inválido!');
        return false;
    }
}
exports.ContaBancaria = ContaBancaria;
