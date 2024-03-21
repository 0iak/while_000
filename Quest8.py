#Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo 
#quando a soma de dois números consecutivos da lista for igual a X

def main():
  numero_total = int(input('Digite um numero: '))
  soma = 0
  
  while soma != numero_total:
    numero_01 = int(input('Digite um numero da lista: '))
    numero_02 = int(input('Digite um outro numero: '))
    soma = numero_01 + numero_02
  print(soma)

main()
