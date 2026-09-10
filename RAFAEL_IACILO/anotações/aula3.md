arquivo env (--env-file .env)
Controllers 
Repositories (reads)
database (arquivo json)
routes.js (Direcionando as rotas para funções dos controllers)

npm run dev - Colocar o servidor ON (CASO ESTEJA CONFIGURADO NO PACK.JSON)
.env nunca vai para o github, arquivo para guardar anotações importantes
process.env.PORT para importar a pasta .env para a pasta server.js
    app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`)
    })
    app.listen(port ou app.listen(process.env.PORT
        - Puxa o arquivo .env da pasta raiz

PORT - é o que está escrito la dentro da pasta como constante, ele puxa automático de dentro da pasta 

npm i ou npm install - Instala o node_modules já dentro da pasta raiz

Rotas
/
/sobre
/jogos
    - São as primeiras portas para acessar o sistema

Controles - Parte que vai pegar os dados da rota e vai trabalahr ela de forma inteligente

Repositorie - Ele que vai conseguir conversar com o banco de dados 
    Ele consegue traduzir a linguagem do banco de dados 
    Caso tenha 2 bancos com linguagem diferente, você vai precisar mudar daqui para a frente
    Construir funções para determinada linguagem

Bancos de Dados
    Linguagem própria por que está fora do sistema

O que um repository pode fazer
    CRUD
        - Create
        - Serch
        - Updade
        - Delete

with {type: 'json'} - Diz que o arquivo é json e quando transportado vira um objeto para ser usado

req - Requisição
res - Resposta

Troca de informação 
    Usuario <-req-> Back
                req pode usar o params /:var - assumir o paramentro que vai ficar dentro do params
                query é usado depois da "?" ?q= Exemplo+pesquisa
                body é o corpo, ela vai via post escondida












