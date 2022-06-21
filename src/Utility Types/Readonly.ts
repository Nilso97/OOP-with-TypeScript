import { IUser } from "../interface";

// Readonly<Type>
type UserReadonly = Readonly<IUser>;

const user: UserReadonly = {
    name: 'John',
    phone: '(42) 3252-2112',
    email: 'test@test.com.br',
    password: '********',
    age: 32
}

// user.age = 25; Erro: É impossível realizar alterações em propriedades que são somente para leitura (Readonly)! 