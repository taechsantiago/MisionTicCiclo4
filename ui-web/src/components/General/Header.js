import React from "react";
import '../../styles/Home/header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <header>
          <div class="logo">
              <a class="logolink" href="#"><img id="landing_logo" src="logo.png" alt="Logo"/></a>
              <h1><a class="logolink" href="#">Site Name</a></h1>
          </div>
      </header>
      <nav className='sidebar'>        
        <Link to="/" className=''><i class="material-icons">home</i><span>Inicio</span></Link>
        <Link to="/indicators" className=''><i class="material-icons">insert_chart</i><span>Indicadores</span></Link>
        <Link to="/join" className='' ><i class="material-icons">settings</i><span>Comunidad</span></Link>
      </nav>  
    </section>
  );
};

export default Header;
