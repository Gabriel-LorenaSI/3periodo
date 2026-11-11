import jwt from 'jsonwebtoken'

export function auth(req,res,next){
    const token = req.headers.authorization
    try{
        const valid = jwt.verify(token,process.env.JWT_SECRET)
        //console.log(valid)
        next()
    }catch(e){
        res.status(401).json({
            ok:false,
            msg:'Token não autorizado'
        })
    }
}

export function authAdmin(req,res,next){
    const token = req.headers.authorization
    try{
        const valid = jwt.verify(token,process.env.JWT_SECRET)
        if(valid.acesso!="admin"){
            res.status(401).json({
                ok:false,
                msg:'Acesso não autorizado'
            })
        }else{
            next()
        }
    }catch(e){
        res.status(401).json({
            ok:false,
            msg:'Token não autorizado'
        })
    }
}