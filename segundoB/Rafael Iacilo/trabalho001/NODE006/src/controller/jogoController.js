import { readAll,readPriceBetween,readById, create, update, del} from "../repositories/jogoRepository.js";

export function getAllGame(req,res){
    const jogos = readAll()
    if (jogos.length>0){
        res.status(200).json(jogos)
    }else{
        res.status(201).json({
            message:"não foi encontrado nenhum jogo"
        })
    }
}

export function getByPrice(req,res){
    const min = req.query.min
    const max = req.query.max
    
    // const min = req.params.min
    // const max = req.params.max

    const jogos = readPriceBetween(min,max)

    if (jogos.length>0){
        res.status(200).json(jogos)
    }else{
        res.status(201).json({
            message:"não foi encontrado nenhum jogo"
        })
    }
}

export function getById(req,res){
    const id = req.params.id
    const jogo = readById(id)
    res.status(200).json(jogo)
}

export function setNewGame(req,res){
    //quando vier informação via post
    //usamos o req.body
    const jogo = req.body
    const r = create(jogo)

    res.status(200).json(r)
}

export function updateGame(req,res){
    const id = req.params.id
    const dados = req.body
    const r = update(id,dados)

    if(r){
        res.status(200).json(r)
    }else{
        res.status(404).json({
            message:"jogo não encontrado"
        })
    }
}

export function deleteGame(req,res){
    const id = req.params.id
    const r = del(id)

    if(r){
        res.status(200).json(r)
    }else{
        res.status(404).json({
            message:"jogo não encontrado"
        })
    }
}
