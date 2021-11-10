import SidebarNavigation from "../components/SidebarNavigation/SidebarNavigation";
import "../assets/css/usuario-perfil.css";
import BoxInfosEvento from "../components/BoxInfosEvento/BoxInfosEvento";
import BoxInfosUsuario from "../components/BoxInfoUsuario/BoxInfosUsuario";
import * as BsIcons from "react-icons/bs";
import * as IoIosIcons from "react-icons/io";
import midia1 from '../assets/images/sistema/midia1.png';
import midia2 from '../assets/images/sistema/midia2.png';
import midia3 from '../assets/images/sistema/midia3.png';

function UsuarioPerfil() {
  return (
    <>
      <SidebarNavigation />
      <section className="perfil-main">
        <div className="perfil-form">
          <label htmlFor="nomeCompleto" className="perfil-label">
            Nome Completo:
          </label>
          <br />
          <input
            type="text"
            name="nomeCompleto"
            id="nomeCompleto"
            placeholder="Digite seu nome completo"
            className="perfil-input"
          />
          <button className="perfil-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
          <br />
          <label htmlFor="nomeUsuario" className="perfil-label">
            Nome de Usuário:
          </label>
          <br />
          <input
            type="text"
            name="nomeUsuario"
            id="nomeUsuario"
            placeholder="Digite o nome desejado"
            className="perfil-input"
          />
          <button className="perfil-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
          <br />
          <label htmlFor="site" className="perfil-label">
            Site:
          </label>
          <br />
          <input
            type="url"
            name="site"
            id="site"
            className="perfil-input"
          />
          <button className="perfil-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
          <br />
          <label htmlFor="descricao" className="perfil-label">
            Descrição:
          </label>
          <br />
          <textarea
            name="descricao"
            id="descricao"
            cols="68"
            rows="10"
            className="perfil-textarea"
          ></textarea>
          <button className="perfil-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
        </div>
        <div className="perfil-midia">
          <h1 className="perfil-midia-titulo">Midia:</h1>
          <button className="perfil-midia-btn">
            <IoIosIcons.IoIosAddCircle />
          </button>
          <img className="perfil-midia-image" src={midia3} alt="" />
          <img className="perfil-midia-image" src={midia2} alt="" />
          <img className="perfil-midia-image" src={midia1} alt="" />
        </div>
      </section>

      <div className="container-home"></div>
      <div className="container-home-aside">
        <BoxInfosEvento titulo="Eventos!" />
        <BoxInfosUsuario titulo="Usuários perto de você!" />
      </div>
    </>
  );
}

export default UsuarioPerfil;
