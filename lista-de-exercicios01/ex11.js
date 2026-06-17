const readline = require('readline-sync')
const idade = number(readline.question("qual a sua idade?"))
function podevotar(idade){
  if(idade>=16){return true}
  else{return false}
}
const resultado = podevotar(idade)
if(resultado === true){
  console.log("você pode votar")}
else{console.log("você nao pode votar")}
