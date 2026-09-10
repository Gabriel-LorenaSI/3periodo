import { readAll,readPriceBetween } from "../repositories/jogoRepository.js";

// Pegar todos os jogos
export function getAllGame(req, res){
    const jogos = readAll()

    if (jogos.length>0){
        res.status(200).json(jogos)
    }else{
        res.status(201).json({
            message:"Nenhuma informação foi encontrada!"
        })
    }
}

export function getByPrice(req,res){
    const min = req.params.min
    const max = req.params.max

    //const min = req.query.min
    //const max = req.query.max

    const jogos = readPriceBetween(min,max)

    if (jogos.length>0){
        res.status(200).json(jogos)
    }else{
        res.status(201).json({
            message:"Nenhum jogo foi encontrado!"
        })
    }
}