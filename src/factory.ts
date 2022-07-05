// Factory from @decorators

function logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} - ${target}`);
  };
}

@logger("Factory from @decorators")
class Factory {}
