//importação de pacote
import express from 'express' 
import basicRoute from './routes/basicRoute.js'
import jogoRoute from './routes/jogoRoute.js'

const port = process.env.PORT

//criando o aplicativo
const app = express()

//usando as rotas
app.use(basicRoute)
app.use(jogoRoute)

//rodar o servidor
app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`)
})


