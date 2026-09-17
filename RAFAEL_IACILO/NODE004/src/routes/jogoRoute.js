import {Router} from 'express'
import { getAllGame, getByPrice, getById } from '../controller/jogoController.js'
import { midMinMax, midGetById } from '../middleware/jogoMiddleware.js'

const jogoRoute = Router()

jogoRoute.get('/jogos',getAllGame)
//usando paramns
//jogoRoute.get('/jogos/preco_entre/:min/:max', midMinMax,getByPrice)

//usando query
jogoRoute.get('/jogos/preco_entre',midMinMax, getByPrice)
jogoRoute.get('/jogos/id/:id', midGetById, getById)

export default jogoRoute