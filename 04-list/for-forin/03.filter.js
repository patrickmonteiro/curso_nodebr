const { obterPessoas } = require('./service')

/*
  const item = {
    nome: 'Patrick',
    idade: 26
  }

  const { nome, idade } = item
  console.log(nome, idade)
*/
async function main() {
  try {
    const { results } = await obterPessoas(`a`)
    const familiaLars = results.filter((item) => {
      const result = item.name.toLowerCase().indexOf('lars') !== -1
      return result
    })
    const names = familiaLars.map((pessoa) => pessoa.name )
    console.log(names)
  } catch (error) {
    console.error('deu ruim', error)
  }
}

main()