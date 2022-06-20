// Type Guards

/*
Exemplo:

function printType(value: number | string) {
    if (typeof value === 'number') {
        // value.
    }
    else if (typeof value === 'string') {
        // value.
    }
}
*/

interface IDeveloper {
    name: string;
    language: string;
}

interface IDesigner {
    name: string;
    software: string;
}

const developer: IDeveloper = {
    name: 'John',
    language: 'JavaScript/TypeScript'
}

const designer: IDesigner = {
    name: 'Suzan',
    software: 'Photoshop'
}

// Forma 02 - "person as IDeveloper" 
// OBS: Essa não é a forma mais correta de utilizar o type guards!
/*
function printSkill(person: IDeveloper | IDesigner): void {
    if ((person as IDeveloper).language) {
        console.log((person as IDeveloper).language);
    } else {
        // person.   Erro - typescript não reconhece se "person" é um IDeveloper ou IDesigner ou seja, daria certo somente com o if, já com o else não...
        console.log('designer'); 
    }
}
*/

// Forma 03 - ("propriedade" in person)

/*
function printSkill(person: IDeveloper | IDesigner): void {
    if ('language' in person) {
        person.language;
        console.log('developer');
    } else {
        person.software;
        console.log('designer');
    }
}
*/

// Forma 04 - Criando uma Função como Type Guards

function isDeveloper(person: IDeveloper | IDesigner): person is IDeveloper {
    return 'language' in person;
}

function printSkill(person: IDeveloper | IDesigner): void {
    if (isDeveloper(person)) {
        console.log(person.language);
    } else {
        console.log(person.software);
    }
}
