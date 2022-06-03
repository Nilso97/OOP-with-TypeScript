export default interface Mouse {
    name: string;
    year ? : number;
    toEscape(): void;
}

class Jerry implements Mouse {
    name: string;
    year ? : number;

    constructor(n: string) {
        this.name = n;
    }

    toEscape() {
        console.log(`In the cartoon ${mouse.name} keeps running away from Tom...`);
    }
}

let mouse = new Jerry('Jerry');

mouse.year = 7;

console.log(`The cartoon stopped production on September ${mouse.year}, 1967.`)
mouse.toEscape();