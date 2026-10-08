//RESPONSAVEL POR LIDAR COM O REPOSITORIO E AS RODAS
//REGRAS DE NEGÓCIO DO SISTEMA
import CartaRepository from "../repositories/CartasRepository.js"
import { getRandomIntInclusive } from "../shared/util.js"

const CartaController = {
    getCartas: async (req,res) =>{
        const dados = await CartaRepository.getAll()
        if(dados){
            res.status(200).json(dados)
        }else{
            res.status(404).json({erro:"Informações não encontradas"})
        }
    },
    getCarta: async (req,res) => {
        const id = req.params.id
        const carta = await CartaRepository.getById(id)
        if(carta){
            res.status(200).json(carta)
        }else{
            res.status(404).json({erro:"Carta não encontrada"})
        }
    },
    getCartaByNaipe: async (req, res) =>{
        const naipe = req.params.naipe
        const todos = await CartaRepository.getAll()
        const naipes = todos.filter((obj)=>obj.naipe.toLocaleLowerCase()===naipe.toLocaleLowerCase())
        if(naipes){
            res.status(200).json(naipes)
        }else{
            res.status(404).json({erro:"naipe não encontrado"})
        }
    },
    getCartasByValor: async (req,res) =>{
        const valor = req.params.valor
        const cartas = await CartaRepository.getByValor(valor)
        if(cartas.length > 0){
            res.status(200).json(cartas)
        }else{
            res.status(404).json({erro:"Nenhuma carta encontrada para o valor informado"})
        }
    },
    getCartaAleatoria: async (req,res) =>{
        const todos = await CartaRepository.getAll()
        const carta = todos[getRandomIntInclusive(0, todos.length - 1)]
        res.status(200).json(carta)
    },
    getCartasAleatorias: async (req,res) =>{
        const qtd = req.params.qtd
        //copia do baralho para não alterar o original
        const baralho = [...await CartaRepository.getAll()]
        const sorteadas = []
        //cada carta sorteada é removida do baralho, evitando repetições
        for(let i = 0; i < qtd && baralho.length > 0; i++){
            const indice = getRandomIntInclusive(0, baralho.length - 1)
            sorteadas.push(baralho.splice(indice,1)[0])
        }
        res.status(200).json(sorteadas)
    }
}

export default CartaController