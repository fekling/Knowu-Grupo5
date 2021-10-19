import React, { useState } from 'react';
import "../assets/css/login-react.css";
import Logo from "../assets/images/logo.png";
import Apple from "../assets/images/apple.png";
import Facebook from "../assets/images/face.png";
import Google from "../assets/images/google.png";
import Localizacao from "../assets/images/localizacao.png";
import Bg from "../assets/images/bg-color.png";
import Api from '../components/Axios';
import { useHistory } from "react-router-dom"



function Index() {

    const [login, setLogin] = useState("11");
    const [password, setPassword] = useState("22");
    const [erroAutentication, setErrorAutenticatin] = useState(false);
    const history = useHistory();

    
    return (

    

    <div className="content-login">
        <div className="desktop mobile">

            <div className="header-desktop">
                <img src={Logo} alt="" className="logo-desktop" />
                <ul>
                    <a href=""> <li className="lista-login">Home</li></a>
                    <a href=""> <li className="lista-login">Sobre nós</li></a>
                    <a href=""> <li className="lista-login">Contato</li></a>
                </ul>
                <button className="cadastre">Cadastre-se</button>
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
                    <form action="">
                        <input type="text" className="input-login" placeholder="usuário ou email" onChange={e => setLogin(e.target.value)}/>
                        <input type="text" className="input-login" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                        <button className="button-login" onClick={handleLogin}>Login</button>
                    </form>
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
    </div>
    );

    async function handleLogin() {

        try {

            const { data } = await Api.get('/usuarios/login/',{
                usuario: login,
                senha: password
            });
            console.log(data);
            localStorage.setItem("@dataUser", JSON.stringify(data));
            history.push("/perfil");

        } catch (err) {
            setErrorAutenticatin(true);
            console.log("usuario o usenha incorreto");
        }


    }

    
}



export default Index;