// Function Expression| Function Anonymous

//Parametros das funcçoes | parameters
const sum =function(number1, number2 ){
let total =number1+number2
return total 
}
sum(2,4) // Argumentos | Arguments
// sum()
let number1 =30
let number2=26

console.log(`a soma é ${sum(number1,number2)}`)

//Funçao é como Liquidificador
function fazerSuco(fruta1, fruta2){
return  'Suco de:'+ fruta1+fruta2}

const copo =fazerSuco('Laranja', 'Limão')

console.log(copo)

//Function Hoisting --> Recebe elevação,  com let funciona
// com Const e Var não!

esssEhNome()

function esssEhNome(){
    console.log('Math')
}

//Arro Function
 const esssEhNome2 =(name) =>{
    console.log(name)
 }

 esssEhNome2('Math')

 //Callback Function 
 // *Função Chamar de Volta, função passando de paramentro pra outra

function essEhNome3(name){
    console.log('Antes de executar a função Callback')
    name()
    console.log('Depois de executar a CallBack')
}
essEhNome3(
    ()=>{
        console.log('Estou em uma Callback')
    }
)

//Função ( ) Construtora
/*Function() construtor
    - Expresão new
    -criar um novo objeto
    -this keyword
 */
//Boa pratica começar ela com Maisculo
    function Person(name1) {
        this.name1 = name1
        this.walk  = function ( ) {
            return this.name1 + " está andando"
        }
    }

    const mayk = new Person("Mayk")
    const joao = new Person("João")
    const math = new Person("Matheus Quirino")    

    console.log(mayk.walk())
    console.log(joao.walk( ) )
    console.log(math.walk())
 
