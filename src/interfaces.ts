// Interface
// Interfaces são basicamente uma maneira de descrever formas de dados, por exemplo, um objeto.

// Ex 01
interface Profession {
    name: string;
}

// Merge declaration
interface Profession {
    salary: number;
}

const dev: Profession = {
    name: 'John',
    salary: 2500
}

// Ex 02
interface Person {
    name: string;
}

