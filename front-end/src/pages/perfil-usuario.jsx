import "../assets/css/perfil-usuario.css";
import LogoSorriso from "../assets/images/criareventos/img/logosorriso.png";
import FotoPerfilUsuario from "../assets/images/andre.svg";
import Like from "../assets/images/like.svg";
import Deslike from "../assets/images/deslike.svg";
import Bloqueio from "../assets/images/bloqueio.svg";
import HomePerfilUsuario from "../assets/images/sistema/home.png";
import ChatPerfilUsuario from "../assets/images/sistema/chat.png";
import CalendarPerfilUsuario from "../assets/images/sistema/calendar.png";
import BarraPerfilUsuario from "../assets/images/sistema/Rectangle 265.png";
import ImagemPerfilUsuario from "../assets/images/foto-usuario.svg";
import ImagemPerfilUsuario2 from "../assets/images/foto-usuario-2.svg";
import ContaPerfilUsuario from "../assets/images/sistema/perfil-colorido.png";
import LogoutPerfilUsuario from "../assets/images/sistema/sair.svg";
import LPerfilUsuario from "../assets/images/sistema/link.png";
import Bolinha from "../assets/images/sistema/bolinha.png";
import Fut1 from "../assets/images/criareventos/img/fut1.png";
import Fut2 from "../assets/images/criareventos/img/fut2.png";
import Fut3 from "../assets/images/criareventos/img/fut3.png";
import Conserto from "../assets/images/criareventos/img/conserto.png";
import SoAlegria from "../assets/images/criareventos/img/so-alegria.png";

function PerfilUsuario() {
  return (
    <>
      <div className="content-perfil">
          <div className="header-menu-perfil">
            <img src={LogoSorriso} alt="" className="logo" />
            <h1>Menu</h1>
          </div>

          <div className="content-perfil">
            <div className="header-content-perfil">
              <img src={FotoPerfilUsuario} alt="" className="foto-perfil-usuario" />
              <h1 className="nome-usuario-pagina-perfil">André Santos</h1>
              <h2 className="usuario-pagina-perfil">@Andrezito</h2>
              <div className="botoes-avaliacao">
                <button className="btn-avaliacao"><img src={Deslike} alt="" /></button>
                <button className="btn-avaliacao"><img src={Like} alt="" /></button>
                <button className="btn-avaliacao"><img src={Bloqueio} alt="" /></button>
              </div>

              <p className="descricao-pagina-perfil">
              Gosto muito de ver meus amigos, sou fã de narutinho e como pão.
              </p>

              <div className="site-perfil">
                <img src={LPerfilUsuario} alt="" />
             <a href=""> <h1>Github.com/AndreSntos</h1></a>
              </div>
      
           
            </div>

            <div className="fotos">
                <h1 className="fotos">Fotos</h1>
                <img src={ImagemPerfilUsuario} alt="" className="fotos-perfil" />
                <img src={ImagemPerfilUsuario2} alt="" className="fotos-perfil" />
              </div>


            <div className="postagens-pagina-perfil">
              <div className="header-pagina-postagem">
                <img src={FotoPerfilUsuario} alt="" className="foto-perfil-pagina-perfil" />
                <div className="info-perfil-postagens">
                  <h1 className="nome-usuario-perfil-postagens">André Santos</h1>
                  <h2 className="usuario-perfil-postagens">@Andrezito</h2>
                </div>
              </div>

              <div className="post-pagina-perfil">
                <p className="mensagem-pagina-perfil">Evento muito massa! dei uma caneta no Renatão, mó perna.
                #Ruimdemais</p>
                <div className="botoes-pagina-perfil-post">
                  <button className="interacao-usuario" id="interacao-usuario">Curtir</button>
                  <button className="interacao-usuario">Comentar</button>
                  <button className="interacao-usuario">Compartilhar</button>
                </div>
              </div>
            </div>

            <div className="postagens-pagina-perfil">
              <div className="header-pagina-postagem">
                <img src={FotoPerfilUsuario} alt="" className="foto-perfil-pagina-perfil" />
                <div className="info-perfil-postagens">
                  <h1 className="nome-usuario-perfil-postagens">André Santos</h1>
                  <h2 className="usuario-perfil-postagens">@Andrezito</h2>
                </div>
              </div>

              <div className="post-pagina-perfil">
                <p className="mensagem-pagina-perfil">Evento muito massa! dei uma caneta no Renatão, mó perna.
                #Ruimdemais</p>
                <div className="botoes-pagina-perfil-post">
                  <button className="interacao-usuario" id="interacao-usuario">Curtir</button>
                  <button className="interacao-usuario">Comentar</button>
                  <button className="interacao-usuario">Compartilhar</button>
                </div>
              </div>
            </div>


          </div>
      </div>
    </>
  );
}

export default PerfilUsuario;
