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

const calcularPocentajes = async(valorPM10, 
                            valorPM2punto5, 
                            valorNO2, 
                            valorCO, 
                            valorS02) => {

    let response = await fetch("https://misiontic2022upb.vercel.app/api/air-quality/limits");
    let limits = await response.json();

    const porcentajes = {
        porcentajePM10: porcentaje(limits.limitePM10, valorPM10),
        porcentajePM2punto5: porcentaje(limits.limitePM2punto5, valorPM2punto5), 
        porcentajeNO2: porcentaje(limits.limiteNO2, valorNO2), 
        porcentajeCO: porcentaje(limits.limiteCO, valorCO), 
        porcentajeS02: porcentaje(limits.limiteS02, valorS02)
    }

    return porcentajes;
}

const registrarAQI = async(value)=>{
    let indice = -1;
    let response = await fetch("https://misiontic2022upb.vercel.app/api/air-quality/aqi-ranges");
    let rangosAQI = await response.json();

    for(let item of rangosAQI){
        if(value >= item.de && value<= item.hasta){
            return item.etiqueta     
        }
    }
    return 'fuera_de_rango'
}

module.exports.registrarAQI = registrarAQI;
module.exports.calcularPocentajes = calcularPocentajes;