async function getJogos() {
    const url = 'http://localhost:3000/jogos'
    const res = await fetch(url)
    const dados = await res.json()
    return dados
}

async function renderJogos() {
    const section = document.getElementById('jogos')
    const jogos = await getJogos()
    jogos.forEach((j)=>{
        section.innerHTML += `
        <article class="card">
            <h1>${j.nome}</h1>
            <p class="plataformas">${j.plataformas.join()}</p>
            <p class="preço">${j.preco}</p>
        </article>
        `
    })
}

renderJogos()