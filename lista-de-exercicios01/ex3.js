const imput = require('readline-sync')
const numero = Input.question("qual o número que deseja ser par ou impar.")
let resultado = (numero%2===0)?"par":"impar"
console.log(resultado)