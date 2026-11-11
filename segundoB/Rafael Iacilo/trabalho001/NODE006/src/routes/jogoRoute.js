import {Router} from 'express'
import { getAllGame, getByPrice,getById ,setNewGame, updateGame, deleteGame } from '../controller/jogoController.js'
import { midMinMax,midGetById,validate } from '../middlewares/jogoMiddleware.js'

const jogoRoute = Router()

jogoRoute.get('/jogos',getAllGame)
//usando paramns
//jogoRoute.get('/jogos/preco_entre/:min/:max',midMinMax , getByPrice)

//usando query
jogoRoute.get('/jogos/preco_entre', midMinMax, getByPrice)
jogoRoute.get('/jogos/:id', midGetById, getById)
jogoRoute.post('/jogos/create',validate,setNewGame)
jogoRoute.put('/jogos/update/:id', midGetById, validate, updateGame)
jogoRoute.delete('/jogos/delete/:id', midGetById, deleteGame)

export default jogoRoute