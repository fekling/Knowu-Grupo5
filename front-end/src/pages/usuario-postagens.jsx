import SidebarNavigation from "../components/SidebarNavigation/SidebarNavigation";
import '../assets/css/home-css.css';
import BoxInfosEvento from "../components/BoxInfosEvento/BoxInfosEvento";
import BoxInfosUsuario from "../components/BoxInfoUsuario/BoxInfosUsuario";
import Post from "../components/Post/Post";
import { useEffect, useState } from "react";
import api from "../components/Axios";
import ItemBox from "../components/ItemBox/ItemBox";
import NewPost from "../components/NewPost/NewPost";


function UsuarioPostagens() {

  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  id = 1;

  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    async function buscarUsuario() {
      const resposta = await api.get("/usuarios/nome-usuario/" + id)
      setNome(resposta.data[0].nome)
      setUsuario(resposta.data[0].usuario)
    }
    buscarUsuario()
  }, [nome, usuario]);

  return (
    <>
      <SidebarNavigation titulo1="Postagens" titulo2="Perfil" titulo3="Conta" />
      <section className="home-main">
        <NewPost 
        key={id}
        nome={nome}
        usuario={usuario}
        />
        <Post
          key={id}
          nome={nome}
          usuario={usuario}
        />
        <Post key={id}
          nome={nome}
          usuario={usuario} />
      </section>
      <div className="container-home-aside">
        <BoxInfosEvento titulo="Eventos!" />
        <BoxInfosUsuario titulo="Usuários perto de você!" />
      </div>
    </>
  );
}

export default UsuarioPostagens;
