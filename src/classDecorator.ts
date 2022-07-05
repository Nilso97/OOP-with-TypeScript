// Class @decorator

function setAPIVersion(apiVersion: string) {
  return (target: any) => {
    return class extends target {
      version = apiVersion;
    };
  };
}

// @decorator - anotar a versão da API
@setAPIVersion("1.0.0")
class API {}

console.log(new API());
