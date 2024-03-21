import { question } from "readline-sync"

function maior(A,B){
    let v_a = A
    let v_b = B 
    
    while(v_b !== 0){
      let resto = A % B
      v_a = v_b
      v_b = resto
    }

    return v_a
}

function calcular_mdc(num_a,num_b){
    if(num_a === 0){
        return `${num_b}`
    }else if(num_b === 0){
        return `${num_a}`
    }else if(num_a < num_b){
        return`${maior(num_a,num_b)}`
    }else{
        return `${maior(num_b,num_a)}`
    }
}

function get_number(text){
    const numero = Number(question(text))
    return numero
}

function main(){
    //entrada
    const numero_a = get_number('Digite A: ')
    const numero_b = get_number('Digite B: ')

    //processamento
    const mdc = calcular_mdc(numero_a,numero_b)

    //saida
    console.log(`${mdc}`)

}

main()