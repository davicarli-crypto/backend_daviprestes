const readline = require('readline-sync')
const num1 = number(readline.question("fale um 1 número"))
const num2 = number(readline.question("fale um 1 número"))
const operacaoUsuario = readline.question("Escolha a operacao (+, -, *, /): ")
function calcular(num1, num2, operacaoUsuario){
  return operacao(num1, num2)
}
let funcaoEscolhida
if(operacaoUsuario === "+"){ funcaoEscolhida = (n1, n2) => n1 + n2}
else if(operacaoUsuario === "-"){funcaoEscolhida = (n1, n2) => n1 - n2}
else if(operacaoUsuario === "*"){funcaoEscolhida = (n1, n2) => ni * n2}
else if (operacaoUsuario === "/") {
  if (num2 === 0) {
    console.log("Erro: Nao e possivel dividir por zero!");
  } else {
    funcaoEscolhida = (n1, n2) => n1 / n2;
  }
}
if (funcaoEscolhida) {
  const resultadoFinal = calcular(num1, num2, funcaoEscolhida);
  console.log(`O resultado de ${num1} ${operacaoUsuario} ${num2} e: ${resultadoFinal}`);
}
