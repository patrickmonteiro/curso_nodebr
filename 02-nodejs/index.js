/*
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir de seu ID
 2 Obter o endereco do usuario pelo Id
*/

function obterUsuario(callback) {
  setTimeout(function () {
    return callback (null, {
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return  callback(null, {
      telefone: '1231321',
      ddd: 11
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Tv barão',
      numero: '007'
    })
  }, 2000)
}

function resolverUsuario(erro, usuario) {
  console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
  if(error) {
    console.error('Deu ruim no USUARIO', error)
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if(error1) {
      console.error('Deu ruim no TELEFONE', error)
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if(error2) {
        console.error('Deu ruim no ENDEREÇO', error)
        return;
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereco: ${endereco.rua},${endereco.numero},
        Telefone: (${telefone.ddd}) ${telefone.telefone}
      `)
    })
  })
})

// const telefone = obterTelefone(usuario.id)
// console.log('telefone', telefone)
