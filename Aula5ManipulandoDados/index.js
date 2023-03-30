/** Prototype
 - Aquilo que foi criado antes
 
 * proyotype-based language
 * proyotype chain
 */

//  Type conversion

console.log(Number("1")+ 2) // força o 1 pra number

//Manipular stings e numeros

let string ='1234'
console.log(Number(string))

let number =4321
console.log(String(number)) 

//Contar palavras e digitos
let word ='Telecomunicacao'
console.log(word.length)
let number2=1234
console.log(String(number2).length)

//transformar número quebrado em duas casas decimas

let number3 =71862827.81289092
console.log(number3.toFixed(2))

let number4 =71862827.81289092
console.log(number4.toFixed(2).replace('.',',')) // => transforma em string trocando . por ,

// Transformar letras minisculaas em MAISCULAS
let textTransforme ='Palavra a se transformar'

console.log(textTransforme.toLocaleLowerCase() .toUpperCase())

// Separe o texto onde tinha espaços e transforme os espacos com _

let phrese = 'Eu quero viver o Amor!!'
let myPhrese = phrese.split( ' ') 
let phreseComEspaco =myPhrese.join('_')
console.log(phreseComEspaco)

// Criar Array com construtor
let myArray = new Array('a', 'b', 'c','d')
console.log(myArray)

// contar elementos do aray Construtor
console.log(myArray.length)


// Transformar cada cadeia de caracteres em elementos de um array
let textManipuletion ='Manipulação'
console.log(Array.from(textManipuletion))

// ADD, Remover

let techs = ['html',' css',' js']

//adiconar um item no fim
techs.push('node.js')
// adionar no começo
techs.unshift('sql')
//remover do fim
techs.pop()
// remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1,3))
// remover 1 ou mais itens em qualquer posição do array
techs.splice(1,2) //começa com Zero
// Encontrar a posição de um elemnto no array
let index =techs.indexOf('html')
techs.splice(index,1)
console.log(techs)