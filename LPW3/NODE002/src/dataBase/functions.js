export function soma(a,b){
    return a+b
}

export function fatorial(n){
    let r = n 
    for(let i=n-1; i>0;i--){
        r*=i
    }
    return r
}

const dados = {
        system_name: 'Aula DEB1 003',
        author: 'Gabriel',
        version: '0.0.2',
        year: '2026'
}

export default dados