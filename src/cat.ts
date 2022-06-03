// Classes abstratas
abstract class Cat {
    name: string;
    color: string;

    constructor(n: string, c: string) {
        this.name = n;
        this.color = c;
    }

    meow() {
        console.log('Meowwww...');
    }
}

class Tom extends Cat {
    age: number;

    constructor(n: string, c: string, a: number) {
        super(n, c);
        this.age = a;
    }
}

let cat = new Tom('Tom', 'grayish', 75);

console.log(`${cat.name} Tom and Jerry is a popular American short film series created by William Hanna and Joseph Barbera, produced between February 10, 1940 and September 7, 1967 for Metro-Goldwyn-Mayer.`);

// Tom
console.log(`${cat.name} is the cat from Tom & Jerry's cartoon and your fur color is ${cat.color}...`);
console.log(`It's been ${cat.age} years since the cartoon was released`);
cat.meow();
