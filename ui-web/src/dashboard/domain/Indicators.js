import React, {useEffect, useState} from 'react';
import { Grid } from '@mui/material';
import Speedometer from './components/Speedometer';
import { Typography } from '@mui/material';
import CardView from './components/CardView';

import { getParticlesInfo } from '../infrastructure/handler';

const Indicators = () => {
    const [particlesInfo, setParticlesInfo] = useState([]);

    useEffect(() => {
        getParticlesInfo().then(
            (resp) => {
                setParticlesInfo(resp.data);
            }
        )
    }, []);

    return (
        <div>
            <Typography variant={'h3'} sx={{mt: '50px', mb: '20px'}}>
                Indicadores
            </Typography>
            <Grid container spacing={4} sx={{justifyContent: 'center'}}>
                <Grid container spacing={1} item md={12} sx={{justifyContent: 'center'}}>
                    {
                        particlesInfo.map((particle, id) => 
                            <Grid item sm={4} md={2.4} key={id}>
                                <CardView 
                                    speedometer={
                                        <Speedometer 
                                            max={particle.limit} 
                                            value={particle.currentValue} 
                                            segments={1000} 
                                            title={particle.name + ' - ' + String(particle.currentValue) + '%'}
                                        />
                                    }
                                />
                            </Grid> 
                        )
                    }
                </Grid>

                <Grid container spacing={1} item md={12}>
                    <Grid item xs={12} sm={7} md={7}>
                        <Typography variant={'body1'} align={'justify'}>
                            En Colombia, el monitoreo y control de la contaminación atmosférica ha tomado día 
                            a día mayor relevancia, debido a que, según cifras de la Organización Mundial de la Salud, 
                            una de cada ocho muertes ocurridas a nivel mundial, es ocasionada por la contaminación del 
                            aire. A nivel nacional, el Departamento Nacional de Planeación estimó que, durante el año 
                            2015, los efectos de este fenómeno estuvieron asociados a 10.527 muertes y 67,8 millones 
                            de síntomas y enfermedades. Adicionalmente, los costos ambientales asociados a la 
                            contaminación atmosférica en Colombia, durante los últimos años se incrementaron pasando 
                            de 1,1% del PIB de 2009 ($5,7 billones de pesos) a 1,59% del PIB de 2014 ($12 billones 
                            de pesos) y del 1,93% del PIB en 2015 ($15.4 billones de pesos), lo cual pone en evidencia 
                            la necesidad de seguir implementando estrategias para controlar, evaluar y monitorear 
                            estas sustancias.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} md={5}>
                        <img src='/test_image.jpg' alt='test_image'></img>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Indicators;
