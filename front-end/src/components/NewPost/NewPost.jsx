import React, { Component } from "react";
import ImagemUsuario from "../../assets/images/sistema/imgDefault.png";
import "./NewPost.css";

function NewPost(props) {
  return (
    <div className="newpost-container">
      <img className="newpost-imagem" src={ImagemUsuario} alt="" />
      <h5 className="newpost-nome">{props.nome}</h5>
      <h6 className="newpost-usuario">@{props.usuario}</h6>
      <textarea className="newpost-corpo"
      ></textarea>
      <div className="newpost-container-btn">
        <button className="newpost-btn">Postar</button>
      </div>
    </div>
  );
}

export default NewPost;
