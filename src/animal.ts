// Herança e Polimorfismo
export default class Animal {
    type: string;
    name: string;
    age: number;

    constructor(t: string, n: string, a: number) {
        this.type = t;
        this.name = n;
        this.age = a;
    }

    public info(): void {
        console.log('Método da Classe Mãe - ANIMAL');
    }
}

class Dog extends Animal {
    breed: string;

    constructor(t: string, n: string, a: number, b: string) {
        super(t, n, a);
        this.breed = b;
    }

    public info(): void {
        console.log('Método da Classe Filha - DOG');
    }
}

class Human extends Animal {
    color: string;

    constructor(t: string, n: string, a: number, c: string) {
        super(t, n, a);
        this.color = c;
    }

    public info(): void {
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
