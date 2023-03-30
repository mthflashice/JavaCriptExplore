//New
let name = new String('Math')

let date = new Date(23-03-28)

// typeof
console.log(typeof'Math')

//delete
const person={
    name:'Math',
    age: 30,
}
delete person.age
console.log(person)

// Operadores Aritiméticos
// Multiplicação *
console.log(3.5*6.4)
//divisão /
console.log(10/2)
//soma +
console.log(30+70)
//divisão -
console.log(44-22)
//resto da divisão %
let remainder
remainder = 11 %3
console.log(remainder)
// incrementpo ++
let increment = 0
increment ++
increment ++
console.log(increment)
//decremento --
let decrement =0
decrement--
console.log(decrement)
//exponencial **
console.log(2**4)


//Grupo de operação ( )
let total = (2+4)*8 // agrupo texto também

//Operador de comparação
let one =1
let two =2
// == igual a
console.log(two==1)
console.log(one=="1")
// != diferente de
console.log(one!= two)
console.log(one!= 1)
console.log(one!= '1')
//=== extritamente igual a
console.log(one===1)
console.log(one==="1")
//!== Extritamente diferete de
console.log(two!==2)
console.log(two!=="2")

// > Maior que
console.log(one>two)
//>= Maior igual a
console.log(one>=1)
console.log(two>=2)
//< Menor que
console.log(one<two)
//<= Menor igual a
console.log(one<=two)
console.log(one<=1)
console.log(one<=0)
    
//operadores de atribuição(Assigment)
let x
// assigment
x=1
// addition assigment
// x= x+2
x +=2
console.log(x)
// subtraction assigment
//x=x-1
x-=1
console.log(x)
//multiplication assigment
//x=x*2
x*=2
console.log(x)
//division assigment
// x=x/2
x/=2
console.log(x)
//remainde, | resto da divisão
x%=2
console.log(x)
// expontation 
x**=2
console.log(x)

// Operadores lógicos(logical operators)
// - 2 valores booleanos, quando verificados, resulta em verdadeiro ou falso
let pao = false
let queijo = true
 // AND &&
// os 2 tem que ser verdadeiro

//Or ||
// um ou outro pra ser verdadeiro

//Not !
//troca o valor de verdadeiro ou falso
console.log(pao ||queijo)

//NOt !
console.log(!pao)

//Operador Condicional (ternário)
let cafe = true
let leite = false
let banana =false

const niceCafeDaManha = cafe && leite ? 'Café top' : 'Café ruim'
const niceCafeDaManha2 = cafe || banana ||leite ? 'Café top' : 'Café ruim'
console.log(niceCafeDaManha)
console.log(niceCafeDaManha2)

// Maior de 18
let age =16
const PodeDirigir = age >=18? 'Pode dirigir' : 'Não pode dirigir'
console.log(PodeDirigir)

//Operador de String(string operator)
let alpa ='alpa'
alpa +='bet'
console.log(alpa+ 123)

//False
console.log( NaN ? 'verdadeiro' : 'falso' )
//Truthy
console.log( Infinity ? 'verdadeiro' : 'falso' )
