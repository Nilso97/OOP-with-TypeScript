// Mapped Types

interface Person {
    name: string;
    age: number; // Opcional "?"
}

const person: Person = {
    name: 'John',
    age: 32
}

// Partial
const personPartial: Partial<Person> = {
    name: 'John',
}
personPartial.name = 'Lucas' // Posso realizar alterações nas propriedades

// Readonly
const personReadonly: Readonly<Person> = {
    name: 'Mary',
    age: 25
}  // Não posso realizar alterações nas propriedades
