const nombreMenorGas = async () =>{
    let response = await  fetch("https://misiontic2022upb.vercel.app/api/air-quality/limits");
    let limites = await response.json();
    let gases = [limites.limitePM10, limites.limitePM2punto5, 
                limites.limiteNO2, limites.limiteCO, limites.limiteS02];
    const min = Math.min(...gases);

    return min
};

console.log("Minimo: ", await nombreMenorGas());