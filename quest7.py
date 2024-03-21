#Leia um número e, a seguir, 
#leia uma lista de números até achar um igual ao primeiro número lido.

def escrever_lista(num):
    lista = int(input('Digite um numero da sua lista: '))
    numero = 0
    contador = 0

    while numero < num:
        numero = lista
        contador += numero
        print(f'{numero}')
        lista = int(input('Digite outro numero da sua lista: '))

        
def main():

    numero = int(input('Digite um numero: '))

    lista = escrever_lista(numero)

    print(f'{lista}')

main()