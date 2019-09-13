const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')
async function main() {
  Commander
    .version('v1')
    .option('-n, --nome [value]', "Nome do Heroi")
    .option('-p, --poder [value]', "Poder do Heroi")
    .option('-i, --id [value]', "Id um heroi")
    .option('-c, --cadastrar', "Cadastrar um heroi")
    .option('-l, --listar', "Listar herois")
    .option('-r, --remover', "Remove um heroi pelo id")
    .option('-a, --atualizar [value]', "Atualiza um heroi pelo id")
    .parse(process.argv)
    const heroi = new Heroi(Commander)

    try {
      if(Commander.cadastrar) {
        // console.log(heroi)
        delete heroi.id
        const resultado = await Database.cadastrar(heroi)
        if(!resultado){
          console.error('Heroi não foi cadastrado!')
          return
        }
        console.log('Heroi Cadastro com sucesso!')
      }
      if(Commander.listar) {
        const resultado = await Database.listar()
        if(!resultado) {
          console.error('Erro ao listar usuarios')
        }
        console.log('Lista de Herois', resultado)
      }
      if(Commander.remover) {
        const resultado = await Database.remover(heroi.id)
        if(!resultado) {
          console.error("Não foi possível remover o herói")
        }
        console.log("Herói removido com sucesso")
      }
      if(Commander.atualizar) {
        const idParaAtualizar = parseInt(Commander.atualizar)
        const dado = JSON.stringify(heroi)
        const heroiAtualizar = JSON.parse(dado)

        const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)
        if(!resultado) {
          console.error("Não foi possível atualizar o herói")
          return
        }
        console.log("Herói atualizado com sucesso")
      }
    } catch (error) {
      console.error('Deu ruim', error)
    }
}

main()