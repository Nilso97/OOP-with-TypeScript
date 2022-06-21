import { IUser } from "../interface";

// Pick<Type, Keys>
type UserCredential = Pick<IUser, 'email' | 'password'>; // Seleciona quais propriedades vão ser utilizadas

const user: UserCredential = {
    email: 'test@test.com.br',
    password: '********'
}
