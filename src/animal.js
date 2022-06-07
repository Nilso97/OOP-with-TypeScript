"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Herança e Polimorfismo
class Animal {
    constructor(t, n, a) {
        this.type = t;
        this.name = n;
        this.age = a;
    }
    info() {
        console.log('Método da Classe Mãe - ANIMAL');
    }
}
exports.default = Animal;
class Dog extends Animal {
    constructor(t, n, a, b) {
        super(t, n, a);
        this.breed = b;
    }
    info() {
        console.log('Método da Classe Filha - DOG');
    }
}
class Human extends Animal {
    constructor(t, n, a, c) {
        super(t, n, a);
        this.color = c;
    }
    info() {
        console.log('Método da Classe Filha - HUMAN');
    }
}
let dog = new Dog('Cachorro', 'Rex', 2, 'Pastor-Alemão');
dog.info();
console.log(`Tipo: ${dog.type}`);
console.log(`Nome: ${dog.name}`);
console.log(`Idade: ${dog.age}`);
console.log(`Raça: ${dog.breed}`);
let human = new Human('Humano', 'John', 28, 'Branco');
human.info();
console.log(`Tipo: ${human.type}`);
console.log(`Nome: ${human.name}`);
console.log(`Idade: ${human.age}`);
console.log(`Cor: ${human.color}`);
