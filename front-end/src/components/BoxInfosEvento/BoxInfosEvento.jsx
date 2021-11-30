import React, { Component } from "react";
import ItemBox from "../ItemBox/ItemBox";
import { useEffect, useState } from "react";
import "./BoxInfosEvento.css";
import api from "../Axios";
import imagemEvento1 from '../../assets/images/criareventos/img/fotoEvento1.png';
import imagemEvento2 from '../../assets/images/criareventos/img/fut1.png';
import imagemEvento3 from '../../assets/images/criareventos/img/fut2.png';
import imagemEvento4 from '../../assets/images/criareventos/img/conserto.png';
import imagemEvento5 from '../../assets/images/criareventos/img/so-alegria.png';

function BoxInfosEvento(props) {

  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");
  const [nome4, setNome4] = useState("");
  const [nome5, setNome5] = useState("");


  useEffect(() => {
    async function atualizarEventosProximos() {
      let params = {
        latitute: -23.5791213,
        longitute: -46.6658027
      }
      const resposta = await api.post("/evento/eventos-proximos", params).then(function (resultadoAtualizacaoEvento) {
        setNome1(resultadoAtualizacaoEvento.data[0][0])
        setNome2(resultadoAtualizacaoEvento.data[1][0])
        setNome3(resultadoAtualizacaoEvento.data[2][0])
        setNome4(resultadoAtualizacaoEvento.data[3][0])
        setNome5(resultadoAtualizacaoEvento.data[4][0])
        console.log("olha o que veio da api!!!", resultadoAtualizacaoEvento.data)
      })
      
    }
    atualizarEventosProximos()
  }, [nome1, nome2, nome3, nome4, nome5]);
  
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
      <ItemBox image={imagemEvento1} nome={nome1}/>
      <ItemBox image={imagemEvento2} nome={nome2}/>
      <ItemBox image={imagemEvento3} nome={nome3}/>
      <ItemBox image={imagemEvento4} nome={nome4}/>
      <ItemBox image={imagemEvento5} nome={nome5}/>
    </aside>
    </>
    );  
}

export default BoxInfosEvento;
