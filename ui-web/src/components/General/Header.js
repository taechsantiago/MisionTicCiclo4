import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <nav>
        <Link to="/" style={{margin: '3rem', fontSize:'20px'}}>Inicio</Link>
        <Link to="/indicators" style={{margin: '3rem', fontSize:'20px'}}>Indicadores</Link>
        <Link to="/join" style={{margin: '3rem', fontSize:'20px'}}>Comunidad</Link>
      </nav>
    </section>
  );
};

export default Header;
