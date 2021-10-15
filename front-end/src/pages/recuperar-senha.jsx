import "../assets/css/react.css";
import Seta from "../assets/images/seta.png";
import Logo from "../assets/images/logo.png";
import Wifi from "../assets/images/wifi.png";
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
        <img src={Wifi} alt="" className="wifi" />
        <h1 className="texto">Insira o código que te enviamos</h1>
        <input type="text" placeholder="Código" className="input" />
        <Btn className="confirmar" texto="Confirmar" destino="/alterar-senha/">Confirmar</Btn>
        <div className="reenviar">
        Não recebeu o código? <u>Reenviar</u>
        </div>
      </div>
    </div>
  );
}

export default Index;
