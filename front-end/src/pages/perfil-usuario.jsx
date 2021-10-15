import "../assets/css/perfil-usuario.css";
import LogoSorriso from "../assets/images/criareventos/img/logosorriso.png";
import FotoPerfilUsuario from "../assets/images/Perfil-Dylan.png";
import HomePerfilUsuario from "../assets/images/sistema/home.png";
import ChatPerfilUsuario from "../assets/images/sistema/chat.png";
import CalendarPerfilUsuario from "../assets/images/sistema/calendar.png";
import BarraPerfilUsuario from "../assets/images/sistema/Rectangle 265.png";
import ImagemPerfilUsuario from "../assets/images/sistema/Rectangle 233.png";
import ContaPerfilUsuario from "../assets/images/sistema/perfil-colorido.png";
import LogoutPerfilUsuario from "../assets/images/sistema/sair.svg";
import LPerfilUsuario from "../assets/images/sistema/link.png";
import Bolinha from "../assets/images/sistema/bolinha.png"
import Fut1 from "../assets/images/criareventos/img/fut1.png"
import Fut2 from "../assets/images/criareventos/img/fut2.png"
import Fut3 from "../assets/images/criareventos/img/fut3.png"
import Conserto from "../assets/images/criareventos/img/conserto.png"
import SoAlegria from "../assets/images/criareventos/img/so-alegria.png"

function PerfilUsuario() {
    return (
    <>
<div>
        <nav className="sidebar-navigation">
          {/* Logo sorriso */}
          <img src={LogoSorriso} className="logo-sorriso" />
          {/* Foto do usuário */}
          <li className="circulo-imagem">
            <img src={FotoPerfilUsuario}className="foto-usuario" />
          </li>
          <div className="icones-abaixo">
            {/* Home (Casinha) */}
            <div className="home-colorido">
              <li><img src={HomePerfilUsuario} id="home" /></li>
            </div>
            {/* Chat */}
            <div className="chat-colorido">
              <li><img src={ChatPerfilUsuario} id="chat" /></li>
            </div>
            {/* Calendario */}
            <div className="calendario-colorido">
              <li><img src={CalendarPerfilUsuario} id="calendario" /></li>
            </div>
            {/* Usuario */}
            <div className="usuario-colorido">
              <img src={BarraPerfilUsuario}alt="" id="retangulo" />
              <li><img src={ContaPerfilUsuario}alt="" id="usuario" /></li>
            </div>
            {/* Logout */}
            <div className="logout-colorido">
              <img src={LogoutPerfilUsuario} id="logout" />
            </div>
          </div>
        </nav>
        {/* Input para pesquisar pessoas */}
        <div className="container-pesquisar-pessoas">
          <div className="header-pesquisar-pessoas">
            <a href="#default" className="pesquisar-pessoas"><input id="input-pessoas" type="text" placeholder="Pesquisar pessoas..." /></a>
          </div>
          {/* Informações do usuário */}
          
          <div className="square">
            <div className="block">
            <img src={FotoPerfilUsuario}className="foto-usuario2" />
              <div className="centered">
                <h1 id="usuario-titulo">André Santos</h1>
                <h4 id="usuario-titulo-pequeno">@Andrezito</h4>
                <p id="usuario-frase">Gosto muito de ver meus amigos, sou fã de narutinho e como pão.</p>
                <img id="link-info" src={LPerfilUsuario}/><h4 id="link-do-usuario">Github.com/Andre</h4>
                <span id="fotos">Fotos</span>
                <img src={ImagemPerfilUsuario}alt="" id="fotos-do-usuario" />                  
              </div>
            </div>
          </div>
          {/* comentários do usuário */}
          <div className="square2">
            <div className="block-meio">
              <div className="centered">
                <div className="meio-usuario">
                  <div className="dialogbox-usuario">
                    <div className="body-usuario-perfil">
                      <div className="message-perfil-usuario">
                        <img src={FotoPerfilUsuario}alt="" id="foto-comentarios-usuario" />
                      </div>
                    </div>
                  </div>
                  {/* Comentario 1 */}
                  <h4 id="nome-user">André Santos </h4><h4 id="nome-do-evento">Assistir TV Cultura e Ouvir MPB</h4>
                  <h4 id="nick-user">@Andrezito</h4>
                  <div className="post-do-perfil-usuario">
                    <h4 id="comentario1">1 dia - Público</h4>
                    <div name id className="comentario-caixa-primeiro" cols={30} rows={8} />
                    <p id="comentario2">Só conteúdo bom!</p>
                    <div className="buttons-do-post">
                      <button className="button-post">Curtir</button>
                      <button className="button-post">Comentar</button>
                      <button className="button-post">Compartilhar</button>
                    </div>
                  </div>
                  {/* Comentario 2 */}
                  <div className="message">
                    <img src={FotoPerfilUsuario}alt="" id="foto-comentarios2" />
                  </div>
                  <h4 id="nome-user2">André Santos - </h4><h4 id="nome-do-evento2">Assistir TV Cultura e Ouvir MPB</h4>
                  <h4 id="nick-user2">@Andrezito</h4>
                  <div className="post-do-perfil-usuario">
                    <h4 id="comentario-segundo">1 dia - Público</h4>
                    <div name id className="comentario-caixa" cols={30} rows={8} />
                    <p id="comentario-dentro2">Só conteúdo bom!</p>
                    <div className="buttons2">
                      <button className="button2">Curtir</button>
                      <button className="button2">Comentar</button>
                      <button className="button2">Compartilhar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Eventos em comum */}
          
          <div className="column-perfil-usuario">
            <img id="bolinha-do-perfil-usuario" src={Bolinha} />

            <img id="bolinha-do-perfil-usuario" src={Bolinha} />

            <img id="bolinha-do-perfil-usuario" src={Bolinha} />

            <div className="card-do-perfil-usuario">
              <h3 id="eventos-letra-do-perfil-usuario">Eventos em comum:</h3>
              <img src={Fut1} alt="" id="evento-perfil" />
                <p>Futebol dos cria</p>
              <img src={Fut2} alt="" id="evento-perfil" />
                <p>Futebolzinho</p>
              <img src={Fut3} alt="" id="evento-perfil" />
                <p>Bandfut</p>
              <img src={Conserto} alt="" id="evento-perfil" />
                <p>Conserto Legal</p>
              <img src={SoAlegria} alt="" id="evento-perfil" />
                <p>So alegria</p>
            </div>
          </div>
        </div></div>
        </>
    );
}

export default PerfilUsuario;