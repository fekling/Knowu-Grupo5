import React, { Component } from "react";
import ItemBox from "../ItemBox/ItemBox";

import "./BoxInfosEvento.css";
import imagemEvento1 from '../../assets/images/criareventos/img/fotoEvento1.png';
import imagemEvento2 from '../../assets/images/criareventos/img/fut1.png';
import imagemEvento3 from '../../assets/images/criareventos/img/fut2.png';
import imagemEvento4 from '../../assets/images/criareventos/img/conserto.png';
import imagemEvento5 from '../../assets/images/criareventos/img/so-alegria.png';

function BoxInfosEvento(props) {
  
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
      <ItemBox image={imagemEvento1} nome="Futebol dos cria"/>
      <ItemBox image={imagemEvento2} nome="Futebolzinho"/>
      <ItemBox image={imagemEvento3} nome="Bandfut"/>
      <ItemBox image={imagemEvento4} nome="Conserto legal"/>
      <ItemBox image={imagemEvento5} nome="So alegria"/>
    </aside>
    </>
    );  
}

export default BoxInfosEvento;
