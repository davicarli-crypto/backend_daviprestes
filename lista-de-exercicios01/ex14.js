function reverter(array) {
  let arrayInvertido = []
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}
const listaOriginal = [1, 2, 3, 4, 5]
const listaNova = reverter(listaOriginal)
console.log(listaNova)
console.log(listaOriginal)
//o (.push) coloca um item no final de um array ja criado que pode estar em branco ou com itens ja.
