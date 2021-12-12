import React from "react";
import '../../styles/Home/header.css';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PeopleIcon from '@mui/icons-material/People';
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <section>
      <header>
          <div className="logo">
              <a className="logolink" href="#"><img id="landing_logo" src={logo} alt="Logo"/></a>
              <h1><a className="logolink" href="#">Calidad del Aire</a></h1>
          </div>
      </header>
      <nav className='sidebar'>        
        <Link to="/" className=''><HomeIcon/><span>Inicio</span></Link>
        <Link to="/indicators" className=''><InsertChartIcon/><span>Indicadores</span></Link>
        <Link to="/join" className='' ><PeopleIcon/><span>Comunidad</span></Link>
      </nav>  
    </section>
  );
};

export default Header;
