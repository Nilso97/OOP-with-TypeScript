"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor() {
        this._saldo = 0;
        this._numero = '00000-0';
        this._agencia = '0000-0';
    }
    // Getters e Setters
    get numero() {
        return this._numero;
    }
    set numero(valor) {
        // REGEX - Expressões Regulares
        const regex = /^\d{5}-\d{1}$/;
        if (regex.test(valor)) {
            this._numero = valor;
        }
        else {
            console.log('Formato de número inválido!');
        }
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(valor) {
        const regex = /^\d{4}-\d{1}$/;
        if (regex.test(valor)) {
            this._agencia = valor;
        }
        else {
            console.log('Formato de número inválido!');
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
}
exports.ContaBancaria = ContaBancaria;
