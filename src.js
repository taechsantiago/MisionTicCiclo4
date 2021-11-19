global.rangosAQI = [
    {etiqueta: 'excelente', de:0, hasta:30},
    {etiqueta: 'bueno', de:31, hasta:50},
    {etiqueta: 'moderado', de:51, hasta:100},
    {etiqueta: 'bajo', de:101, hasta:150},
    {etiqueta: 'insalubre', de:151, hasta:200},
    {etiqueta: 'peligroso', de:201, hasta:300},
];

const porcentaje = (limite, valor) => {
    if (limite > 0){
        return (valor/limite)*100;
    }

    return 0;
}

const calcularPocentajes = (limitePM10, 
                            limitePM2punto5, 
                            limiteNO2, 
                            limiteCO, 
                            limiteS02, 
                            valorPM10, 
                            valorPM2punto5, 
                            valorNO2, 
                            valorCO, 
                            valorS02) => {

    const porcentajes = {
        porcentajePM10: porcentaje(limitePM10, valorPM10),
        porcentajePMpunto2: porcentaje(limitePM2punto5, valorPM2punto5), 
        porcentajeNO2: porcentaje(limiteNO2, valorNO2), 
        porcentajeCO: porcentaje(limiteCO, valorCO), 
        porcentajeSO2: porcentaje(limiteS02, valorS02)
    }

    // calcularPorcentajes(0,100,175,120,200,10,20,75,15,5)

    return porcentajes;
}

const registrarAQI = (value)=>{
    for(let item of global.rangosAQI){
        if(value >= item.de && value<= item.hasta){
            return item.etiqueta     
        }
    }
    return 'fuera_de_rango'
}

module.exports.registrarAQI = registrarAQI;
module.exports.calcularPocentajes = calcularPocentajes;