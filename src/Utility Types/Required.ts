import { IUser } from "../interface";

// Required<Type>
type UserRequired = Required<IUser>; // Todas as propriedades são obrigatórias mesmo as opcionais (age?)

const user: UserRequired = {
    name: 'John',
    phone: '(42) 3252-2112',
    email: 'test@test.com.br',
    password: '********',
    age: 32
}
