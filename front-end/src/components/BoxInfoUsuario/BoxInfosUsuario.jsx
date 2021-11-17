import React, { Component } from "react";
import ItemBox from "../ItemBox/ItemBox";

import "./BoxInfosUsuario.css";
import imagemUsuario1 from '../../assets/images/criareventos/img/usuario1.png';
import imagemUsuario2 from '../../assets/images/criareventos/img/usuario2.png';
import imagemUsuario3 from '../../assets/images/criareventos/img/usuario3.png';
import imagemEvento4 from '../../assets/images/criareventos/img/conserto.png';
import imagemEvento5 from '../../assets/images/criareventos/img/so-alegria.png';

function BoxInfosUsuario(props) {
  
    return (
        <>
    <aside className="boxinfos">
      <ul className="boxinfos-items">
        <li className="boxinfos-titulo">
          <p>
            {props.titulo}            
          </p>
        </li>
      </ul>
      <ItemBox image={imagemUsuario3} nome="Guilherme Pau." usuario="@GuiPau"/>
      <ItemBox image={imagemUsuario2} nome="Felipe Colonhesi" usuario="@Fecolo "/>
      <ItemBox image={imagemUsuario1} nome="Andre Mallasen" usuario="@Andsen"/>
      <ItemBox image={imagemUsuario1} nome="Andre Mallasen" usuario="@Andsen"/>
    </aside>
    </>
    );  
}

export default BoxInfosUsuario;
