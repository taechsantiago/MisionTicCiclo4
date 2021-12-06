const nombreMenorGas = async () =>{
    let response = await  fetch("https://misiontic2022upb.vercel.app/api/air-quality/limits");
    let limites = response.json();
    let gases = [limites.limiteNO2, limites.limiteCO, limites.limiteS02]
    const min = Math.min(...gases)
    return min
};

console.log(nombreMenorGas());

module.exports.nombreMenorGas = nombreMenorGas;