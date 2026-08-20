// importar os pacotes 

import express from 'express'

// criar o app 
const app = express()

// Rotas 
app.get('/', (req,res)=>{ // req = Request, Res = Response
    res.send('Você é gay')
})

app.get('/sobre', (req, res)=>{
    res.send({
        Autor: "Gabriel Lorena",
        Versão: "1.0.0.0",
        Ano : "2026"
    })
})

app.get('/api/v2/pokemon/:name', (req, res)=>{ // /:name = Colocar o que o usuário vai digitare buscar no banco de dados
    const pokemon = req.params.name
    res.send({
        pokemon:pokemon
    })
})

// Ouvidor 
app.listen(3000, ()=>{
    console.log("Servidor ativo na porta 3000")
})