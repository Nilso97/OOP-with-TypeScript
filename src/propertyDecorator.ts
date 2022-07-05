// Property @decorator
/*
target (construtor), 
key (nome do método), 
*/

function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(
          `Erro: você não pode criar um ${key} menor que ${length} letras!`
        );
      } else {
        val = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  // validação - se for menor que 5 letras - error
  @minLength(5) // @decorator
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie("Harry Potter e o Cálice de Fogo");

console.log(movie.title);
