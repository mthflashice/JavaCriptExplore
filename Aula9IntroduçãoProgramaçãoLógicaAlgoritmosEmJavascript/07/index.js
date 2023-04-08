/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
];

let patientsNames = [];

for (let patient of patients) {
  patientsNames.push(patient.name);
}

alert(patientsNames);

let patientsAge = [];

for (let patient of patients) {
  patientsAge.push(patient.age);
}

alert(patientsAge);

let patientsWeight = [];

for (let patient of patients) {
  patientsWeight.push(patient.weight);
}

alert(patientsWeight);


let patientsHeigh= [];
for (let patient of patients) {
  patientsHeigh.push(patient.height)
}

alert(patientsHeigh);

/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */


function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}