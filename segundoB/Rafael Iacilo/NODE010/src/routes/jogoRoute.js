import {Router} from 'express'
import { getAllGame, getByPrice,getById ,setNewGame } from '../controller/jogoController.js'
import { midMinMax,midGetById,validate } from '../middlewares/jogoMiddleware.js'
import { auth,authAdmin } from '../middlewares/authMiddleware.js' 

const jogoRoute = Router()

jogoRoute.get('/jogos',authAdmin,getAllGame)
//usando paramns
//jogoRoute.get('/jogos/preco_entre/:min/:max',midMinMax , getByPrice)

//usando query
jogoRoute.get('/jogos/preco_entre', midMinMax, getByPrice) //qualquer um acessa
jogoRoute.get('/jogos/:id',auth, midGetById, getById) //qualquer usuario comum
jogoRoute.post('/jogos/create',authAdmin,validate,setNewGame) //somente usário Administrador

export default jogoRoute