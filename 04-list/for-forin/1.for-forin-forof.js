const service = require('./service')

async function main() {
  try {
    const result = await service.obterPessoas('a')
    const names = []
    // FOR
    // console.time('for')
    // for (let i=0; i <= result.results.length -1; i++) {
    //   const pessoa = result.results[i]
    //   names.push(pessoa.name)
    // }
    // console.timeEnd('for')

    //FORIN
    console.time('forin')
    for(let i in result.results) {
      const pessoa = result.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('forin')

    //FOROF
    console.time('forof')
    for (pessoa of result.results) {
      names.push(pessoa.name)
    }
    console.timeEnd('forof')

    //FOREACH
    // console.time('forEach')
    // result.results.forEach((pessoa) => {
    //   names.push(pessoa.name)
    // })
    // console.timeEnd('forEach')

    console.log(`names`, names)
  }
  catch (err) {
    console.error(`error interno`, error)
  }
}

main()