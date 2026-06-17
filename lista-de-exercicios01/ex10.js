const readline = require('readline-sync')
function contarLetra(texto, letra) {
  let contador = 0
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === letra) {contador++}
  }
  return contador
}
const resultadoFinal = contarLetra(
  readline.question("Digite uma palavra ou frase: "),
  readline.question("Qual letra você quer contar? ")
);
console.log(`A letra aparece ${resultadoFinal} vezes.`)
