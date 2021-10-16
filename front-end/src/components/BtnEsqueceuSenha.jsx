import React from 'react';
import {Link} from 'react-router-dom'
import "../assets/css/react.css"

function Btn(props) {
    return (
        <Link to={props.destino}>
            <div className="confirmar">{props.texto}</div>
        </Link>
    );
  }

  export default Btn;