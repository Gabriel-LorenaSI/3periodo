//RESPONSABILIDADE DO ARQUIVO REPOSITORY

import cartas from "../database/cartas.js"


const CartaRepository = {
    getAll: async () =>{
        return cartas
    },
    getById: async (id) =>{
        const carta = cartas.find((carta)=> carta.id.toLocaleLowerCase() === id.toLocaleLowerCase())
        return carta
    },
    getByValor: async (valor) =>{
        return cartas.filter((carta)=> carta.valor.toLocaleLowerCase() === valor.toLocaleLowerCase())
    },
    create: async (carta) =>{},
    update: async (id,carta) =>{},
    delete: async (id) => {}
}

export default CartaRepository