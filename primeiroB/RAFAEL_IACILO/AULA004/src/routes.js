import { Router } from "express";
import CartaController from "./controllers/CartaController.js";
//importação dos middlewares
import validarValor from "./middlewares/validarValor.js";
import validarQtd from "./middlewares/validarQtd.js";
//importação dos controllers
//import CartaController from "./controllers/CartaController.js";


const routes =  Router()

//ROTA RAIZ
routes.get('/',(req,res)=>{
    res.status(200).json({mensagem:"Sistema de Cartas do Baralho"})
})

//ROTAS DE CARTAS
routes.get('/cartas',CartaController.getCartas)
routes.get('/carta/id/:id',CartaController.getCarta)
routes.get('/cartas/naipe/:naipe',CartaController.getCartaByNaipe)
routes.get('/cartas/valor/:valor',validarValor,CartaController.getCartasByValor)
routes.get('/carta/aleatorio',CartaController.getCartaAleatoria)
routes.get('/cartas/aleatorio/:qtd',validarQtd,CartaController.getCartasAleatorias)




export default routes
