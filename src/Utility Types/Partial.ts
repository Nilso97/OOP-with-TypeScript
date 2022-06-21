import { IUser } from "../interface";

// Partial<Type>
type UserPartial = Partial<IUser>; // Todas as propriedades são opcionais

const user: UserPartial = {
    name: 'John',
    phone: '(42) 3252-2112',
}

user.name = 'Carl'; // Posso realizar alterações nas propriedades quando estou utilizando o "Partial"...