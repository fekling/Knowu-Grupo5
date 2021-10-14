
import "../assets/css/login-react.css";
import Logo from "../assets/images/logo.png";
import Apple from "../assets/images/apple.png";
import Facebook from "../assets/images/face.png";
import Google from "../assets/images/google.png";
import Localizacao from "../assets/images/localizacao.png";
import Bg from "../assets/images/bg-color.png"

function Index() {
  return (
    <div className="content-login">
        <div className="desktop">
      
            <div className="header-desktop">
            <img src={Logo} alt="" className="logo-desktop" />
            <ul>
               <a href=""> <li>Home</li></a>
               <a href=""> <li>Sobre nós</li></a>
               <a href=""> <li>Contato</li></a>
            </ul>
            <button className="cadastre">Cadastre-se</button>
            </div>
            
            <div className="content-desktop">
                <div className="esquerda">
                <img src={Bg} alt="" className="bg-color-login" />
                    <h1>Entre na sua conta e divulgue seus eventos.</h1>
                    <img src={Localizacao} alt="" className="map" />
                </div>
                <div className="direita">
                <input type="text" className="input-login" placeholder="usuário ou email"/>
                <input type="text" className="input-login" placeholder="Senha"/>
                <button className="button-login-desktop">Login</button>
                <h2>Ou continue com</h2>
            <div className="opcoes">
                <div className="apple">
                    <img src={Apple} alt="" className="apple-logo" />
                </div>
                <div className="google">
                    <img src={Google} alt="" className="google-logo" />
                </div>
                <div className="facebook">
                    <img src={Facebook} alt="" className="facebook-logo" />
                </div>
                </div>
                <h2><u>Esqueceu sua senha</u></h2>
                </div>
            </div>
        </div>
        <div className="mobile">
            <div className="header-mobile">
                <img src={Logo} alt="" className="logo-mobile" />
                <h1>Menu</h1>
            </div>
            <div className="content-mobile">
                <h1>Entre na sua conta e divulgue seus eventos.</h1>
                <input type="text" className="input-login" placeholder="usuário ou email"/>
                <input type="text" className="input-login" placeholder="Senha"/>
                <button className="button-login">Login</button>
                <h2>Ou continue com</h2>
            <div className="opcoes">
                <div className="apple">
                    <img src={Apple} alt="" className="apple-logo" />
                </div>
                <div className="google">
                    <img src={Google} alt="" className="google-logo" />
                </div>
                <div className="facebook">
                    <img src={Facebook} alt="" className="facebook-logo" />
                </div>
            </div>

            <h2><u>Esqueceu sua senha</u></h2>
            </div>
        </div>
    </div>
  );
}

export default Index;