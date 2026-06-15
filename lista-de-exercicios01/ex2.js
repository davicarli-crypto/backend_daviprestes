const input = require('readline-sync')
const base = input.question("qual a base do triangulo")
const altura = input.question("qual a altura do quadrado")
let area = base + altura *2
console.log(`${area} é a área do triangulo`)