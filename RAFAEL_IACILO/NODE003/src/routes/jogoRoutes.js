import {Router} from 'express'
import { getAllGame, getByPrice } from '../controller/jogoController.js'

const jogoRoutes = Router()

jogoRoutes.get('/jogos', getAllGame)

jogoRoutes.get('/jogos/preco_entre/:min/:max', getByPrice)
// jogoRoute.get("/jogos/preco_entre", getByPrice); Usando Query

export default jogoRoutes;