def difereca(clube_a,clube_b):
    if clube_a > clube_b:
        return print(f'Clube "A" venceu!!!')
    else:
        return print(f'Clube "B" venceu')

def pontuação(classificacao):

    if classificacao == 1:
        return 9
    elif classificacao == 2:
        return 6
    elif classificacao == 3:
        return 4
    elif classificacao == 4:
        return 3
    else:
        return 0
    
def main():
    prova = 1
    clube_a = 0
    clube_b = 0

    while prova != 0:
        prova = int(input('Digite o numero da prova: '))

        if prova == 0:
            break
        else:
            nome = str(input('Digite o nome do competidor: '))
            tempo = int(input('digite o tempo do competidor: '))
            classificacao = int(input('digite a classificação do competidor: '))
            clube_competidor = str(input('digite o clube do competidor(A ou B): '))
            if clube_competidor == 'a' or clube_competidor == 'A':
                clube_a += pontuação(classificacao)
            else:
                clube_b += pontuação(classificacao)

    vencedor = difereca(clube_a,clube_b)
    print(f'Clube A:{clube_a} Clube B:{clube_b} Vencendor:{vencedor}')

main()           