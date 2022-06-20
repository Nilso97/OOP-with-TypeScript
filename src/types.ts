export type Person = {
    name: string;
    age: number;
}

export type Address = {
    street: string;
    zipCode: string;
}

// Função que realizaum "merge" ou seja um "Mixing = Mesclagem" entre Person & Address
export function merge<First, Second>(obj1: First, obj2: Second): First & Second {
    return { ...obj1, ...obj2 }; // Retorna tudo o que contém no "obj1" e no "obj2"...
}

/* ou fazer assim...

export function merge<Person, Address>(person: Person, address: Address): Person & Address {
    return { ...person, ...address };
}
*/