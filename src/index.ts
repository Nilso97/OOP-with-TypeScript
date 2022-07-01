// @decorators
export class Animal {
  constructor(
    public specie: string,
    public color: string,
    public age: number
  ) {}
}

// Classe "Animal" foi instânciada dentro da função decorator() passando todos os atributos (...args)
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    specie: string;
    color: string;
    age: number;

    constructor(...args: any[]) {
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
