export function midMinMax(req, res, next) {
  const min = parseFloat(req.query.min);
  const max = parseFloat(req.query.max);
  // Se não ser erro, executa a próxima linha. Mas se der erro ele pula para o catch

  if (!isNaN(min) && !isNaN(max)) {
    return next();
  }

  res.status(401).json({
    errors: ["Os valores min e max deve ser numéricos"]
  });
}

export function midGetById(req, res, next){
    const id = req.params.id
    const erros = []

    if(isNaN(parseInt(id)))erros.push("O ID precisa ser um número inteiro")

    if(id<=0)erros.push("O ID precisa ser maior que zero")
    
    if(erros.length==0)
        return next()

    res.status(401).json({
        errors: erros
  });

}
