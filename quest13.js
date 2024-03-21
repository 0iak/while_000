//Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário 
//(segundo os critérios descritos abaixo), a soma dos salários atuais, 
//a soma dos salários reajustados e a diferença entre as 2 somas. (Flag: salário=0)

import { question } from "readline-sync"

function calcular_novo_salario(s){
    
    if(s <= 2999.99){
        const salario = s * 0.25
        return salario
    }else if(s<= 5999.99){
        const salario = s * 0.2
        return salario   
    }else if(s <= 9999.99){
        const salario = s * 0.15
        return salario 
    }else{
        const salario = s * 0.1
        return salario 
    }

}

function calcular_ns_sa_ssr_ds(sal){
    let n_s = 0
    let s_a = 0
    let s_s_r = 0
    let s_d = s_a - s_s_r

    while(n_s < 0){
        let valor_n_s = calcular_novo_salario(sal)
        let valor_s_s_r = sal - calcular_novo_salario(sal) 
        n_s = valor_n_s
        s_a += valor_n_s
        s_s_r += valor_s_s_r
    }

    return console.log(`Novo salario:${n_s}
                        Soma dos salarios:${s_a}
                        Soma dos reajustes:${s_s_r}
                        Diferença entre soma dos sal. e soma dos reaj. :${s_d}`)

}

function get_number(text){
    const numero = Number(question(text))
    return numero
}

function main(){

    const salario = get_number('Digite o salario: ')

    const resultado = calcular_ns_sa_ssr_ds(salario)

    console.log(`${resultado}`)
}

main()