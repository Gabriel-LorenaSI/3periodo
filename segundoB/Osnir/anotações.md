Aula 1 - Sub-Redes 

O PROBLEMA DAS REDES GRANDES
    Tempestade broadcast 
        O tráfego desnecessário sobrecarrega as placas de rede de todos os dispositivos.
    Falta de segurança 
        Não há isolamento entre departamentos (ex: RH e Alunos na mesma rede).
    Dificuldade de gestão 
        Redes gigantescas são difíceis de organizar e solucionar falhas.
        
O QUE É CIDR?
    /24 - Notação de barra 
        Siginificado - Indica quantos bits (da esquerda para a direita) estão reservados para identificar rede
        Equivalência - Um /24 equivale à máscara decimal 255.255.255.0 (24 bits ligados)
            1 = rede
            0 = host 

 -   -  -  - - - - - 
128 64 32 16 8 4 2 1 
Para ver a mascara, joga a rede nessa tabela. Onde for 1 soma e quando for 0 não soma 

Classes 
    A - 10.0.0.0 - Primeiro não mexe 
    B- 172.16.0.0 - 172 não pode mexer, ja o 16 pode variar até 31
    C - 192.168.0.0 - 192 e 168 não pode mudar, já os 0 podem ser alterados
        Caso o IP não se enquadre em algum desses modelos é por que a rede é publica 

