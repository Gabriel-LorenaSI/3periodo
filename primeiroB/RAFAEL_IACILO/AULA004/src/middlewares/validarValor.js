//MIDDLEWARE DE VALIDAÇÃO DO PARAMETRO :valor
const VALORES_VALIDOS = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

const validarValor = (req,res,next) =>{
    const valor = String(req.params.valor).trim().toUpperCase()
    if(!VALORES_VALIDOS.includes(valor)){
        return res.status(400).json({
            erro:"Valor inválido",
            valoresPermitidos: VALORES_VALIDOS
        })
    }
    req.params.valor = valor
    next()
}

export default validarValor
