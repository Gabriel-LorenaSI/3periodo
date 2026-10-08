import express from 'express'
import routes from './routes.js'
import config from './config.js'

const app = express()

app.use(routes)

app.listen(config.port,config.host, ()=>{
    console.log(`Servidor rodando em ${config.host}:${config.port}`)
})

