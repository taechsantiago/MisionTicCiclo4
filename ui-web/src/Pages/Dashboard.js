import MediaCard from '../components/Dashboard/MediaCard';
import Map from '../components/Map';
import back from '../images/back.png';
import '../styles/dashboard.css';

function Dashboard() {
  return (
    <div className="App">
      <section>
        <div className="headerContent">
          <p>Indices e Indicadores de la Calidad del Aire</p>
          <video poster={back} autoPlay={true} muted loop>
              <source src="https://drive.google.com/uc?id=1E0enl8wT1e3SJHeoquRAYCOAq1SB30ov" type="video/mp4" />
          </video>
        </div>
      </section>
      <section style={{margin:'80px auto', width:'85%', textAlign:'justify', textJustify:'inter-word'}}>
        <p>En Colombia, el monitoreo y control de la contaminación atmosférica ha tomado día a día mayor relevancia, debido a que, según cifras de la Organización Mundial de la Salud, una de cada ocho muertes ocurridas a nivel mundial, es ocasionada por la contaminación del aire. A nivel nacional, el Departamento Nacional de Planeación estimó que, durante el año 2015, los efectos de este fenómeno estuvieron asociados a 10.527 muertes y 67,8 millones de síntomas y enfermedades. Adicionalmente, los costos ambientales asociados a la contaminación atmosférica en Colombia, durante los últimos años se incrementaron pasando de 1,1% del PIB de 2009 ($5,7 billones de pesos) a 1,59% del PIB de 2014 ($12 billones de pesos) y del 1,93% del PIB en 2015 ($15.4 billones de pesos), lo cual pone en evidencia la necesidad de seguir implementando estrategias para controlar, evaluar y monitorear estas sustancias.</p>
      </section>
      <div style={{display:'flex', flexFlow:'row'}}>
        <section style={{display:'flex', flexFlow: 'wrap', width: '700px'}}>
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </section>
        <Map/>
      </div>      
    </div>
  );
}

export default Dashboard;