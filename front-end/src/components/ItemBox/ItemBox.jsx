import React from "react";

import './ItemBox.css'

function ItemBox(props) {
  return (
    <>
      <div className="item-box-container">
        <img className="item-box-imagem" src={props.image} alt="" />
        <h5 className="item-box-nome">{props.nome}</h5>
        <h6 className="item-box-usuario">{props.usuario}</h6>
      </div>
    </>
  );
}

export default ItemBox;
