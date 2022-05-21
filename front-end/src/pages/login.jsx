import React, { useState, useCallback } from "react";
import "../assets/css/style.css";

// Images
import Logo from "../assets/img/logo.png";
import OpenMenu from "../assets/img/open-menu.png";
import CloseMenu from "../assets/img/close-menu.png";
import Instagram from "../assets/img/Instagram.png";
import Facebook from "../assets/img/Facebook.png";
import Youtube from "../assets/img/Youtube.png";
import Twitter from "../assets/img/Twitter.png";
import Localizacao from "../assets/img/localizacao.png";

// Api

import Api from '../components/Axios';

// Router
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Index() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [erroAutentication, setErrorAutenticatin] = useState(false);
  const history = useHistory();

  const home = useCallback(async (dados) => {
    dados.preventDefault();
    window.location = `https://fekling.github.io/Knowu-Grupo5/front-end/src/assets/html/index.html`;
  });

  const sobre_nos = useCallback(async (dados2) => {
    dados2.preventDefault();
    window.location = `https://fekling.github.io/Knowu-Grupo5/front-end/src/assets/html/index.html#sobre_nos`;
  });

  const contato = useCallback(async (dados2) => {
    dados2.preventDefault();
    window.location = `https://fekling.github.io/Knowu-Grupo5/front-end/src/assets/html/index.html#contato`;
  });

  return (
    <div className="content-login">
      <nav id="navigation">
        <div className="wrapper">
          <img src={Logo} className="logo" />
          <div className="menu">
            <ul>
              <li>
                <a onClick={home}>Home</a>
              </li>
              <li>
                <a onClick={sobre_nos}>Sobre nós</a>
              </li>
              <li>
                <a onClick={contato}>Contato</a>
              </li>
            </ul>
            <Link to={"/cadastro"}>
              <a href="" className="button">
                Cadastre-se
              </a>
            </Link>

            <ul className="social-links">
              <li>
                <img
                  src={Facebook}
                  href="htps://facebook.com"
                  target="_blank"
                ></img>
              </li>
              <li>
                <img
                  src={Instagram}
                  href="htps://instagram.com"
                  target="_blank"
                ></img>
              </li>
              <li>
                <img
                  src={Youtube}
                  href="htps://youtube.com"
                  target="_blank"
                ></img>
              </li>
              <li>
                <img
                  src={Twitter}
                  href="htps://twitter.com"
                  target="_blank"
                ></img>
              </li>
            </ul>
          </div>
          <button
            className="open-menu"
            aria-expanded="false"
            onClick={openMenu}
          >
            <img src={OpenMenu} alt="" />
          </button>
          <button
            className="close-menu"
            aria-expanded="false"
            onClick={closeMenu}
          >
            <img src={CloseMenu} alt="" />
          </button>
        </div>
      </nav>

      <section id="login">
        <div className="wrapper">
          <div className="col-a">
            <img src={Localizacao} alt="" />
          </div>
          <div className="col-b">
            <div className="content">
              <p>Entre na sua conta e divulgue seus eventos</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Usuário ou e-mail"
                onChange={(e) => setLogin(e.target.value)}
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button" onClick={handleLogin}>
                Login
              </button>
              <Link to={"/esqueceu-senha"}>
                <a href="">Esqueceu sua senha</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
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

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

export default Index;
