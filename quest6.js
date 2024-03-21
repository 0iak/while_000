import { question } from "readline-sync"

function get_number(text){
    const numero = Number(question(text))
    return numero
}

function main(){
    const numero_algarismo = get_number('Digite um numero: ')

    let numero = numero_algarismo
    let total_algarismo = 1

    while(numero !== 0){
        let divisao = numero / 10
        numero = divisao
        if(divisao >= 1){
            total_algarismo++
        }
    }

    console.log(`${total_algarismo}`)
}

main()