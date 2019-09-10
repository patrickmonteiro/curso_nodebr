const service = require('./service')

Array.prototype.meuMap = function (callback) {
  const novoArrayMApeado = []
  for(let indice = 0; indice <= this.length -1; indice++) {
    const resultado = callback(this[indice], indice)
    novoArrayMApeado.push(resultado)
  }
  return novoArrayMApeado
}
async function main () {
  try {
    const result = await service.obterPessoas(`a`)
    // const names = []
    // result.results.forEach(item => {
    //   names.push(item.name)
    // })

    // const names = result.results.map((pessoa) =>  pessoa.name)

    const names = result.results.meuMap(function (pessoa, indice) {
      return `[${indice}]${pessoa.name}`
    })
    console.log('name', names)
  }
  catch (error){
    console.error('Error ->', error)
  }
}

main()