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
function pesos_dos_passageiros(){
   // Passageiros
   let contador_passageiros = 0
   let contador_bagagens = 0
   let bilhete = get_number('Bilhete: ')

   while (bilhete !== 0){
     contador_passageiros++
     const bagagens = get_number_min('Qtd de Bagagens: ', 0)
     // trabalho
     contador_bagagens += bagagens

     bilhete = get_number('Bilhete: ')
 }

  let _pp = (contador_passageiros * 70) + (contador_bagagens * 10)
  
  return [_pp,contador_bagagens,contador_passageiros]

}
function get_number(text){
   const numero = Number(question(text))
   return numero
}

function main(){
    
   // Carga
    const qtd_contenes = get_positive_number('Digite a quantidade de contenes:')

    let qtd_containers_lidos = 0
    let peso_total = 0
      
    while (qtd_containers_lidos <qtd_contenes){
      
      const peso = get_positive_number('Peso Container: ')
      peso_total = peso_total + peso
      
      qtd_containers_lidos += 1
    }

    pesos_dos_passageiros()
    // Passageiros
    //let contador_passageiros = 0
    //let contador_bagagens = 0
    //let bilhete = get_number('Bilhete: ')

    //while (bilhete !== 0){
      //contador_passageiros++
      //const bagagens = get_number_min('Qtd de Bagagens: ', 0)
      // trabalho
      //contador_bagagens += bagagens

      //bilhete = get_number('Bilhete: ')
  //

    //const peso_passageiros = (contador_passageiros * 70) + (contador_bagagens * 10)

    const total_peso_fora_combustivel = _pp + peso_carga
    const combustivel_possivel_kg = 500_000 - total_peso_fora_combustivel
    const combustivel_possivel_litros = combustivel_possivel_kg / 1.5
    const decolagem_autorizada = combustivel_possivel_litros >= 10_000 ? 'SIM' : 'NÃO'

    console.log(`......PERMITIDO OU NÃO.....
    - Passageiros Embarcados: ${contador_passageiros}
  - total de volume de bagagem: ${contador_bagagens}
  - Peso dos Passageiros: ${peso_total.toFixed(2)}kg
  - Peso da carga: ${peso_carga.toFixed(2)}kg
  - Decolagem Autorizada? --> ${decolagem_autorizada}`)
      
}

main()