// Type Predicates em TypeScrip

export type MyRequest<B = any, Q = B> = { // Tipos genéricos
  body?: B;
  query?: Q;
};

export type MyUser = {
  email: string;
  password: string;
};

export type Token = {
  refreshToken: string;
};

const checkRequest = (request: MyRequest<MyUser, Token>): boolean | never => {
  if (!keyExists(request, "body")) {
    throw new Error("Error");
  }

  if (!keyExists(request, "query")) {
    throw new Error("Error");
  }

  const email = request.body.email;
  const password = request.body.password;
  const refreshToken = request.query.refreshToken;

  return true;
};

// Predicado de tipo
const keyExists = <T extends Record<any, any>, K extends keyof T>(
  object: T,
  key: string
): object is T & Required<Pick<T, K>> => {
  return key in object;
};
