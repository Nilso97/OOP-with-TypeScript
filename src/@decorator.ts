// @Component/

function log(target: any) {
  console.log(target); // "target" é o "constructor" da função
}

@log
class Foo {}
