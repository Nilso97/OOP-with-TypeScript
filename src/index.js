"use strict"
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
// @decorators
class Animal {
    constructor(specie, color, age) {
        this.specie = specie;
        this.color = color;
        this.age = age;
    }
}
exports.Animal = Animal;
// Classe "Animal" foi instânciada dentro da função decorator() passando todos os atributos (...args)
function decorator(target) {
    return class extends target {
        constructor(...args) {
            super(...args);
            (this.specie = "Dog"), (this.color = "black"), (this.age = 7);
        }
    };
}
// Decorator
const decoratorAnimal = decorator(Animal);
// A classe "Animal" já foi instânciada...
const animal = new decoratorAnimal("", "", 0);
console.log(animal);
