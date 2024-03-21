//Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
//divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até chegar a 2.

import { question } from "readline-sync"

function divisao_xn(x,n){

    let valor_x = x
    let valor_n = n
    let divisões = 0

    while(n>2){
        let resultado = x/n
        divisões = resultado
        valor_x = resultado
        valor_n -= 1
        console.log(`${divisões}`)
    }

    return console.log(`${divisões}`)

}

function get_number(text){
    const numero = Number(question(text))
    return numero
}

function main(){

    const numerox = get_number('Digite X: ')
    const numeron = get_number('Digite N: ')

    const resultado = divisao_xn(numerox,numeron)

    console.log(`${resultado}`)

}

main()