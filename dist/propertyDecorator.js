"use strict";
// Property @decorator
/*
target (construtor),
key (nome do método),
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function minLength(length) {
    return (target, key) => {
        let val = target[key];
        const getter = () => val;
        const setter = (value) => {
            if (value.length < length) {
                console.log(`Erro: você não pode criar um ${key} menor que ${length} letras!`);
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Movie {
    constructor(t) {
        this.title = t;
    }
}
__decorate([
    minLength(5) // @decorator
], Movie.prototype, "title", void 0);
const movie = new Movie("Harry Potter e o Cálice de Fogo");
console.log(movie.title);
