//Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
//quando a soma de dois números consecutivos da lista for igual a X.

import { question } from "readline-sync"

function calcular_numeros(NUM){
    let  numero_lista_fora = 0
    let numero_anterior = 0
    let soma = numero_anterior + numero_lista_fora
    let lista = 0 

    while(soma !== NUM){
        const numero_lista = get_number('Digite outro numero para a sua lista: ')
        numero_lista_fora = numero_lista
        numero_anterior = numero_lista
        lista = numero_lista
        console.log(`${lista}`)
    }

    return lista
}

function get_number(text){
    const numero = Number(question(text))
    return numero
}

function main(){

    const numero = get_number('Digete um numero: ')

    const soma_dos_numeros = calcular_numeros(numero)

    console.log(`Numero:${numero} 
    lista de numeros:${soma_dos_numeros}`)
}

main()