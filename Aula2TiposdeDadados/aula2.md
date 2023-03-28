## A String é uma cadeia de caracteres, ou seja, um texto.
Para atribuir uma string a uma variável, você pode usar:

' ' // aspas simples
" " // aspas duplas
` ` // template literals, para inclui outras variáveis e expressões dentro da própria string
    <script src="./index.js">console.log('Matheus Quirino')>
    console.log('Matheus Quirino ${1+}')><script>


## Number,O Number é um dado do tipo número. Ele pode ser inteiro ou real (float):
- NaN - Not a Number - usado para representar um dado que não é número. Exemplo:
- Infinity é um valor simbólico que representa o inifinito. Precisa ser declarado com o ‘I’ maiúsculo.
let age = 12
// age é um número inteiro
let age = 12
// age é um número inteiro
- let notANumber = (25 * "casa")
// notANumber = NaN, pois é impossível multiplicar um número por uma string alfanumérica
- let numberInfinity = (42 / 0)
// numberInfinity = Infinity


## Boolean
# Dados do tipo Boolean representam uma entidade lógica e podem ser true (verdadeiro) ou false
(falso).
Exemplo:
- let weekend = false


## undefined 
# O valor undefined é atribuído automaticamente para uma variável que não tem atribuição no programa.
- Indefinido
Exemplo:
let appointment
//como nenhum valor for atribuído, appointment recebe undefined

# Null
- Nullo
* Objeto que não possui nada dentro
* diferente de indefinido


## Object
# Dados do tipo Object são objetos e possuem atributos (propriedades) e métodos (funcionalidades).
Object é declarado da seguinte forma:
// aqui criamos um Object copo
const copo = {
material: "vidro"
, //atributo String
capacidade: 250, // atributo Number
cheio: function() {
// aqui podemos declarar uma função/método que será atribuído ao Object
}
}

## Array
# Um dado do tipo Array representa um agrupamento de dados em forma de lista.
Um Array pode ser declarado da seguinte forma:
// aqui criamos um Array shoppingList
const shoppingList = [
"leite"
,
"ovos"
,
"chocolate"
,
2,
3,
]


## Dados Primitivos
# Não sofre alteração

* String
* Number
* Booolen
* undefined
* Symbol
*  BigInt

## Estruturais

* Object
            * Array
            * Map
            * Set
            * Date
            * ...
 * Function           