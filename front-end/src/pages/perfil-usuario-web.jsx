import "../assets/css/perfil-usuario-web.css";
import FotoPerfilUsuario from "../assets/images/Perfil-Dylan.png";
import LPerfilUsuario from "../assets/images/sistema/link.png";
import Fut1 from "../assets/images/criareventos/img/fut1.png"
import Fut2 from "../assets/images/criareventos/img/fut2.png"
import Fut3 from "../assets/images/criareventos/img/fut3.png"
import Conserto from "../assets/images/criareventos/img/conserto.png"
import SoAlegria from "../assets/images/criareventos/img/so-alegria.png"
import MenuLateralWeb from "../components/MenuLateralWeb";
import ComentarioPerfilUsuarioWeb from "../components/ComentariosPerfilUsuarioWeb";
import Like from "../assets/images/like.svg";
import Deslike from "../assets/images/deslike.svg";
import Bloqueio from "../assets/images/bloqueio.svg";
import CardDeEventos from "../components/CardDeEventos";]
import Api from '../components/Axios';


function PerfilUsuario() {
  return (
    <>
      <div>
        <nav className="sidebar-navigation-perfil-web">
          <MenuLateralWeb />
        </nav>
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
                <h5 id="usuario-frase-perfil-usuario-web">Gosto muito de ver meus amigos, sou fã de narutinho e como pão.</h5>
                <img id="link-info-perfil-usuario-web" src={LPerfilUsuario} /><h4 id="link-do-usuario">Github.com/Andre</h4>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Eventos em comum */}

          <div className="column-perfil-usuario-web">
            <button className="bolinhas-coloridas-web" onSubmit={handleAvaliar(true)}>
              <img src={Like} />
            </button>

            <button className="bolinhas-coloridas-web" onSubmit={handleAvaliar(false)}>
              <img src={Deslike} />
            </button>

            <button className="bolinhas-coloridas-web">
              <img src={Bloqueio} />
            </button>

            <div className="card-web">
              <h4 id="eventos-letra-web">Eventos em comum:</h4>
              <CardDeEventos nomedoevento="Futebol dos cria" />
              <CardDeEventos nomedoevento="Futebol dos cria" />
              <CardDeEventos nomedoevento="Futebol dos cria" />
              <CardDeEventos nomedoevento="Futebol dos cria" />
            </div>
          </div>
        </div></div>
    </>
  );



  async function handleAvaliar(avaliacao) {

    const id = 14;

    if (avaliacao) {


      try {
        const { data } = await Api.post(`usuarios/avaliar-usuario/${id}`, {
          isGood: true
        });

        console.log("Usuario avaliado positivamente!")

      } catch (err) {
        console.log("usuario não foi avaliado");
      }

    } else {

      try {
        const { data } = await Api.post(`usuarios/avaliar-usuario/${id}`, {
          isGood: false
        });

        console.log("Usuario avaliado negativamente!")

      } catch (err) {
        console.log("usuario não foi avaliado");
      }

    }


  }

}

export default PerfilUsuario;