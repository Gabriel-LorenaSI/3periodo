Enthernet e Endereço MAC

Encaminhar o pacote para qual porta fisica pelo swtich 
    Mais de um endereço atribuidos na mesma porta 
    Todo o Switch tem limetes

Como evitar o caos e as colisões?
    O uso inteligente do Endereço MAC e o aprendizado dinâmico do swtich
    1 - HUB
    2 - swtich - mac / llc
    Quando tem switchs não tem colisão 

O que é colisão? 
    Colisão de dados passando via internet, famoso modelo first in first out 


Comunicação entre IPs conectados no mesmo switch se comunicam pelo Endereço MAC
       CAM
    MAC | PORTA
    IP1     2
    IP2     3

Quando é ultilizado o endereço IP?
    Quando o roteador se comunica com a internet 

Para redes com muito trafego, precisa de um Switch de melhor qualidade 


Padrão ETHERNET - IEEE 802.3

Preâmbulo 8 bytes
MAC destino 6 bytes
MAC origem 6 bytes 
Tipo 2 bytes
Dado(Payload) 46 - 1500 bytes 
FCS 4 bytes - Controle de erro 
    Mac destino - Endereço fisico de quem deve receber o quadro
    Dados - O pacote da camada superior Pacote IP
    MAC origem Endereço fisico de quem enviou o quadro
    FCS - Frame Check Sequence detecção de erros na transmissão 
PDU da Camada 2: O quadro (Frame) encapsula o Pacote da camada 3 

Endereço MAC: DNA do WardWare
    12 digitos em exadecimais 
    3 primeiros identifica o fabricante 
    3 ultimos é o numero de série 
        OUI(24 bits)
        NIC(24 bits)

Unicast 
    Comunicação 1 para 1 
    Quadro é enviado para um destino especifico 
    Outros dispositivos ignoram o quadrp
Broadcast
    Comunicação de um para todos 
    Quadro é processado por todos na rede local 
    Essencial para descoberta (ARP, DHCP)

Como o switch trabalha? 
    PC-A -> SWITCH -> PC-B
    O antigo HUB é burro e ineficiente. Replica o sinal para todas as portas, causando colisões
    Switch - Inteligente, Analisa o MAC de destino e envia o quadro apenas na porta correta 

O ciclo de apredizado do switch 
    Aprendizado 
        Ao receber um quadro, o switch examina o MAC de Origem e o associa à porta física de entrada da sua tabela
    Inudação
        Se o Mac de destino não estiver na tabela, o switch envia o quadro para todas as portas 
    Encaminhamento 
        Quando o destino é conhecido o switch encaminha o quadro apenas para a porta específica associada àquele MAC
A tabela MAC
    PORTA   Endereço MAC    Tipo
    fa0/1   001A.2b3c.4d5e  Dynamic 
    Fa0/2   00E0.F7A1.B2C3  Dynamic
    Fa0/5   000C.29D4.E5F6  Dynamic
    Gi0/1   0090.0B12.3456  Static
A tabela MAC mapeia endereços físicos às portas físicas do Switch