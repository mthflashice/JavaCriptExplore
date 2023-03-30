// Cria um loop sobre um objeto

let person={
    name: 'Melqui',
    age: 5,
    weigth:17.0
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}