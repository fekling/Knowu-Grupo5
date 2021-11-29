import SidebarNavigation from "../components/SidebarNavigation/SidebarNavigation";
import '../assets/css/home-css.css';
import BoxInfosEvento from "../components/BoxInfosEvento/BoxInfosEvento";
import BoxInfosUsuario from "../components/BoxInfoUsuario/BoxInfosUsuario";
import Post from "../components/Post/Post";
import { useEffect, useState } from "react";
import api from "../components/Axios";


function UsuarioPostagens() {
    var id = 10;

    const [nome, setNome] = useState([]);
    const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    async function buscarUsuario(){
      const resposta = await api.get("/" + id)
      setUsuario(resposta.data)
      console.log("olha o que veio da api!!!",resposta.data)
    }
    buscarUsuario()
  },[nome, usuario]);

  return (
    <>
      <SidebarNavigation titulo1="Postagens" titulo2="Perfil" titulo3="Conta" />
      <section className="home-main">
        <Post 
          key={id}
          nome={usuario.nome}
          usuario={usuario.usuario}
        />
        <Post/>
      </section>
      <div className="container-home-aside">
        <BoxInfosEvento titulo="Eventos!"/>
        <BoxInfosUsuario titulo="Usuários perto de você!"/>
      </div>
    </>
  );
}

export default UsuarioPostagens;
