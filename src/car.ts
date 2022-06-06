// Encapsulamento
class Car {
    model: string;
    private color: string;
    private year: number;
    private value: number;
    private description: string;

    constructor(m: string, c: string, y: number, v: number, d: string) {
        this.model = m;
        this.color = c;
        this.year = y;
        this.value = v;
        this.description = d;
    }

    // Getters e Setters
    public getValue() {
        return this.value;
    }

    public setValue(value: number) {
        this.value = value;
    }

    public getInfo() {
        console.log(`Color: ${this.color}, Year: ${this.year}`);
        console.log(`Description: ${this.description}`)
    }
}

let car = new Car('Onix Plus', 'white', 2022, 55000, 'Assim como na linha 2021, o hatch pode ser comprado em 10 opções, e conta com duas opções de motores: 1.0 três-cilindros aspirado flex de 78/82 cv e 9,6/10,6 kgfm (gasolina/etanol), aliado sempre a câmbio manual de seis marchas, e 1.0 turbo flex com 116 cv e 16,3/16,8 kgfm, com opção manual ou automática também com seis velocidades.');

console.log(`Model: ${car.model}`);
car.setValue(80000);
console.log(`Price: ${car.getValue()}`);
car.getInfo();

