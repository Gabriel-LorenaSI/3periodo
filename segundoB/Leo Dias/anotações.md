Aula 1 - Arquitetura distribuida 

Definição
    É um estilo arquitetural 

Caractericas 
    Transparência de distribuição
        - Usuario interage com o sistema sem precisar saber em qual nó está na execução ou onde os dados estão armazenado
            - Usando o sistema como se fosse uma vez só 
    Trasparência de localização
        Serviços podem ser acessados sem referência explicita ao nó     
    Transparência de replicação
        Multiplas cópias de dados podem existir sem impacto na lógica de uso
    Trasparência de concorrência 
        Multiplos usuários acessam os recursos simultaneamente  sem conflitos aparentes 

Heterogeneidade
    Os nós podem ter diferentes sistemas operacionais, linguagens de progamação e hardware (Ex.: REST, gRPC,
    SOAP, CORBA) ajudam a integrar os elementos.

Escabilidade 
    Expandir o sistema horizontalmente (Adicionar mais máquinas) ou verticalmente (melhorar recursos de uma máquina) é inerente ao modelo distribuido 
        Horizontal - Mais maquinas
        Vertical - Recursos da máquina

Tolerância a falhas
    O sistema deve continuar a funcionar mesmo com falhas em alguns componentes. Isso envolve replicação de dados, redundância de serviços e mecanismos de failover.
        Se falhar um, ele aciona rapidamente o outro
        Tem que estar ciente de tudo 

Concorrência e comunicação 
    Os processos distribuídos interagem de forma assíncrona ou síncrona, geralmente por meio de mensagens, filas ou APIs.
        Assícrona - Na comunicação entre um sistema, ela pode se comunicar com a outra parte sem precisar depender de um retorno para seguir em frente
        sícrona - Se não houver resposta do outro sistema ele não executa a próxima ação, depende de uma resposta 

Modelos Arquiteturais de Sistemas Distribuídos

    Cliente-Servidor
        O cliente solicita serviços e o servidor responde.
            Exemplo: aplicações web tradicionais com navegador (cliente) e servidor de aplicação.

    Três camadas (ou n camadas)
        Separação em camada de apresentação, camada de lógica de negócio e camada de dados.
        Permite escalabilidade e melhor manutenção

    Orientado a Objetos Distribuídos
        Objetos localizados em diferentes nós interagem via chamadas de métodos remotos (RMI, CORBA).

    Orientado a Serviços (SOA)
        Serviços independentes expostos por interfaces bem definidas.
        Padrão que deu origem aos microsserviços.

    Arquitetura de Microsserviços
        Serviços pequenos, independentes, com comunicação via protocolos leves (ex.: HTTP/REST, gRPC, mensageria).
        Permite escalabilidade granular e alta resiliência.

    Arquitetura de Mensageria (Event-Driven)
        Componentes interagem publicando e consumindo eventos em filas ou tópicos.
            Exemplo: Kafka, RabbitMQ, Azure Service Bus.



