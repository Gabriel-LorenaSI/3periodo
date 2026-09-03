import express from 'express'
import basicRoute from './routes/basicRoute.js'

// criando o app 
const app = express()

// Usando as rotas
app.use(basicRoute)

// Rodar o servidor 
app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000")
})