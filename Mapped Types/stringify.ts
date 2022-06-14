interface Person {
    name: string;
    age: number;
}

type Stringify<T> = {
    readonly [P in keyof T]: string | number;
}

const stringPerson: Stringify<Person> = {
    name: 'John',
    age: '32',
}