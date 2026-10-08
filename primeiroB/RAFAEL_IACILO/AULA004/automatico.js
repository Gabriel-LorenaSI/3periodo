const gerar = ()=>{
    const naipes = ['CORAÇÃO', 'ESPADA', 'PAUS', 'OURO']
    const inaipes = ['HEARTS', 'SPADES','CLUBS','DIAMONDS']
    let res = 'const cartas= [\n '
    //coração
    naipes.forEach((naipe,index)=>{
        const n = naipe[0]
        for(let i=1; i<=13;i++){
            let v = i
            if(i==1) v = 'A'
            if(i==11) v = 'J'
            if(i==12) v = 'Q'
            if(i==13) v = 'K'
            res += `{\n id:'${v+n}',\nvalor:'${v}',\nnaipe:'${naipe}',\nimagem:'https://deckofcardsapi.com/static/img/${v+inaipes[index][0]}.png'\n},\n`
        }
    })
    res+="]\nexport default cartas"
    return res
}

console.log(gerar())