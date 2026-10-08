Estilos e padrões Arquiteturais

Estilos Arquitetural
    - São formas gerais de organizar um sistema, Cada estilo traz vantagem, desvantagens e contexto de uso 

Camadas 
    Com niveis hierárquicos (UI, lógica de negócio, dados)
        Analogia em um Banco 
            Recpção -> setor operacional -> diretoria
                Recepção - Area do usuário/ Front-And
                Setor Operacional - Back And (Logicas de negócio)
                Diretoria - Acesso a pasta raiz

Cliente Servidor
    Divide responsabilidade entre clientes (que pedem serviços) e servidores (que fornecem serviços)
        Ex: Aplicação desktop que acessa um servidor de banco de dados
        
SOA (Service-oriented Architecture)
    Oganização baseada em serviços reutilizavéis 
    Ex: Empresas que expõem serviços de pagamento, envio de e e-mails, etc.

Microsserviços
    Cada funcionalidade é um serviço independente, comunicado por APIs
    Ex: Netflix, Amazon.
    Analogia - Feira livre -> cada barraca vende algo específico, mas juntas compõem o mercado

Event-Driven (Orientada a eventos)
    Componentes reagem a eventos gerados por outros
    Ex: Aplicação que dispara um e-mail quando a compra é finalizada    

Pipeline/Batch
    Processamento em etapas sequenciais 
    Ex: Compiladores (Fonte -> Análise léxica -> análise sintática -> código objeto)

# Padrões Arquiteturais 
- São soluções recorrentes a problemas comuns de desing arquitetal 

MVC (Model-View-Controller) - Separa dados, lógica de negócio e interface    
    - Muito usado no desenvolvimento de aplicações web devido a sua capacidade de separar a lógica de negócios, a apresentação de dados e controle de fluxo de aplicação.
        Model (Model) - Responsável pela lógica de negócios e pela manipulação de dados da aplicação.
        Visão (View) - É uma camada responsável pela apresentação dos dados ao usuário.
        Controlador (Controller) - Atua como intermediário entre o modelo e a visão. Ele processa as requisições do cliente, chama os métodos apropriados no modelo e decide qual visão deve ser renderizada como resposta.

MVVM (Model-View-ViewModel) - Usado em aplicações desktop/mobile (como WPF, Angular)

Repository - Abstrai acesso a dados.

Factory, Singleton, Observer - padrões de desing que apoiam a arquitetura 
    
Exemplo prático - Mostrar como um sistema ASP.NET Core MVC ultiliza padrão MVC na organização do controllers, view e models     

Estrutura do projeto MVC
    minha-aplicacao-mvc/
    │
    ├── controllers/
    │   └── tarefaController.js
    │
    ├── models/
    │   └── tarefaModel.js
    │
    ├── views/
    │   ├── index.ejs
    │   └── adicionarTarefa.ejs 
    │
    ├── public/
    │   └── style.css
    │
    ├── app.js
    └── package.json
        
Extenção .ejs - Ele permite misturar código HTML com lógica em JavaScript do lado do servidor.

# Leonardo - Modelo MVC no projeto 
# Osnir - Uma página com criptografia HTPS 
# Osnir - REQUISITOS FUNCIONAIS E NÃO FUNCIONAIS 
# Rafael - Rotas com estrutura MVC usando array de objetos 
# Debora - Apresentação de modelos de entidades e modelo do objeto MER 

# Modelagem da Arquitetura 
    - A modelagem é a representação visual de como o sistema será estruturado e como os componentes se relacionam 

UML (Unified Modeling Language) 
    - Diagrama de componentes - Mostra os modulos principais 
    - Diagrama de implantação - Mostra servidores, nós, contaneres
    - Diagrama de pacotes - Organização lógica 

C4 Model (Context, Container, Component, Code)
    - Nivel de contexto - Mostra como o sistema interage com atores externos 
    - Nivel Container - Dividi em subsistemas (API, banco, Front-and)
    - Nivel Componente - Quebra os containers em módulos menores 
    - Nivel código - Detalhamento de classes e funções 
    
