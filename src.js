global.rangosAQI = [
    {etiqueta: 'excelente', de:0, hasta:30},
    {etiqueta: 'bueno', de:31, hasta:50},
    {etiqueta: 'moderado', de:51, hasta:100},
    {etiqueta: 'bajo', de:101, hasta:150},
    {etiqueta: 'insalubre', de:151, hasta:200},
    {etiqueta: 'peligroso', de:201, hasta:300},
];

const calcularPorcentajes = (limitePM10, limitePM2punto5, limiteNO2, limiteCO, limiteS02, valorPM10, valorPM2punto5, valorNO2, valorCO, valorS02) =>{
    
}

const registrarAQI = (value)=>{
    for(let item of rangosAQI){
        if(value >= item.de && value<= item.hasta){
            return item.etiqueta     
        }
    }
    return 'fuera_de_rango'
}

module.exports.registrarAQI = registrarAQI;
module.exports.calcularPorcentajes = calcularPorcentajes;