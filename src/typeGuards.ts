// Type Guards

interface Developer {
    name: string;
    language: string;
}

interface Designer {
    name: string;
    software: string;
}

const developer: Developer = {
    name: 'John',
    language: 'JavaScript'
}

const designer: Designer = {
    name: 'Mary',
    software: 'Photoshop'
}

// Union Types ... | ... = ... ou ...

/*
Forma 1 - Daria certo somente com o if, já com o else não...

function printSkill(person: Developer | Designer): void {
    if ((person as Developer).language) {
        console.log((person as Developer).language);
    } else {
        console.log('Designer');
    }
}

*/

// Forma 2 - Deu certo!
/*
function printSkill(person: Developer | Designer): void {
    if ('language' in person) {
        console.log(person.name);
        console.log(person.language);
    } else {
        console.log(person.name);
        console.log(person.software);
    }
}
*/

// Forma 3
function isDeveloper(person: Developer | Designer): person is Developer {
    return 'language' in person;
}

function printSkill(person: Developer | Designer): void {
    if (isDeveloper(person)) {
        console.log(person.name);
        console.log(person.language);
    } else {
        console.log(person.name);
        console.log(person.software);
    }
}