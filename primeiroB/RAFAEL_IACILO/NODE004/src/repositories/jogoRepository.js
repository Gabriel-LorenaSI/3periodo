import jogos from '../database/jogos.json' with {type:'json'}

export function readAll(){
    return jogos
}

export function readPriceBetween(min, max){
    const dados = jogos.filter((j)=> j.preco>=min && j.preco<=max)
    return dados
}

export function readById(id){
    const jogo = jogos.find((j)=>j.id==id)
    return jogo
}

export function create(jogo){
    return null
}
export function update(jogo){
    return null
}
export function del(id_jogo){
    return null
}