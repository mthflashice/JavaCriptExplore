//Estrutura de repetição
//for for(inicialização de uma variável; condição de continuação para o loop; expressão final)
// break : para a execusão do Loop
// continue : Pula a exeucção do momento

for(let i= 0; i <10; i++){ //começa com zero
    console.log(i)
}

for(let i= 1; i <10; i++){ //começa com UM
    console.log(i)
}

for(let i= 100; i >0; i--){ //começa com CEM
    console.log(i)
}

for(let i= 100; i >0; i--){ //
    if(1===50){
        break;
    }
    console.log(i)
}

for(let i= 10; i >0; i--){ //
    if(1===5){ // Pula o execução do momento, no caso o 5
        continue;
    }
    console.log(i)

}

