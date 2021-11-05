import React from "react";
import "../assets/css/perfil-usuario-web.css";
import FotoPerfilUsuario from "../assets/images/Perfil-Dylan.png";


function ComentarioPerfilUsuarioWeb(props) {
    return (
        <>
            <div className="message-perfil-usuario">
                <img src={FotoPerfilUsuario} alt="" id="foto-comentarios-usuario" />
            </div>
            <h4 id="nome-user-perfil-web">{props.nomeuser} - </h4><h4 id="nome-do-evento-perfil-web">{props.nomeevento}</h4>
            <h4 id="nick-user-perfil-web">{props.nickname}</h4>
            <div className="post-do-perfil-usuario-perfil-web">
                <h4 id="comentario1-perfil-web">1 dia - Público</h4>
                <div name id className="comentario-caixa-primeiro-perfil-web" cols={30} rows={8} />
                <p id="comentario2-perfil-web">{props.comentario}</p>
                <div className="buttons-do-post-perfil-web">
                    <button className="button-post-perfil-web">Curtir</button>
                    <button className="button-post-perfil-web">Comentar</button>
                    <button className="button-post-perfil-web">Compartilhar</button>
                </div>
            </div>
        </>
    );
}

export default ComentarioPerfilUsuarioWeb;