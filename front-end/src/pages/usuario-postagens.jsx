import SidebarNavigation from "../components/SidebarNavigation/SidebarNavigation";
import '../assets/css/home-css.css';
import BoxInfosEvento from "../components/BoxInfosEvento/BoxInfosEvento";
import BoxInfosUsuario from "../components/BoxInfoUsuario/BoxInfosUsuario";
import ComentarioPerfilUsuarioWeb from "../components/ComentariosPerfilUsuarioWeb";


function UsuarioPostagens() {
  return (
    <>
      <SidebarNavigation />
      <section className="home-main">
        <ComentarioPerfilUsuarioWeb/>
      </section>
      <div className="container-home"></div>
      <div className="container-home-aside">
        <BoxInfosEvento titulo="Eventos!"/>
        <BoxInfosUsuario titulo="Usuários perto de você!"/>
      </div>
    </>
  );
}

export default UsuarioPostagens;
