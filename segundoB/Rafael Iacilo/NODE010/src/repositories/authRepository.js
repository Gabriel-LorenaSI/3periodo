import usuarios from '../database/usuarios.js'
import pg from 'pg'

export function readUser(email,senha){
    const user = usuarios.find((u)=>u.email==email && u.senha==senha)
    return user
}