const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function (click) {
  console.log('um usuário clicou', click)
})

// let count = 0
// setInterval(function () {
//   meuEmissor.emit(nomeEvento, 'no ok' + (count++))
// }, 1000)
// meuEmissor.emit(nomeEvento, 'na barra de rolagem')

const stdin = process.openStdin()
stdin.addListener('data', function (value) {
  console.log(`Você digitou: ${value.toString().trim()}`);
  
})