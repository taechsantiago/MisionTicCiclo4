const nombreMenorGas = async () =>{
    let response = await  fetch("https://misiontic2022upb.vercel.app/api/air-quality/limits");
    let limites = await response.json();
    delete limites.limitePM10;
    delete limites.limitePM2punto5;

    let gases = Object.keys(limites);
    const min = Math.min(...Object.values(limites));

    nombreMenor = gases.find(key => limites[key] === min);
    nombreMenor = nombreMenor.substring(6, nombreMenor.length);

    return nombreMenor;
};

//console.log("Minimo: ", await nombreMenorGas());

module.exports.nombreMenorGas = nombreMenorGas;