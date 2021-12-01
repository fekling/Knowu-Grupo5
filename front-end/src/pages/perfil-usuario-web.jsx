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
import Post from "../components/Post/Post";
import { useEffect, useState } from "react";
import NewPost from "../components/NewPost/NewPost";


function PerfilUsuario() {


  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  id = 1;

  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  var conteudo = "Muito bacana o evento, #futebol"
  var conteudo2 = "Já foram em um evento de sertanejo? Estou pensando em ir"
  var conteudo3 = "Nada melhor do que um show do Pericles numa sexta às 20h #felicidade"

  useEffect(() => {
    async function buscarUsuario() {
      const resposta = await Api.get("/usuarios/nome-usuario/" + id)
      setNome(resposta.data[0].nome)
      setUsuario(resposta.data[0].usuario)
    }
    buscarUsuario()
  }, [nome, usuario]);



  function handleAvaliar(avaliacao) {
    
    alert("TESTE")
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
        <div className="header-pesquisar-pessoas">
          <a href="#default" className="pesquisar-pessoas"><input id="input-pessoas" type="text" placeholder="Pesquisar pessoas..." /></a>
        </div>
        
        {/* Input para pesquisar pessoas */}
        <SidebarNavigation />
          {/* Informações do usuário */}

          <div className="square-perfil-usuario-web">
            <div className="block-perfil-usuario-web">
              <img src={FotoPerfilUsuario} className="foto-usuario2-perfil-usuario-web" />
              <div className="centered-perfil-usuario-web">
                <h1 id="usuario-titulo-perfil-usuario-web">{nome}</h1>
                <h4 id="usuario-titulo-pequeno-web"onClick={() => handleAvaliar(true)}>@{usuario}</h4>
                <button className="botoes-avaliacao-web" ><AiIcons.AiFillLike /></button>
                <button className="botoes-avaliacao-web" onClick={() => handleAvaliar(false)}><AiIcons.AiFillDislike /></button>
                <h5 id="usuario-frase-perfil-usuario-web">Gosto muito de ver meus amigos, sou fã de narutinho e como pão.</h5>
                <img id="link-info-perfil-usuario-web" src={FotoPerfilUsuario} /><h4 id="link-do-usuario">Github.com/{usuario}</h4>
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
                  {/* Comentario 1 */}
                  <Post
                    key={id}
                    nome={nome}
                    usuario={usuario}
                    conteudo={conteudo}
                  />
                  <br />
                  <Post
                    key={id}
                    nome={nome}
                    usuario={usuario}
                    conteudo={conteudo2}
                  />
                  <br />
                  <Post
                    key={id}
                    nome={nome}
                    usuario={usuario}
                    conteudo={conteudo3}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Eventos em comum */}

          <div className="column-perfil-usuario-web">

            <BoxInfosEvento titulo="Eventos!" />
            <br />
            <BoxInfosUsuario titulo="Usuarios próximos!" />
          </div>
        </div>
    </>
  );


}



export default PerfilUsuario;