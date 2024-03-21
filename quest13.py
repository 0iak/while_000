def calcular_salario(salario):
    if salario < 3000 and salario > 0:
        return (salario * 0.25)+ salario
    elif salario < 6000:
        return salario * 0.2 + salario
    elif salario < 10000:
        return salario * 0.15 + salario
    else:
        return salario * 0.1 + salario


def main():

    salario = 1
    salarios_atuais = 0
    salarios_reajustado = 0 

    while salario != 0:
        salario = int(input('Digite salario: '))
        salarios_atuais += salario

        if salario == 0 :
            break
        else:
            numero =calcular_salario(salario)
            salarios_reajustado += numero
    
    diferença = salarios_reajustado -salarios_atuais 
    print(f'soma salários atuais: {salarios_atuais} ... soma dos salarios reajustados: {salarios_reajustado} ... diferença entre salarios {diferença}')

main()