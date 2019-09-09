/*
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir de seu ID
 2 Obter o endereco do usuario pelo Id
*/
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
      return  resolve({
        telefone: '1231321',
        ddd: 11
      })
    }, 2000)
  })
}

function obterEndereco(idUsuario, callback) {
  // return new Promise((resolve, reject) => {
    setTimeout(() => {
      return callback(null, {
        rua: 'Tv barão',
        numero: '007'
      })
    }, 2000)
  // })
}

const usuarioPromise = obterUsuario()
// usuario -> telefone ->
usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id)
      .then(function resolverTelefone(result) {
        return {
          usuario: {
            nome: usuario.nome,
            id:usuario.id
          },
          telefone: result
        }
      })
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      }
    })
  })
  .then((resultado) => {
    console.log(`
      Nome: ${resultado.usuario.nome}
      Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
      Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `)
  })
  .catch((err) => {
    console.error(err)
  })

// obterUsuario(function resolverUsuario(error, usuario) {
//   if(error) {
//     console.error('Deu ruim no USUARIO', error)
//     return;
//   }
//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if(error1) {
//       console.error('Deu ruim no TELEFONE', error)
//       return;
//     }
//     obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//       if(error2) {
//         console.error('Deu ruim no ENDEREÇO', error)
//         return;
//       }

//       console.log(`
//         Nome: ${usuario.nome},
//         Endereco: ${endereco.rua},${endereco.numero},
//         Telefone: (${telefone.ddd}) ${telefone.telefone}
//       `)
//     })
//   })
// })
