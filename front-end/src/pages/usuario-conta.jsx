import SidebarNavigation from "../components/SidebarNavigation/SidebarNavigation";
import '../assets/css/usuario-conta.css';
import BoxInfosEvento from "../components/BoxInfosEvento/BoxInfosEvento";
import BoxInfosUsuario from "../components/BoxInfoUsuario/BoxInfosUsuario";
import * as BsIcons from "react-icons/bs";
import imagemUsuario from '../assets/images/criareventos/img/conta-usuario.png';


function UsuarioConta() {
  return (
    <>
      <SidebarNavigation />
      <section className="conta-main">
        <div className="conta-infos">
          <img className="conta-info-foto" src={imagemUsuario} alt="" />
          <h1 className="conta-info-nome">André Santos</h1>
          <h3 className="conta-info-usuario">@Andezito</h3>
        </div>
      <div className="conta-form">
          <label htmlFor="dataNascimento" className="conta-label">
            Data Nascimento:
          </label>
          <br />
          <input
            type="text"
            name="dataNascimento"
            id="dataNascimento"
            className="conta-input"
          />
          <button className="conta-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
          <br />
          <label htmlFor="nomeUsuario" className="conta-label">
            Gênero:
          </label>
          <br />
          <input
            type="text"
            name="nomeUsuario"
            id="nomeUsuario"
            className="conta-input"
          />
          <button className="conta-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
          <br />
          <label htmlFor="email" className="conta-label">
            E-mail:
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            className="conta-input"
          />
          <a className="conta-alterar" href="#">Alterar email?</a>
          <br />
          <label htmlFor="senha" className="conta-label">
            Senha:
          </label>
          <br />
          <input
            type="password"
            name="senha"
            id="senha"
            className="conta-input"
          />
          <a className="conta-alterar" href="#">Alterar senha?</a>
        </div>
      </section>
      <div className="container-home"></div>
      <div className="container-home-aside">
        <BoxInfosEvento titulo="Eventos!"/>
        <BoxInfosUsuario titulo="Usuários perto de você!"/>
      </div>
    </>
  );
}

export default UsuarioConta;