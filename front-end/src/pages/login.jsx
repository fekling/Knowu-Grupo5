import React, { useState, useCallback } from 'react';
import "../assets/css/login-react.css";
import Logo from "../assets/images/logo.png";
import Apple from "../assets/images/apple.png";
import Facebook from "../assets/images/face.png";
import Google from "../assets/images/Google.png";
import Localizacao from "../assets/images/localizacao.png";
import Bg from "../assets/images/bg-color.png";
import Api from '../components/Axios';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';



function Index() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [erroAutentication, setErrorAutenticatin] = useState(false);
    const history = useHistory();

    const home = useCallback(
        async(dados) => {
          dados.preventDefault();
          window.location = `https://fekling.github.io/Knowu-Grupo5/front-end/src/assets/html/index.html`;
        }
      )

      const sobre_nos = useCallback(
        async(dados2) => {
          dados2.preventDefault();
          window.location = `https://fekling.github.io/Knowu-Grupo5/front-end/src/assets/html/index.html#sobre_nos`;
        }
      )
      
      const contato = useCallback(
        async(dados2) => {
          dados2.preventDefault();
          window.location = `https://fekling.github.io/Knowu-Grupo5/front-end/src/assets/html/index.html#contato`;
        }
      )

    
    return (
    <div className="content-login">
        {/* { setErrorAutenticatin && (
            <h1> erro de login ou senha</h1>
        )

        } */}
        <div className="desktop mobile">

            <div className="header-desktop">
                <img src={Logo} alt="" className="logo-desktop" />
                <ul>
                    <a onClick={home}> <li className="lista-login">Home</li></a>
                    <a onClick={sobre_nos}> <li className="lista-login">Sobre nós</li></a>
                    <a onClick={contato}> <li className="lista-login">Contato</li></a>
                </ul>
                <Link to={"/cadastro"}>
                <button className="cadastre">Cadastre-se</button>
                </Link>
                
            </div>

            <div className="mobile">
            <div className="header-mobile">
                <img src={Logo} alt="" className="logo-mobile" />
                <h1>Menu</h1>
            </div>
        </div>

            <div className="content-desktop-login content-mobile-login">
                <div className="esquerda">
                    <img src={Bg} alt="" className="bg-color-login" />
                    <h1 className="titulo-login">Entre na sua conta e divulgue seus eventos.</h1>
                    <img src={Localizacao} alt="" className="map" />
                </div>
                <div className="direita">
                    
                        <input type="text" className="input-login" placeholder="usuário ou email" onChange={e => setLogin(e.target.value)}/>
                        <input type="password" className="input-login" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                        <button className="button-login" onClick={handleLogin}>Login</button>
                    
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
                    <Link to={"/esqueceu-senha"}>
                    <h2><u>Esqueceu sua senha</u></h2>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );

    async function handleLogin() {

        try {
            const { data } = await Api.post('/usuarios/login/',{
                usuario: login,
                senha: password
            });
            
            console.log(data);  
            var id = JSON.stringify(data);
            // history.push('/home-evento')
            window.location = `https://fekling.github.io/Knowu-Grupo5/?id=${id}`;

        } catch (err) {
            setErrorAutenticatin(true);
            console.log("usuario o usenha incorreto");
        }


    }

    
}



export default Index;