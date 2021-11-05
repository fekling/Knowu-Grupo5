import React from "react";
import "../assets/css/perfil-usuario-web.css";
import Fut1 from "../assets/images/criareventos/img/fut1.png"
import Fut2 from "../assets/images/criareventos/img/fut2.png"
import Fut3 from "../assets/images/criareventos/img/fut3.png"
import Conserto from "../assets/images/criareventos/img/conserto.png"
import SoAlegria from "../assets/images/criareventos/img/so-alegria.png"

function CardDeEventos(props) {
    return (
        <>
            <div>
                <img src={Fut1} alt="" id="evento-perfil-web" />
                <p id="nome-evento-perf-web">{props.nomedoevento}</p>
            </div>

        </>
    );
}

export default CardDeEventos;