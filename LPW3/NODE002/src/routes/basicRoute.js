import { Router } from "express";

// importação padrão
import dados from '../dataBase/functions.js'

//importar separado
import { fatorial, soma } from "../dataBase/functions.js";

import usuarios from '../dataBase/usuarios.js'

// importar arquivos json
import jogos from '../dataBase/jogos.json' with{type:"json"}


const basicRoute = Router()

// Rotas 

basicRoute.get ("/", (req, res)=> {
    res.send({
        server: 'Servidor BasicRoute com Rotas "Externas"',
        ok: true
    })
})

basicRoute.get('/sobre', (req, res)=>{
    req.statusCode(200).json({
        system_name: 'Aula DEB1 003',
        author: 'Gabriel',
        version: '0.0.2',
        year: '2026'
    })
})

basicRoute.get("/sobre", (req, res)=>{
    res.status(200).json(xuxa)
})

basicRoute.get("/fatorial/:n",(req, res)=>{
    const num = parseInt(req.params.n)
    const fat = fatorial(num)
    res.send(`
            <b> fatorial de ${num}:<b> ${fat}
            `)
})

basicRoute.get("/usuarios", (req, res)=>{
    res.status(200).json(usuarios)
})

basicRoute.get("/jogos", (req, res)=>{
    res.status(200).json(jogos)
})


export default basicRoute;