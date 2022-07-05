// Method @decorator - Delay
/* 
target (construtor), 
key (nome do método), 
descriptor (descreve a propriedade do método)
*/

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any) {
      console.log(`Esperando ${ms}ms segundo(s)...`);

      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);

      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  // Esperar algum tempo para depois executar o método...
  @delay(2500) // @decorator
  greet() {
    console.log(`Hello ${this.greeting}!`);
  }
}

const person = new Greeter("John");
person.greet();
