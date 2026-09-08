# Formativa 1 - Osnir - Rede de Computadores

O que é o processo de Encapsulamento nas redes de computadores?
- R: O processo de adicionar cabeçalhos (e trailers) específicos de cada camada à medida que
    os dados descem a pilha de protocolos.
    
    Ecapsulamento - Marca onde um pacote, ou unidade de dados, começa e termina. A parte inicial de um pacote é chamada de cabeçalho, e o final de um pacote é chamado de rodapé. Os dados entre o cabeçalho e o rodapé são as vezes chamados de carga útil.

Qual é a principal diferença conceitual entre o Modelo OSI e a Arquitetura TCP/IP?
- R: O modelo OSI é um padrão teórico e didático desenvolvido pela ISO, enquanto o TCP/IP é a
implementação prática e real utilizada na Internet.
    
    Modelo OSI - Modelo de interconexão de sistemas abertos, permite que diversos computadores se comuniquem usando protocolos
        7 camadas
            - Aplicação: Responsável pelos protocolos e pela manipulação de dados que o software ultiliza para apresnetar informações relevantes ao usuário
            - Apresentação: Responsável por traduzir os dados recebidos em uma sintaxe que a camada de aplicação do dispositivo receptor possa entender
            - Sessão: Responsável por abrir e fechar a comunicação entre dois dispositivos
            - Transporte: Responsável pela comunicação de ponta a ponta entre os dois dispositivos.
            - Rede: Responsável por facilitar a transferência de dados entre duas redes diferentes(Caso os dispositivos estejam na mesma rede, essa camada é desnecessária)
            - Enlace de Dados: A camada de enlace facilita a tranferÇencia de dados entre dois dispositivos na mesma rede
            - Fisica: Equipamento físico envolvido na transferÊncia de dados, como cabo e Switches
            
    Arquitetura TCP/IP - É um conjunto de protocolos de comnicação entre computadores em rede que se caracteriza pela definição de um modelo padrão de camdas para implementação na arquitetura de rede. 
        4 Camadas 
            - Aplicação: Onde são realizados a maior parte das requisições poara execução de tarefas na rede
                TELNET (Terminal Virtual);
                FTP (File Transfer Protocol);
                SMTP (Send Mail Transfer Protocol);
                DNS (Domain Name System);
                HTTP (Hypertext Transfer Protocol).
            - Transporte: Executadas ações relacioandas à confiabilidade e integridade dos dados por meio de funções como o controle de fluxo, controle de erro, sequenciação e multiplexação de mensagens 
            - Rede/Inter-redes: Permissão de envio de pacotes por hosts a qualquer rede e pela garantia de que esse daods cheguem ao su destino final
            - Interface de Rede: Conexão básica do host coma  rede por meio de algum protocolo capaz de enviar pacotes IP

Em qual camada do modelo OSI opera o protocolo IP (Internet Protocol) e qual é a sua PDU (Protocol Data Unit)?
- R:  Camada de Rede / Pacote

    O que é PDU?
        - É uma unidade única de informação transmitida entre entidades pares de uma rede de computadores. 
    O que é IP?
        - Comjunto de regras, para roteamento e endereçamento de pacores de dados para que eles possam viajar pelas redes e chegar ao destino correto

Explique com suas palavras a função da Camada de Transporte (Camada 4) e diferencie brevemente os  protocolos TCP e UDP.
- R: A camada de transporte é resposável pela comunicação entre dois dispositivos de ponta a ponta, TCP garante a entrega confiável, ordenada e sem erros, já a UDP é usada na rede de compuadores para transferência de dados de forma mais rápida. 

    O que é TCP?
        - É um protocolo de camada de transporte que garante a entrega confiável, ordenada e sem erros de dados entre computadores de uma rede. 
    O que é UDP?
        - É um protocolo de comunicação da camada de transporte usado em rede de compuadores para transferir dados de forma rápida.

O que são PDUs (Protocol Data Units) e como elas mudam de nome da camada de Transporte para a camada de Enlace?
- R: PDUs é um termo ultilizado em redes e telecomunicações para se referir à unidade de dados transmitida entre entidades de rede. Pelo processo de encapsulamento, ela vai mudando de nome a cada camada. Na de transporte ela se chama segmento, camada de rede se chama pacote e na camada de enlace se chama quadro.

    O que é PDU?
        - É um termo usado em redes e telecomunicações para se referir à unidade de dados transmitida entre entidades de rede

Um pacote IP viaja pela rede carregando endereços lógicos. O que acontece com o endereço MAC de origem e destino a cada salto (roteador) que o pacote atravessa?
- R: O endereço MAC de origem é substituido pelo MAC da interface de saída do roteador atual que está enviando o pacote.

    Endereço lógico - É uma referência de memória gerada pela CPU enquanto um programa está em execução, representando a localização dos dados na perspectiva do processo e não no hardware real.
        Como funciona: 
            Geração - A CPU cria o endereço lógico qunado executa as intruções de um programa
            Tradução - Um componente de hardware chamado MMU (Unidade de Gereciamento de memória) converte esse endereço virtual em um endereço físico na memória RAM 
            Abstração - O programa acredita que possui um espaço de memória contínuo e exclusivo, sem precisar saber onde os dados estão guardados de verdade no computador.
    
    Endereço MAC (Média Acess Control ) - É um indetificador físico único gravado na placa de rede de um   dispositivo hardware 
    
    O que acontece com cada salto?
        - Endereço MAC de origem é substituido pelo MAC da interface de saída do roteador atual que está enviando o pacote 
        Endereço MAC de destino é substituido pelo MAC do próximo equipamento na rede
        Endereço IP NÃO sofre alteração


