def calcular_porcentagem(variavel,total_participante):
    return (variavel / total_participante)*100

def segundo_turno(Dilma,Serra,Ciro,t_p):
    vencendor = t_p -(t_p/2) + 1
    if Dilma >= vencendor:
        print(f'Não')
    elif Serra >= vencendor:
        print(f'Não')
    elif Ciro >= vencendor:
        print(f'Não')
    else:
        print(f'Sim')

def main():

    print('...PESQUISA DE OPINIÃO... ....DIGITE UM DESES NUMEROS PARA SABERMOS SUA OPINIÃO.... DILMA:13  SERRA:45  CIRO GOMES:23  NULO:0   INDECISO:99  OUTROS:98')
    
    candidato = 1
    Dilma = 0
    Serra = 0
    Ciro_gomes = 0 
    nulos = 0
    indecisos = 0 
    outros = 0
    total_participantes = 0

    while candidato != -1:

        candidato = int(input('DIGITE SUA OPINIÃO: '))
        total_participantes += 1
        if candidato == 13:
            Dilma += 1
        elif candidato == 45:
            Serra += 1
        elif candidato == 23:
            Ciro_gomes += 1
        elif candidato == 0:
            nulos += 1
        elif candidato == 99:
            indecisos += 1
        else:
            outros += 1
    print(f'RESULTADO.... TOTAL DE PARTICIPANTES:{total_participantes} DILMA:{calcular_porcentagem(Dilma,total_participantes)} SERRA:{calcular_porcentagem(Serra,total_participantes)} CIRO GOMES:{calcular_porcentagem(Ciro_gomes,total_participantes)} INDECISOS:{calcular_porcentagem(indecisos,total_participantes)} OUTROS:{calcular_porcentagem(outros,total_participantes)} NULOS:{calcular_porcentagem(nulos,total_participantes)} HAVERÁ SEGUNDO TURNO:{segundo_turno(Dilma,Serra,Ciro_gomes,total_participantes)}')

main()   