25/08/2026 - Modelos d Entidades e Relacionamentos (MER)
    - Entidades 
    - Atributos 
    - Valores de dados 
    - Atributo Determinante/Chave primária
    - Relacionamentos 
    - Cardinalidades

O que é modelagem de dados? 
    - é o processo de criar uma representação visual ou esquema que define como os dados são coletados, estruturados, armazendados e relacionados em um sistema de informação.

==========================================================================================================================

    MER/ERA/DER - Serve apenas para apresentação das estruturas de informações, não contendo uma linguagem para a representação da manipulação. 

    Entedidade - Obejto do mundo real que interessa guardar informação de onde estou informatizando.
        -> Representação é um retângulo

    Atributos - São informações que interessa guardar da entidade. 
        -> Representação de agulhas na entidades. 

    Valores de dados - Os valores que o atributo pode assumir.

    Atributo determinante/Chave primaria (Modelo fisico) - Valor cujo o valor não se repete, nunca.
        -> Representação, sublinhado ou a bolinha fechada.

    Relacionamentos - A associação entre entidades.
        -> Losangulo com o verbo no infinitivo

    Cardinalidades - quantidade relativa que os elementos das entidades possuem entre si, ou seja, relação de cardinalidade entre os elementos das entidades.
        -> 1:1 - Lê-se um para um
                -> Um funcionário gerencia um departamento é gerenciado por um funcionário
           1:N - Lê-se um para muitos 
                -> Um funcionário está lotado em um departamento, Um departamento é lotado por muitos funcionários
           N:N - Lê-se muito para muitos
                -> Um funcionário participa de muitos projetos, um projeto tem a participação de muitos funcionários    

================================================================================================================================================

Exercios 

1) No contexto de uma loja de informática, identifique pelo menos quatro entidades.
        -> Clientes, Produtos, serviços e Pedidos/Vendas

2) Para a entidade Produto, proponha cinco atributos e indique a chave primária.
    -> Produto - Código de barras(Chave primária), Nome, Marca, Material e forencedor. 

3) Explique por que “nome do cliente” normalmente não deve ser chave primária.
    -> Por que o valor não pode ser repetido de forma alguma 

4) Represente a relação entre Equipe e Jogador, considerando que uma equipe possui muitos jogadores e cada jogador está cadastrado em uma equipe.
    -> Está na foto o diagrama.

5) Uma escola precisa registrar alunos e disciplinas. Um aluno cursa várias disciplinas e cada disciplina possui vários alunos. Qual entidade associativa pode ser criada?
    -> Está na foto o diagrama.

6) Elabore um DER/MER simples para uma clínica veterinária com Tutor, Animal e Consulta.
    -> Tutor:
        - id_Tutor - Indentificação do tutor (Chave primária)
        - Nome - Nome completo do tutor 
        - Telefone - Para contato 
        - Endereço - Residencial 

    -> Animal 
        - id_Animal - Identificação do animal 
        - Nome - Nome do animal 
        - Espécie - cachorro ou gato 
        - Raça - Raça do animal 
        - id_tutor - Chave estrangeira ligada a tabela do tutor

    -> Consulta 
        - id_consulta: Identificador único (Chave Primária).
        - data_hora: Data e horário do atendimento.
        - motivo: Sintomas ou razão da visita.
        - diagnostico: Avaliação do veterinário.id_animal: Identificador do animal (Chave Estrangeira ligada à tabela Animal).

    Relacionamentos (Cardinalidade)
        - Tutor para Animal (1 para N): Um Tutor pode ter um ou vários animais cadastrados, mas cada Animal pertence a apenas um tutor.
        - Animal para Consulta (1 para N): Um Animal pode realizar zero ou várias consultas ao longo do tempo, mas cada Consulta está associada a apenas um animal.
    
7) Uma locadora deseja cadastrar clientes, filmes e locações. Cada cliente pode fazer várias locações. Uma locação pode incluir vários filmes, e um filme pode aparecer em várias locações ao longo do tempo. Desenhe o DER/MER e destaque as chaves primárias.
    -> Cliente
        - id_cliente (Chave Primária - PK)
        - nome
        - telefone
        - endereco

    -> Locação 
        - id_locacao (Chave Primária - PK)
        - data_locacao
        - data_devolucao
        - id_cliente (Chave Estrangeira - FK ligada a CLIENTE)

    -> FILME
        - id_filme (Chave Primária - PK)
        - titulo
        - ano
        - genero

    -> FILME_LOCAÇÃO
        - id_locacao (Chave Primária Composta / FK)
        - id_filme (Chave Primária Composta / FK)

    -> Cardinalidades do Relacionamento
        - Cliente - Locação (1 para N): Um CLIENTE pode realizar 1 ou várias locações. Uma LOCAÇÃO pertence obrigatoriamente a apenas 1 cliente.
        - Locação - Filme (N para N): Resolvido pela tabela intermediária FILME_LOCAÇÃO. Uma LOCAÇÃO pode conter vários filmes, e um FILME pode estar presente em várias locações ao longo do tempo.