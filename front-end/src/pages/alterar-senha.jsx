import seta from "../assets/images/seta.png";
import bg from "../assets/images/bg-color.png";
import Logo from "../assets/images/logo.png";
import "../assets/css/react.css";
import Btn from "../components/BtnEsqueceuSenha";

function Index() {
  return (
    <div className="content">
      <img src={bg} alt="" className="bg-color" />
      <div className="meio">
        <div className="header">
          <img src={seta} alt="" className="seta" />
          <h1 className="text-voltar">Voltar</h1>
        </div>
        <img src={Logo} alt="" className="logo" />
        <h1 className="texto">Altere sua senha:</h1>
        <input type="text" placeholder="Senha" className="input" />
        <input type="text" placeholder="Confirme sua senha" className="input" />
        <Btn className="confirmar" texto="Alterar" destino="/index/">Confirmar</Btn>
      </div>
    </div>
  );
}

export default Index;
