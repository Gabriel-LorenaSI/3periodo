//MIDDLEWARE DE VALIDAÇÃO DO PARAMETRO :qtd
const QTD_MAXIMA = 10

const validarQtd = (req,res,next) =>{
    const texto = String(req.params.qtd).trim()
    //aceita apenas números inteiros positivos (sem decimais, sinais ou letras)
    if(!/^\d+$/.test(texto)){
        return res.status(400).json({erro:"A quantidade deve ser um número inteiro positivo"})
    }
    const qtd = Number(texto)
    if(qtd < 1){
        return res.status(400).json({erro:"A quantidade deve ser no mínimo 1"})
    }
    if(qtd > QTD_MAXIMA){
        return res.status(400).json({erro:`A quantidade máxima permitida é ${QTD_MAXIMA} cartas`})
    }
    req.params.qtd = qtd
    next()
}

export default validarQtd
