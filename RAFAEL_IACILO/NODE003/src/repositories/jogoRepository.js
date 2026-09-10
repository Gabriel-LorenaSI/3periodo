import jogos from '../database/jogos.json' with {type: 'json'} // Diz que o arquivo é json e quando transportado vira um objeto para ser usado

// Ler todos os jogos
export function readAll(){
    return jogos
}

// jogos entre preço X e Y - isso é um Vetor
export function readPriceBetween(min, max){
    const dados = jogos.filter((j)=> j.preco>=min && j.preco<=max)
    return dados
}

export function create(jogo){
    return null
}

export function update(jogo){
    return null
}

export function del(ID_jogo){
    return null
}