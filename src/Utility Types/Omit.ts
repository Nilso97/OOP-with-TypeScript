import { IUser } from "../interface";

// Omit<Type, Keys>
type UserCredentials = Omit<IUser, 'phone' | 'age'>; //  Seleciona quais propriedades serão omitidas (escondidas)

const user: UserCredentials = {
    name: 'John',
    email: 'test@test.com.br',
    password: '********',
}