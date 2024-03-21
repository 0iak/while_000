
def calcular_divisores(numero):
    divisores = 0
    while numero != 0:
        divisores += 1
        if numero % divisores == 0:
            print(f'{divisores}')       

def main():
    numero = int(input('Digite um numero: '))

    while numero != 0 : 
        calcular_divisores(numero)

    print(f'fim')

main()
