import { Person, Address, merge } from './types';

const person: Person = {
    name: 'John',
    age: 32
}

const address: Address = {
    street: 'Rua 15 de Novembro',
    zipCode: '32522112'
}

// Interseção de tipos utilizando o operador "&" comercial...
// Forma 01
/*
const personWithAddress: Person & Address = {
    name: 'John',
    age: 32,
    street: 'Rua 15 de Novembro',
    zipCode: '32522112',
}
*/

// Forma 02
/*
const personWithAddress: Person & Address = {
    ...person,
    ...address
}
*/

// Forma 03
// Person & Address
const personWithAddress = merge(person, address);
// Person
personWithAddress.name;
personWithAddress.age;
// Address
personWithAddress.street;
personWithAddress.zipCode;