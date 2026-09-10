import {Router} from 'express'
import { getAllGame, getByPrice } from '../controller/jogoController.js'

const jogoRoutes = Router()

jogoRoutes.get('/jogos', getAllGame)

jogoRoutes.get('/jogos/preco_entre/:min/:max', getByPrice)

export default jogoRoutes;