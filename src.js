const calcularPorcentajes = (limitePM10, limitePM2punto5, limiteNO2, limiteCO, limiteS02, valorPM10, valorPM2punto5, valorNO2, valorCO, valorS02) =>{
    
}

const registrarAQI = (value)=>{

    for(let item of rangosAQI){
        return item
        if(value >= item.de && value<= item.hasta){
            return item.etiqueta
        }else{
            return 'fuera_de_rango'
        }
    }
}

module.exports.registrarAQI = registrarAQI;
module.exports.calcularPorcentajes = calcularPorcentajes;