import "../assets/css/react.css";
import Seta from "../assets/images/seta.png";
import Logo from "../assets/images/logo.png";
import Sino from "../assets/images/sino.png";
import Bg from "../assets/images/bg-color.png"
import Btn from "../components/BtnEsqueceuSenha";

function Index() {
  return (
    <div className="content">
        <img src={Bg} alt="" className="bg-color" />
      <div className="meio">
        <div className="header">
          <img src={Seta} alt="" />
          <h1 className="text-voltar">Voltar</h1>
        </div>

        <img src={Logo} alt="" className="logo" />
        <img src={Sino} alt="" className="wifi" />
        <h1 className="texto">Esqueceu a senha?</h1>
        <h2 className="sub-titulo">
        Vamos te enviar um link para seu email cadastrado para que possamos alterar sua senha.
        </h2>
        <input type="text" placeholder="Email cadastrado" className="input" />
        <Btn className="confirmar" texto="Enviar link" destino="/recuperar-senha/"></Btn>
      </div>
    </div>
  );
}

export default Index;