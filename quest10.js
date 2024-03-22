import { question } from "readline-sync"

function get_number_min(mensagem, min){
  const numero = get_number(mensagem)

  if (numero < min){
    print('Número inválido! Digite novamente')
    return get_number_min(mensagem, min)
  }
}

function get_positive_number(mensagem){
    // Usa Recursividade: Uma Função chamar a si mesma
    const numero = Number(question(mensagem))
  
    if (numero <= 0){
      console.log('Valor inválido!')
      return get_positive_number(mensagem)
    }
  
    return numero
}

function get_number(text){
   const numero = Number(question(text))
   return numero
}

function peso_passageiros(con_pass,con_baga){
  const peso = (con_pass * 70) + (con_baga * 10)
  return peso
}

function computar_carga(quantidade){
  let qtd_containers_lidos = 0
  let peso_total = 0

  while (qtd_containers_lidos < quantidade){

    const peso = get_positive_number('Peso Container: ')
    peso_total = peso_total + peso

    qtd_containers_lidos += 1
  }

  return peso_total
}

function main(){
    
   // Carga
    const qtd_contenes = get_positive_number('Digite a quantidade de contenes:')
    const peso_total = computar_carga(qtd_contenes)

    //Passageiros
    let contador_passageiros = 0
    let contador_bagagens = 0
    let bilhete = get_number('Bilhete: ')

    while (bilhete !== 0){
      contador_passageiros++
      const bagagens = get_number_min('Qtd de Bagagens: ', 0)
      trabalho
      contador_bagagens += bagagens

      bilhete = get_number('Bilhete: ')
  
    const total_peso_fora = peso_passageiros(contador_passageiros,contador_bagagens) + peso_total
    const combustivel_possivel_kg = 500_000 - total_peso_fora
    const combustivel_possivel = combustivel_possivel_kg / 1.5
    const decolagem_autorizada = combustivel_possivel >= 10_000 ? 'SIM' : 'NÃO'

    console.log(`......PERMITIDO OU NÃO.....
    - Passageiros Embarcados: ${contador_passageiros}
  - total de volume de bagagem: ${contador_bagagens}
  - Peso dos Passageiros: ${peso_passageiros(contador_passageiros,contador_bagagens).toFixed(2)}kg
  - Peso da carga: ${peso_total.toFixed(2)}kg
  - Decolagem Autorizada? --> ${decolagem_autorizada}`)
      
}
}

main()