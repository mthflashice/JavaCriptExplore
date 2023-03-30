// Controle de fluxo  | Control flow

// console.log(a)
// console.log(b)

// IF ... ELSE
let temperatura=36.9
let altaTemperatura = temperatura >=37.5
let mediaTempatura = temperatura <37.5 && temperatura >=37

if(altaTemperatura){
    console.log('Febre alta')
}else if(mediaTempatura){
    console.log('Febre moderada')
}else{
    console.log('Saúdavel')
}

// Switch
let expresssion ='a'

switch(expresssion){
    case 'a':
        //codigo
        console.log('a')
        break
    case 'b':
        //codigo para expresssion b
        console.log('b')
        break
        default:
            console.log('default')
            break
}

function calculate(number1, operator, number2) {
    let result = 0; // Caso usar operador não definido

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '%', 8))

// Trow
//--> Desparar
function sayMyName(name = '') {
    if (name === '') {
        throw  new Error ('Nome é obrigatório')
    }

    console.log(name)

    // try ... catch
}try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch função depois do erro')