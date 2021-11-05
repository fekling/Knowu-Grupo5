import React from "react";
import "../assets/css/perfil-usuario-web.css";
import LogoSorriso from "../assets/images/criareventos/img/logosorriso.png";
import FotoPerfilUsuario from "../assets/images/Perfil-Dylan.png";
import HomePerfilUsuario from "../assets/images/sistema/home.png";
import ChatPerfilUsuario from "../assets/images/sistema/chat.png";
import CalendarPerfilUsuario from "../assets/images/sistema/calendar.png";
import BarraPerfilUsuario from "../assets/images/sistema/Rectangle 265.png";
import ContaPerfilUsuario from "../assets/images/sistema/perfil-colorido.png";
import LogoutPerfilUsuario from "../assets/images/sistema/sair.svg";

function MenuLateralWeb() {
    return (
        <>
            {/* Logo sorriso */}
            <img src={LogoSorriso} className="logo-sorriso-perfil-web" />
            {/* Foto do usuário */}
            <div className="circulo-imagem-perfil-web">
                <img src={FotoPerfilUsuario} className="foto-usuario-perfil-web" />
            </div>
            <div className="icones-abaixo">
                {/* Home (Casinha) */}
                <div className="home-colorido-perfil-web">
                    <img src={HomePerfilUsuario} id="home-perfil-web" />
                </div>
                {/* Chat */}
                <div className="chat-colorido-perfil-web">
                    <img src={ChatPerfilUsuario} id="chat-perfil-web" />
                </div>
                {/* Calendario */}
                <div className="calendario-colorido-perfil-web">
                    <img src={CalendarPerfilUsuario} id="calendario-perfil-web" />
                </div>
                {/* Usuario */}
                <div className="usuario-colorido-perfil-web">
                    <img src={BarraPerfilUsuario} alt="" id="retangulo-perfil-web" />
                    <img src={ContaPerfilUsuario} alt="" id="usuario-perfil-web" />
                </div>
                {/* Logout */}
                <div className="logout-colorido-perfil-web">
                    <img src={LogoutPerfilUsuario} id="logout-perfil-usuario-web" />
                </div>
            </div>
        </>
    )
}

export default MenuLateralWeb;