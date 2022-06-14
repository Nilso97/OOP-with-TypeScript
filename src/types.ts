// Types
// Types é uma definição de um tipo de dado, por exemplo, uma união, primitiva, interseção, tupla ou qualquer outro tipo.

// Ex 01 Mapped Types
type Stringify<T> = {
    [P in keyof T]: string; // "in" / "keyof"
}

// Ex 02 
// Types  com tipos primitivos
type UserEmail = string; // alias

// Tipando uma função 
function sendEmail(email: UserEmail) {}
sendEmail('email@test.com.br');

