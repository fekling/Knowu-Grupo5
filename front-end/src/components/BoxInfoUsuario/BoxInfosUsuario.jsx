import React, { Component } from "react";
import ItemBox from "../ItemBox/ItemBox";
import { useEffect, useState } from "react";
import api from "../Axios";
import "./BoxInfosUsuario.css";
import imagemUsuario1 from '../../assets/images/criareventos/img/usuario1.png';
import imagemUsuario2 from '../../assets/images/criareventos/img/usuario2.png';
import imagemUsuario3 from '../../assets/images/criareventos/img/usuario3.png';
import imagemEvento4 from '../../assets/images/criareventos/img/conserto.png';
import imagemEvento5 from '../../assets/images/criareventos/img/so-alegria.png';

function BoxInfosUsuario(props) {

  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");
  const [nome4, setNome4] = useState("");
  const [usuario1, setUsuario1] = useState("");
  const [usuario2, setUsuario2] = useState("");
  const [usuario3, setUsuario3] = useState("");
  const [usuario4, setUsuario4] = useState("");


  useEffect(() => {
    async function atualizarEventosProximos() {
      let params = {
        latitute: -23.5791213,
        longitute: -46.6658027
      }
      const resposta = await api.post("/usuarios/atualizarusuarios-proximos", params).then(function (resultadoAtualizacaoEvento) {
        setNome1(resultadoAtualizacaoEvento.data[0][0])
        setNome2(resultadoAtualizacaoEvento.data[1][0])
        setNome3(resultadoAtualizacaoEvento.data[2][0])
        setNome4(resultadoAtualizacaoEvento.data[3][0])
        setUsuario1(resultadoAtualizacaoEvento.data[0][1])
        setUsuario2(resultadoAtualizacaoEvento.data[1][1])
        setUsuario3(resultadoAtualizacaoEvento.data[2][1])
        setUsuario4(resultadoAtualizacaoEvento.data[3][1])
        console.log("olha o que veio da api!!!", resultadoAtualizacaoEvento.data)
      })

    }
    atualizarEventosProximos()
  }, [nome1, nome2, nome3, nome4]);

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
        <ItemBox image={imagemUsuario3} nome={nome1} usuario={usuario1} />
        <ItemBox image={imagemUsuario2} nome={nome2} usuario={usuario2} />
        <ItemBox image={imagemUsuario1} nome={nome3} usuario={usuario3} />
        <ItemBox image={imagemUsuario1} nome={nome4} usuario={usuario4} />
      </aside>
    </>
  );
}

export default BoxInfosUsuario;
