//Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o
//resultado da última divisão efetuada.

import { question } from "readline-sync"

function dividindo(num){
    let resultado = num

    while(resultado > 1){
     let valor = resultado / 2
     resultado = valor
    }
    return resultado
}

function get_number(text){
    const numero = Number(question(text))
    return numero
}

function main(){
    //entrada
    const numero = get_number('digite um numero: ')
    
    //processamento
    const resultado = dividindo(numero)

    //saida
    const mensagem = (`O resultado é ${resultado}`)

    console.log(`${mensagem}`)
}

main()