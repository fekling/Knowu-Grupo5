import "../assets/css/perfil-usuario-web.css";
import FotoPerfilUsuario from "../assets/images/sistema/imgDefault.png";
import ComentarioPerfilUsuarioWeb from "../components/ComentariosPerfilUsuarioWeb";
import Like from "../assets/images/like.svg";
import Deslike from "../assets/images/deslike.svg";
import Bloqueio from "../assets/images/bloqueio.svg";
import Api from '../components/Axios';
import SidebarNavigation from "../components/SidebarNavigation/SidebarNavigation";
import BoxInfosEvento from "../components/BoxInfosEvento/BoxInfosEvento";
import BoxInfosUsuario from "../components/BoxInfoUsuario/BoxInfosUsuario";
import * as AiIcons from 'react-icons/ai';


function PerfilUsuario() {

  
  function handleAvaliar(avaliacao) {
    const id = 14;

    if (avaliacao) {


      try {
        const { data } = Api.patch(`usuarios/avaliar-usuario/${id}`, {
          avaliacao: 2
        });

        console.log("Usuario avaliado positivamente!")

      } catch (err) {
        console.log("usuario não foi avaliado");
      }

    } else {

      try {
        const { data } = Api.patch(`usuarios/avaliar-usuario/${id}`, {
          avaliacao: -3
        });

        console.log("Usuario avaliado negativamente!")

      } catch (err) {
        console.log("usuario não foi avaliado");
      }

    }


  }
  return (
    <>
      <div>
        <SidebarNavigation/>
        {/* Input para pesquisar pessoas */}
        <div className="container-pesquisar-pessoas">
          <div className="header-pesquisar-pessoas">
            <a href="#default" className="pesquisar-pessoas"><input id="input-pessoas" type="text" placeholder="Pesquisar pessoas..." /></a>
          </div>
          {/* Informações do usuário */}

          <div className="square-perfil-usuario-web">
            <div className="block-perfil-usuario-web">
              <img src={FotoPerfilUsuario} className="foto-usuario2-perfil-usuario-web" />
              <div className="centered-perfil-usuario-web">
                <h1 id="usuario-titulo-perfil-usuario-web">André Santos</h1>
                <h4 id="usuario-titulo-pequeno-web">@Andrezito</h4>
                <button className="botoes-avaliacao-web" onClick={() => handleAvaliar(true)}><AiIcons.AiFillLike/></button>
                <button className="botoes-avaliacao-web" onClick={() => handleAvaliar(false)}><AiIcons.AiFillDislike/></button>
                <h5 id="usuario-frase-perfil-usuario-web">Gosto muito de ver meus amigos, sou fã de narutinho e como pão.</h5>
                <img id="link-info-perfil-usuario-web" src={FotoPerfilUsuario} /><h4 id="link-do-usuario">Github.com/Andre</h4>
                <span id="fotos-perfil-usuario-web">Fotos</span>
                <img src={FotoPerfilUsuario} alt="" id="fotos-do-usuario-perfil-usuario-web" />
              </div>
            </div>
          </div>
          {/* comentários do usuário */}
          <div className="square2">
            <div className="block-meio">
              <div className="centered">
                <div className="meio-usuario-perfil-web">
                  <div className="dialogbox-usuario">
                    <div className="body-usuario-perfil">

                    </div>
                  </div>
                  {/* Comentario 1 */}
                  <div className="perfil-web-comentarios">
                    <ComentarioPerfilUsuarioWeb nomeuser="Andre Santos" nomeevento="Progama TV Cultura e Ouvir MPB" nickname="@Andrezito" comentario="Só conteudo bom!" />
                    <ComentarioPerfilUsuarioWeb nomeuser="Andre Santos" nomeevento="Progama TV Cultura e Ouvir MPB" nickname="@Andrezito" comentario="Só conteudo bom!" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Eventos em comum */}

          <div className="column-perfil-usuario-web">

            <BoxInfosEvento titulo="Eventos!"/>
            <BoxInfosUsuario titulo="Usuarios próximos!"/>
          </div>
        </div></div>
    </>
  );


}



export default PerfilUsuario;