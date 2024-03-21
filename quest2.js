import { question } from "readline-sync"

function calcular_mmc(num_a,num_b){
    
    let mmc = 1

    function true_multiplo(varialvel1,varialvel2){
        const verdadeiro = varialvel1 % varialvel2 === 0
        return verdadeiro
    }

    while(!(true_multiplo(mmc,num_a) && true_multiplo(mmc,num_b))){

        mmc++
    }

    return mmc
}

function get_number(text){
    const numero = Number(question(text))
    return numero
}

function main(){
    const numero_a = get_number('Digite A: ')
    const numero_b = get_number('Digite B: ')

    const mmc = calcular_mmc(numero_a,numero_b)

    console.log(`....................................

    O mmc de ${numero_a} e ${numero_b} é ${mmc}
    
    .............................................`)
}

main()